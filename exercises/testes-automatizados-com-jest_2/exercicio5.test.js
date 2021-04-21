const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalName = Animals.find((animal) => animal.name === name);
      if (!animalName) {
        return reject('Nenhum animal com esse nome!')
      };

      return resolve(animalName);
    }, 100);
  })
);


const getAnimal = (name) => (
  // Adicione o código aqui.
  findAnimalByName(name).then(list => list)
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      };

      return reject({ error: 'Nenhum animal com essa idade'})
    }, 100);
  })
);

const getListByAge = (age) => (
  findAnimalByAge(age).then(list => list)
);

// ---------------------

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Teste findAnimalByAge', () => {
  test('Retorna um array com os animais encontrados pela idade', () => {
    const age = 2;
    expect.assertions(1);
    return getListByAge(age).then(animal => {
      expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
    });
  });
  test('Quando não existe o animal com a idade procurada', () => {
    const age = 4;
    expect.assertions(1);
    return getListByAge(age).catch(error => 
      expect(error).toEqual({error: 'Nenhum animal com essa idade'})
    );
  });
});