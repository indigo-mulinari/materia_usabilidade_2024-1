import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => 
{
  return <div id='tudo' >
    <label class='rotulo' htmlFor='Pergunta'>
    Qual sua pergunta?
    </label>

    <input type='text' id='pergunta' class='box'>
    </input>

    <button id='button'>
      Enviar
    </button>

    <label class='rotulo' htmlFor='Resposta'>
    Resposta:
    </label>
    
    <input type='text' id='resposta' class='box'>
    </input>

    Adeus Mundo ◞‸◟
    </div>
}

ReactDOM.render(
  <App />, document.querySelector("#root")
)