function somaMult(a, b, c) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) reject( new Error("Informe apenas números"));

    const result = (a + b) * c;
    if(result < 50 ) reject(new Error("Valor muito baixo"));
    
    resolve(result);
  })
}

somaMult(10, 20, 40)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))