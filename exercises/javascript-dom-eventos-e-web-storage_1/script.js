function newText(text) {
  document.getElementsByTagName('p')[0].innerHTML = text;
}

newText('Realizado profissionalmente, feliz, bem fisica e mentalmente.')

function newBgColor(bgColor) {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = bgColor;
}

newBgColor('rgb(76,164,109)')


function newBoxColor(boxColor) {
  document.querySelectorAll('.center-content')[0].style.backgroundColor = boxColor;
}

newBoxColor('white');


function newTitle (text) {
  document.getElementsByClassName('title')[0].innerHTML = text;
}

newTitle('Exercício 5.1 - JavaScripit')


function upper(tagName) {
  
  let paragrafo = document.getElementsByTagName(tagName);
  for (tag in paragrafo) {
    paragrafo[tag].innerHTML = paragrafo[tag].innerHTML.toUpperCase();
  }
}

upper('p');


function imprimir(tagName) {
  let texto = document.getElementsByTagName(tagName);
  for (tag in texto) {
    console.log(texto[tag].innerHTML);
  }
}

imprimir('p');
