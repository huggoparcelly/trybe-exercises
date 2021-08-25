// função que consome a promise do exercicio anterior

function somaMult(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) reject( new Error("Informe apenas números"));

    const result = (num1 + num2) * num3;
    if(result < 50 ) reject(new Error("Valor muito baixo"));
    
    resolve(result);
  })
}

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1)
}

async function callSomaMult() {

  const num1 = randomNumber();
  const num2 = randomNumber();
  const num3 = randomNumber();
  
  try {
    const result = await somaMult(num1, num2, num3);
    console.log(result);
  } catch (err) {
    console.log(err.message)
  }
}

callSomaMult();