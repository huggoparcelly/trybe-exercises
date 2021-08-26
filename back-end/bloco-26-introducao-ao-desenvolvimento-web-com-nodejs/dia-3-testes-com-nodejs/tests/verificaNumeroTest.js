const {expect} = require('chai');
const verificaNumero = require('../verificaNumero');

describe('Executa o script que verifica numeros', () => {
  
  describe('Quando o parâmetro for um número maior que zero', () => {
    describe('a resposta é', () => {
      
      it('uma "string"', () => {
        const resposta = verificaNumero(1);
  
        expect(resposta).to.be.a('string');
      });

      it('positivo', () => {
        const resposta = verificaNumero(1);
  
        expect(resposta).to.be.equal('positivo')
      });
    })
  });
  
  describe('Quando o parâmetro for um número menor que zero', () => {
    describe('a resposta é', () => {
      it('uma "string"', () => {
        const resposta = verificaNumero(1);
  
        expect(resposta).to.be.a('string');
      });

      it('negativo', () => {
        const resposta = verificaNumero(-1);
  
        expect(resposta).to.be.equal('negativo');
      });
    });
  });
  
  describe('Quando o parâmetro for zero', () => {
    describe('a resposta é', () => {
      it('uma "string"', () => {
        const resposta = verificaNumero(1);
  
        expect(resposta).to.be.a('string');
      });
      
      it('neutro', () => {
        const resposta = verificaNumero(0);
  
        expect(resposta).to.be.equal('neutro');
      });
    });
  });

  describe('Quando o parâmetro não for um número', () => {
    describe('a resposta é', () => {
      it('o valor deve ser um número', () => {
        const resposta = verificaNumero('a');

        expect(resposta).to.be.equal('o valor deve ser um número');
      })
    });
  })
})