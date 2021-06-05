// código refatorado com ajuda do gabarito 10.1

function mapString(objectMap, string) {
  const splitString = string.split('');
  const mappedArray = splitString.map((character) => {
    if(objectMap[character]) {
      return objectMap[character];
    }
    return character;
  });
  return mappedArray.join('');
}

function encode(string) {
  letters = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5  
  }
  return mapString(letters, string);
}

function decode(string) {
  numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }
  return mapString(numbers, string)
}

module.exports = {
  decode,
  encode,
}