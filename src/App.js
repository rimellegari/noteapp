//importando componentes
import React, { Component } from "react";
import FormCadastro from "./componentes/FormCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas";
//importando css
import "./assets/app.css";
import "./assets/index.css";
//função que será renderiada no index.js
class App extends Component {
//declarar no construtor o estado natural
  constructor() {
    super();
    this.state = {
      notas:[]
    };
  }
  /*o App.js é o arquivo que contempla tanto as funcionalidades de inserção de info como criar notas,
   por isso a função de criar notas será pública e colocada no arquivo app.js*/
   criarNota(titulo, texto){
     //objeto que representa o array
    const novaNota = {titulo, texto};
    //criar novo array
    const novoArrayNotas= [...this.state.notas,novaNota]
    //criando novo estado p renderizar
    const novoEstado = {
      notas:novoArrayNotas
    }
    //adicionar nova nota à lista de notas
    this.setState(novoEstado)
    //chamar método render para atualizar a renderização ao adicionar nota  

   }

       /*função para apagar nota*/

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1)
    this.setState({notas:arrayNotas})
    }
  
  render() {
    console.log("render")
    return (
      //criando formulário para criar notas
      <main className="conteudo">
        <FormCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas

        apagarNota = {this.deletarNota.bind(this)}
        notas = {this.state.notas}/>
      </main>
    );
  }
}
export default App;
