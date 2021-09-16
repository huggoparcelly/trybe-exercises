const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');


describe('Ao chamar o controller de getById', () => {
  const ID_EXAMPLE = '604cb554311d68f491ba5781';
  const request = {};
  const response = {};

  describe('quando não é encontrado nenhum filme com o ID passado', () => {
    
    before(() => {
      request.params = {id: ID_EXAMPLE};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(null);
    });
    
    
    after(() => {
      MoviesServices.getById.restore();
    });


    it('é chamado o método "status" passando o código 404', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "json" passando a messagem "Filme não encontrado"', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith({message: "Filme não encontrado"})).to.be.equal(true);
    });

  });

  describe('quando é encontrado um filme com o ID passado', () => {
    
    const expectedMovie = {
      id: ID_EXAMPLE,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    
    before(() => {
      request.params = {id: ID_EXAMPLE};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(expectedMovie)
    });

    after(() => {
      MoviesServices.getById.restore();
    });

    it('é chamado o método "status" passando o código 200', async() => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('recebe um objeto', async() => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    })
  });

});