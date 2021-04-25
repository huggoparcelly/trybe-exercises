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

describe('New implementation', () => {
  test('if the function change', () => {
    random.mockImplementation((a, b) => a / b);
    random(10, 2);
    expect(random).toBeCalled();
    expect(random(10, 2)).toBe(5);
    expect(random).toHaveBeenCalledTimes(2)
  })
})
