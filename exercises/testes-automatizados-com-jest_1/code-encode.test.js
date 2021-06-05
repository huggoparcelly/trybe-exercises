const {decode, encode} = require('./code-encode');

describe('Test decode-encode', () => {
  test('if are functions', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });

  test('if encode returns are ok', () => {
    expect(encode('palavra')).toBe('p1l1vr1');
    expect(encode('nenem')).toBe('n2n2m');
    expect(encode('dindim')).toBe('d3nd3m');
    expect(encode('osso')).toBe('4ss4');
    expect(encode('urubu')).toBe('5r5b5');
  });

  test('if decode returns are ok', () => {
    expect(decode('p1l1vr1')).toBe('palavra');
    expect(decode('n2n2m')).toBe('nenem');
    expect(decode('d3nd3m')).toBe('dindim');
    expect(decode('4ss4')).toBe('osso');
    expect(decode('5r5b5')).toBe('urubu');
  });

  test('if length of parameter is equal', () => {
    expect(encode('huggo').length).toEqual(5);
    expect(decode('h5gg4').length).toEqual(5);
  })
});