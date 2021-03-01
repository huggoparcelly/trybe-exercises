// function

function compareTree (num1, num2, num3){
  if (num1 > num2 && num1 > num3){
    console.log("O primeiro número é o maior")
  }else if (num2 > num1 && num2 > num3){
    console.log("O segundo número é o maior")
  }else {
    console.log("O terceiro número é o maior")
  }
};


compareTree(2, 5, 20);