//importando componentes
import React, { Component } from "react";
import FormCadastro  from "./componentes/FormCadastro";
import  ListaDeNotas from "./componentes/ListaDeNotas";
//importando css
import "./assets/app.css"
import './assets/index.css';
//função que será renderiada no index.js
class App extends Component {
  render(){return (
    //criando formulário para criar notas
    <main className="conteudo">
    <FormCadastro/>
    <ListaDeNotas/>
    </main>
  );
}
}
export default App;
