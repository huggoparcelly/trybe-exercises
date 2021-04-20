const { it, expect, test } = require('@jest/globals');
const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz } = require('./exercicio1');

describe('Testes da função soma', () => {
  test('Soma dois parâmetros', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
  test('Testa se a função lança erros', () => {
    expect(() => { sum(4, "5") }).toThrowError();
    expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
  })
});

describe('Teste da função Remove', () => {
  test('Remover um item do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4])).not.toEqual([1, 3, 4])
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
});

describe('Teste da função remove se tiver o item no array', () => {
  test('Remove um item do array se ele constar', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
});

describe('Teste da função FizzBuzz', () => {
  test('numero divisivel por 3 e 5 retorna FizzBuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  })
  test('numero divisivel apenas por 3 retorna fizz', () => {
    expect(myFizzBuzz(9)).toEqual('fizz')
  })
  test('numero divisivel apenas por 5 retorna buzz', () => {
    expect(myFizzBuzz(10)).toEqual('buzz')
  })
  test('numero não divisivel por 3 ou 5 retorna o numero', () => {
    expect(myFizzBuzz(7)).toEqual(7)
  })
  test('se não for numero retorna false', () => {
    expect(myFizzBuzz('Olá')).toEqual(false)
  })
})