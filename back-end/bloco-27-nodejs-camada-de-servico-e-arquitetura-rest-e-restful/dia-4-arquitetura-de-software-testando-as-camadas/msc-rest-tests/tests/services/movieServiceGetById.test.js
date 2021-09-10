const sinon = require('sinon');
const { expect } = require('chai');
const { ObjectId } = require('mongodb');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');


describe('Busca o filme pelo Id', () => {
  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  describe('quando não é encontrado nenhum filme com o ID passado', () => {

    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(null);
    });
  
    after(() => {
      sinon.restore();
    });

    it('retorna "null"', async() => {
      const movie = await MoviesService.getById(ID_EXAMPLE);

      expect(movie).to.be.null;
    })
  });

  describe('quando é encontrado um filme com o ID passado', () => {
    const expectedMovie = {
      id: ID_EXAMPLE,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(MoviesModel, 'getById')
        .resolves( { ...expectedMovie } );
    });

    after(() => {
      sinon.restore();
    });

    it('retorna um objeto', async() => {
      const movie = await MoviesModel.getById(ID_EXAMPLE);

      expect(movie).to.be.an('object')
    });

    it('o objeto deve possuir as propriedades: "id", "title", "releaseYear" e "directedBy"', async() => {
      const movie = await MoviesModel.getById(ID_EXAMPLE);

      expect(movie).to.include.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });
})