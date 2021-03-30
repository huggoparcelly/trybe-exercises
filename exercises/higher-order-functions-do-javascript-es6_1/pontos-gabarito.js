// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const answers = (correctAnswers) => {
  return (studentAnswers) => {
    return () => {
      let score = 0;
      for (let i = 0; i < correctAnswers.length; i += 1) {
        if (studentAnswers[i] === 'N.A') {
          score = score
        }
        else if (studentAnswers[i] === correctAnswers[i]) {
          score += 1;
        } else { 
          score -= 0.5
        }
      }
      return score;
    }
  }
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const checked = answers(rightAnswers);
console.log(checked(studentAnswers)());