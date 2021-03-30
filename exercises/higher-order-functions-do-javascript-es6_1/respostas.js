// Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .
// A validação da resposta não deve ser case sensitive.
// Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))
// Sugestão de respostas a serem validadas.
// const correctAnswer = 'higher order function';
// const userAnswer = 'HIGHER ORDER FUNCTION';

const answers = (correctAnswer) => {
  return (userAnswer) => {
    return correctAnswer.toLowerCase() === userAnswer.toLowerCase() ? true : false;
  }
}

const correctAnswer = answers('higher order function');
const userAnswer = correctAnswer('HIGHER ORDER FUNCTION');

console.log(userAnswer)
console.log(answers('paz e amor')('paz e amor'))