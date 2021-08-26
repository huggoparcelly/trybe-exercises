const {expect} = require('chai');
const verificaNumero = require('../verificaNumero');

describe('Executa o script que verifica numeros', () => {
  describe('a resposta', () => {
    
    it('é uma "string"', () => {
      const resposta = verificaNumero(1);

      expect(resposta).to.be.a('string');
    });

    it('positivo para numero maior que zero', () => {
      const resposta = verificaNumero(1);

      expect(resposta).to.be.equal('positivo')
    });

    it('negativo para numero menor que zero', () => {
      const resposta = verificaNumero(-1);

      expect(resposta).to.be.equal('negativo');
    });

    it('neutro quando for igual a zero', () => {
      const resposta = verificaNumero(0);

      expect(resposta).to.be.equal('neutro');
    })
  })
})