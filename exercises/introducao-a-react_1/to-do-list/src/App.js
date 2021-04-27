import React from 'react';


const tasks = ['Comprar pão', 'Fazer a feira', 'Pagar boletos', 'Estudar']

function App() {
  return (<ul>{ tasks.map((taks) => <li>{taks}</li>)}</ul>);
}

export default App;
