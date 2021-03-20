window.onload = function() {
  function setBackGroundColor(color) {
    let bgChange = document.querySelector(".content"); // pega o elemento que vai mudar o bg
    bgChange.style.backgroundColor = color; // altera o bg para a cor selecionada
    localStorage.setItem ("banckgroundColor", color); //salva a cor que foi selecionada
  }

  
  let bntColorBg = document.querySelectorAll('#bgColor>button'); //chama os botões
  for (bnt in bntColorBg) {
    bntColorBg[bnt].addEventListener('click', function(event) {
      setBackGroundColor(event.target.innerHTML);
    })
  } //for para passar por cada um e pegar os valores neles e já atribuir a cor


  function setTextColor (color){
    let textChange = document.querySelectorAll('.paragraph');
    for (let p in textChange) {
      textChange[p].style.color = color;
    }
    localStorage.setItem("fontColor", color);
  }

  
  let bntColortext = document.querySelectorAll('#textColor>button');
  for (let bnt in bntColortext) {
    bntColortext[bnt].addEventListener('click', function(event) {
      setTextColor(event.target.innerHTML);
    })
  }
  
  function initialize() {
    let backgroundColor = localStorage.getItem("banckgroundColor")
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) setTextColor(fontColor)
  }

  initialize();
}

