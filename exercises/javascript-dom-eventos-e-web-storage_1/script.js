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