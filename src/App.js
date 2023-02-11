import React from 'react';
// import Pessoa from './components/Pessoa'
// import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Form'
// import Condicional from './components/Condicional';
// import OutraLista from './components/OutraLista';
// import SeuNome from './components/SeuNome';
// import {useState} from 'react'
// import Saudacao from './components/Saudacao';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

function App() {

  // const meusItens = ['React', 'Vue', 'Angular']
  // const [nome, setNome]=useState()
  // // const name = 'Alice'
  // // const newName = name.toUpperCase()
  // function sum(a, b) {
  //   return a + b
  // }

  // const url = 'https://via.placeholder.com/150'
  return (
   
    <div className="App">

<Router>
<ul>
  <li><Link to="/home">Home</Link></li>
  <li><Link to="/empresa">Empresa</Link></li>
  <li><Link to="/contato">Contato</Link></li>
</ul>

<Switch>
  <Route exact path="/home">
    <Home />
  </Route>
  <Route path="/empresa">
    <Empresa />
  </Route>
  <Route path="/contato">
    <Contato />
  </Route>
</Switch>

</Router>
    {/* <SeuNome setNome={setNome} />
    <Saudacao nome={nome}/>

      <OutraLista itens={meusItens} />
      <Condicional />


      <h2>Alterando o JSK</h2> */}


      {/* <p>Olá, {newName}</p> */}

    {/* <Form />

      <Evento />
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" /> */}

      {/* <SayMyName nome='Vitoria' />
      <SayMyName nome='Lais' />
      <SayMyName nome={name} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="desenvolvedor"
        foto={url} alt="Rodrigo"
      /> */}
{/* 
      <List />

      <HelloWorld /> */}


    </div>
  );
}

export default App;
