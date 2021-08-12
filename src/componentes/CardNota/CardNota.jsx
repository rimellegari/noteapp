import React, { Component } from "react";

//importando arquivo css
import "./notas.css"

//componente que armazena informações do form em forma de card
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">Título</h3>
        </header>
        <p className="card-nota_texto">Escrever sua nota</p>
      </section>
    );
  }
}

export default CardNota;
