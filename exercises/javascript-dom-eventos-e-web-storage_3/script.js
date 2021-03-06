function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

let calendarDays = document.getElementById('days');

for (d in dezDaysList) {
  date = dezDaysList[d]
  let day = document.createElement('li');
  day.className = 'day';
  day.innerHTML = date;
  calendarDays.appendChild(day);
  if (date === 24 || date === 25 || date === 31) {
    day.className += ' holiday';
  }
  if (date === 4 || date === 11 || date === 18 || date === 25) {
    day.className += ' friday';
  }
}


function holidaysButton(bntName) {
  let bnt = document.createElement('button');
  let addBnt = document.querySelector('.buttons-container');
  bnt.innerHTML = bntName;
  bnt.id = 'bnt-holiday';
  addBnt.appendChild(bnt);
}

holidaysButton('Feriados')

function changeHolidays(){
  let getBnt = document.querySelector('#bnt-holiday');
  let getHoliday = document.querySelectorAll('.holiday');
  let firstBgColor = 'rgb(238,238,238)';
  let secondBgColor = 'rgb(0, 255, 127)';

  getBnt.addEventListener('click', function() {
    for (i in getHoliday) {
      if (getHoliday[i].style.backgroundColor === secondBgColor) {
        getHoliday[i].style.backgroundColor = firstBgColor;
      } else {
        getHoliday[i].style.backgroundColor = secondBgColor;
      }
    }
  })
};

changeHolidays();