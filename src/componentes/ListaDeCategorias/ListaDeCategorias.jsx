import React, { Component } from "react";
import "./listaCat.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    console.log(e.key);
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section>
        <ul className="categorias-lista">
          {this.props.categorias.map((categoria, index) => {
            return <li key={index}> {categoria}</li>;
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
