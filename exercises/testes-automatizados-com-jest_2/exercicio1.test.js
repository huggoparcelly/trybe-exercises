const { it, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Test uppercase function', () => {
  it('Test trasforming an string in uppercase', (done) => {
    uppercase('test', (str) => {
      expect(str).toEqual('TEST');
      done();
    })
  })
})