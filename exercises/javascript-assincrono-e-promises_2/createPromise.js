const sumRand = () => {
  // Gera um array de tamanho 10.
  const myArray = Array.from(
    {length: 10},
    () => Math.floor(Math.random () * 50) + 1
  );
  // adiciona os números ao quadrado em um array e faz a soma
  const sum = myArray.map((number) => number * number)
    .reduce((a, b) => a + b, 0);
  
  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
}

const arrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((a, b) => a + b);

const fetchPromise = async () => {
  try {
    const sum = await sumRand();
    const sumFromSum = await arrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
