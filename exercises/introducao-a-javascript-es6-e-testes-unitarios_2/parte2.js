const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const morningL2 = (objModif, keyAdd, valueKey) => {
  objModif[keyAdd] = valueKey
  return objModif
}

console.log(morningL2(lesson2, 'turno', 'manhã'))

// Exercicio 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keyList = (paramObj) => Object.keys(paramObj);
console.log(keyList(lesson1));

// Exercicio 3 - Crie uma função para mostrar o tamanho de um objeto.
const lenObject = (obj) => { const listKeys = Object.keys(obj); 
  return listKeys.length}
console.log(lenObject(lesson1));

// Exercicio 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valuesList = (paramObj) => Object.values(paramObj);
console.log(valuesList(lesson3))

// Exercicio 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, lesson1, lesson2, lesson3)
console.log(allLessons)

const allLessons1 = {lesson1: lesson1, lesson2 : lesson2, lesson3: lesson3}
console.log(allLessons1)

// Exercicio 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allStudants = allLessons1['lesson1']['numeroEstudantes'] + allLessons1['lesson2']['numeroEstudantes'] + allLessons1['lesson3']['numeroEstudantes']
console.log(allStudants)

// Exercicio 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const nameKey = (obj, position) => Object.values(obj)[position]
console.log(nameKey(lesson2, 0))

// Exercicio 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const parKeyValue = (obj, keyName, valueKey) => {
  resp = ''
  const par = Object.entries(obj)
  for (i in par) {
    if (par[i][0] === keyName && par[i][1] === valueKey) {
      resp = true
    } else {
      resp = false
    }
  }
  
  return resp
}

console.log(parKeyValue(lesson3, 'materia', 'Maria Clara'))
