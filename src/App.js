import React from "react";
import { ListaDeNotas } from "./componentes/listadenotas";
//função que será renderiada no index.js
function App() {
  return (
    //criando formulário para criar notas
    <main>
    <form>
      <input type="text" placeholder="Título"/>
      <textarea placeholder="Escreva sua nota..."></textarea>
      <button>Criar nota</button>
    </form>
    <ListaDeNotas/>
    </main>
  );
}
export default App;
