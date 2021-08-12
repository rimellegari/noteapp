import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./lista.css"

//criando classe para renderizar lista de nota com a classe CardNota

class ListaDeNotas extends Component {
  render() {
    //criando arrays para trabalhar implementar categorias dinamicas da anotações
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li className="lista-notas_item"  key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
