const {expect} = require('chai');
const escreveEmAquivo = require('../escreveEmArquivo');


describe('Chama a função "escreveEmAquivo"', () => {
  describe('quando a escrita é feita com sucesso', () => {
    describe('a resposta é', () => {
      it('uma string', () => {
        const resposta = escreveEmAquivo('meu-arquivo', 'testes');

        expect(resposta).to.be.a('string');
      })

      it('com o valor "ok"', () => {
        const resposta = escreveEmAquivo('meu-arquivo', 'testes');

        expect(resposta).to.be.equal('ok');
      })
    })
  })
});