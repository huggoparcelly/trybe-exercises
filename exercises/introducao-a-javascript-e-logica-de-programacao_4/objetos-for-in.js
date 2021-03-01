let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

let infoTio = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim'
};


console.log('Bem-vinda, ' + info.personagem);

console.log(info)

for (key in info){
  console.log(key)
}

for (key in info){
  console.log(info[key]);
};



for (key in info){
  if (info[key] === info.recorrente && info[key] === 'Sim' && infoTio[key] === 'Sim'){
    console.log('Ambos recorrentes');
  } else{
    console.log(info[key] + ' e ' + infoTio[key]);
  }
};
