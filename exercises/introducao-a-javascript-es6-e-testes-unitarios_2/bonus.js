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

const morningL2 = (objModif, keyAdd, valueKey) => {
  objModif[keyAdd] = valueKey
  return objModif
}
morningL2(lesson2, 'turno', 'manhã')


const allLessons = {lesson1: lesson1, lesson2 : lesson2, lesson3: lesson3}

// 1-  Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

const countMath = (lessons) => {
  let contAluno = 0;
    if (lessons.lesson1.materia === 'Matemática') {
      contAluno += lessons.lesson1.numeroEstudantes
    }
    if (lessons.lesson2.materia === 'Matemática') {
      contAluno += lessons.lesson2.numeroEstudantes
    }
    if (lessons.lesson3.materia === 'Matemática') {
      contAluno += lessons.lesson3.numeroEstudantes
    }
    console.log(contAluno)
  }

// countMath(allLessons)

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const infos = (lessons, teacher) => {
  let countAluno = 0
  const allLess = [];
  for (let lesson in lessons) {
    if(lessons[lesson]['professor'] == teacher) {
      // array com as disciplinas
      allLess.push(lessons[lesson]['materia'])
      // contagem dos alunos
      countAluno += lessons[lesson]['numeroEstudantes']
    }
  }
  return {lessons: allLess, estudantes: countAluno};
}


const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, infos(allLessons, name));
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'))