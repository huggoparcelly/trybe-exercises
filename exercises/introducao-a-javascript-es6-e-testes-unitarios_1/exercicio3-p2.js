let clickCount = 0
const buttonCount = document.getElementById('btn-cont');
const count = document.getElementById('contagem');
buttonCount.addEventListener('click', () => {
  clickCount += 1
  count.innerHTML = clickCount;
});