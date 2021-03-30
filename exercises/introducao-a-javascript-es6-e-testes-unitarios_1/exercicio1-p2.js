
const fatorial = (num) => {
  let fator = 1;
  for (let i = 1; i <= num; i += 1) {
    fator *= i;
  }
  console.log(`${num}! =  ${fator}`)
}

fatorial(4);