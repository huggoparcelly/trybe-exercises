const sinon = require('sinon');
const { MongoClient, ObjectId } = require('mongodb');
const { expect } = require('chai');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Busca o filme pelo Id', () => {
  let connectionMock; 
  const DBServer = new MongoMemoryServer();

  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('quando não é encontrado nenhum filme com o ID passado', () => {
    it('retorna "null"', async () => {
      const movies = await MoviesModel.getById(ID_EXAMPLE);

      expect(movies).to.be.null;
    });
  });

  describe('quando é encontrado nenhum filme com o ID passado', () => {

    const expectedMovie = {
      _id: ObjectId(ID_EXAMPLE),
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }; 

    before( async() => {
      await connectionMock.collection('movies').insertOne({ ...expectedMovie })
    });

    it('retorna um objeto', async() => {
      const movie = await MoviesModel.getById(ID_EXAMPLE);

      expect(movie).to.be.an('object');
    });

    it('o objeto possui os atributos "id", "title", "directedBy", "releaseYear"', async() => {
      const movie = await MoviesModel.getById(ID_EXAMPLE);

      expect(movie).to.include.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  })
});