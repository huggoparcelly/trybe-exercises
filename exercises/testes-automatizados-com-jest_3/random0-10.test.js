
const { expect } = require('@jest/globals');
let random = require('./random0-10');

jest.mock('./random0-10')

describe('Tests whit mock to random function', () => {
  test('if the function be called', () => {
    random = jest.fn().mockReturnValue(10);
    random();
    expect(random).toHaveBeenCalled();
    expect(random()).toBe(10);
    expect(random).toHaveBeenCalledTimes(2)
  })
});

describe('Division', () => {
  test('if the function change', () => {
    random = jest.fn().mockImplementation((a, b) => a / b);
    random(10, 2);
    expect(random).toHaveBeenCalled();
    expect(random(10, 2)).toBe(5);
  });
});

describe('Multiply', () => {
  test('if parameter are multiplied', () => {
    random = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(random(1, 2, 3)).toBe(6);
    expect(random).toHaveBeenCalled()
    expect(random).toHaveBeenCalledTimes(1)
  });
  
  test('if mock was reseted', () => {
    random.mockReset();

    random.mockImplementation(a => a * 2);
    expect(random(3)).toBe(6);
    expect(random).toHaveBeenCalled()
    expect(random).toHaveBeenCalledTimes(1)
  });
});