const service = require('./strings')

jest.mock('./strings')

describe('Mock the functions strings', () => {
  it('should mock returns a string in lowerCase', () => {
    
    service.upperCase = jest.fn().mockImplementation((string) => string.toLowerCase());

    expect(service.upperCase('Huggo')).toBe('huggo')
  });

  it('should mock returns de last letter', () => {
    
    service.firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1 ]);

    expect(service.firstLetter('huggo')).toBe('o')
  });

  it('sould mock returns three strings concatened', () => {

    service.concatened = jest.fn().mockImplementation((a, b, c) => a + b + c);

    expect(service.concatened('hu','gg','o')).toBe('huggo');
  });
});