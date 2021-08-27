const fs = require('fs');
const sinon = require('sinon');
const {expect} = require('chai');

const escreveEmAquivo = require('../escreveEmArquivo');


describe('Chama a função "escreveEmAquivo"', () => {
  describe('quando a escrita é feita com sucesso', () => {
    
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });
  
    after(() => {
      fs.writeFileSync.restore();
    });

    describe('a resposta é', () => {

      it('uma string', () => {
        const resposta = escreveEmAquivo('arquivo.txt', 'testes');
        expect(resposta).to.be.a('string');
      });

      it('com o valor "ok"', () => {
        const resposta = escreveEmAquivo('arquivo.txt', 'testes');
        expect(resposta).to.be.equals('ok');
      });

    });
  });
});
