import React, { Component } from "react";

//importando arquivo css
import "./notas.css"

//importando o svg

//import deleteSVG from "../../assets/img/clear.svg"

//criando componente - nome deve ter primeira letra maiuscula
import {ReactComponent as DeleteSVG} from "../../assets/img/clear.svg"


//componente que armazena informações do form em forma de card
class CardNota extends Component {
  
  apagar() {
    const indice = this.props.indice
    this.props.apagarNota(indice)
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
