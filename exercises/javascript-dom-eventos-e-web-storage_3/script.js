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


function btnFriday(nameDay) {
  let fridayButton = document.createElement('button');
  let getBntContainer = document.querySelector('.buttons-container');
  fridayButton.id = 'btn-friday';
  fridayButton.innerHTML = nameDay;
  getBntContainer.appendChild(fridayButton);
}

btnFriday('Sexta-feira');

function changeTextFriday(arrayFridays) {
  let getBtnFriday = document.querySelector('#btn-friday'); //botão
  let getFriday = document.querySelectorAll('.friday'); //dias
  let textBtnFriday = 'SEXTOU!'; //conteúdo do botão "sexta-feira"
  
  getBtnFriday.addEventListener('click', function () {
    for (day in getFriday){
      if (getFriday[day].innerHTML === textBtnFriday) {
        getFriday[day].innerHTML = arrayFridays[day];
      } else {
        getFriday[day].innerHTML = textBtnFriday;
      }
    }
  });
};

let fridays = [4, 11, 18, 25]
changeTextFriday(fridays);

function zoomOn() {
  let day = document.querySelector('#days');
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; 
  })
}

function zoomOff() {
  let day = document.querySelector('#days');
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  });
};

zoomOn();
zoomOff();

function myTasks (tasks) {
  let getMyTasks = document.querySelector('.my-tasks');
  let taskName = document.createElement('spam');
  taskName.innerHTML = tasks;
  getMyTasks.appendChild(taskName); 
}

myTasks('Projeto');


function colorSub(color) {
  let getMyTasks = document.querySelector('.my-tasks');
  let taskBg = document.createElement('div');
  taskBg.className = 'task';
  taskBg.style.backgroundColor = color;
  getMyTasks.appendChild(taskBg);
}

colorSub('green');

function selection() {
  let getTask = document.querySelector('.task');

  getTask.addEventListener('click', function (event) {
    if (getTask.className === 'task') {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
  }
  });
};

selection();


function eventDay() {
  let day = document.querySelector('#days');
  let selectedTask = document.getElementsByClassName('task selected');
  let task = document.querySelector('.task');
  let taskColor = task.style.backgroundColor;

  day.addEventListener('click', function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (selectedTask.length !== 0 && eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)'
    }
  });
}

eventDay();


function addNewTask (){
  let newInput = document.querySelector('#task-input');
  let taskList = document.querySelector('.task-list');
  let btnAdd = document.querySelector('#btn-add');

  

  btnAdd.addEventListener('click', function() {
    if (newInput.value.length > 0) {
      let newTaskList = document.createElement('li');
      newTaskList.innerText = newInput.value;

      taskList.appendChild(newTaskList);
      newInput.value = '';
    } else {
      alert('Error: Campo Vazio!')
    }
  });

  newInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13  && newInput.value.length > 0) {
      let newTaskList = document.createElement('li');
      newTaskList.innerText = newInput.value;

      taskList.appendChild(newTaskList);
      newInput.value = '';
    }
  });
};

addNewTask();