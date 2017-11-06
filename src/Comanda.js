import React, { Component } from "react";
import CardBar from "./CardBar";
import Produto from "./Produto";
import base from "./base";

class Comanda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      estabelecimentos: []
    };

    base.bindToState("produtos", {
      context: this,
      state: "produtos"
    });
    base.bindToState("estabelecimentos", {
      context: this,
      state: "estabelecimentos"
    });
  }
  render() {
    return (
      <div>
        {this.state.estabelecimentos.map(esta => {
          return (
            <CardBar 
            key={esta.id} 
            imageURL={esta.imageURL} 
            nome={esta.nome} />
          );
        })}
        <section id="produtos" className="container card">
          {this.state.produtos.map(prod => {
            return (
              <Produto
                key={prod.id}
                imageURL={prod.imageURL}
                nome={prod.nome}
                preco={prod.preco}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default Comanda;
