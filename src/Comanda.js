import React, { Component } from "react";
import CardBar from "./CardBar";
import Produto from "./Produto";
import base from "./base";

class Comanda extends Component {
  constructor(props) {
    super(props)

    this.state = {
      produtos: [],
      estabelecimentos: [],
    }

    this.createPedido = this.createPedido.bind(this)

    base.bindToState("produtos", {
      context: this,
      state: "produtos"
    })
    base.bindToState("estabelecimentos", {
      context: this,
      state: "estabelecimentos"
    })
  }
  componentDidMount(){
    this.itemArray = []
    this.setState({itens: this.itemArray})
  }

addItem(item) {
    console.log("item: "+item)
    console.log("itens normal: "+this.state.itens)
this.setState({itens:[...this.state.itens, item]})
      console.log("itens alterado:"+this.state.itens)
  };

  createPedido(){

    base.push('pedido', {
    data: [{itens:this.state.itens, usuario_id: '1', estabelecimento_id:'1'}]
  }).then(newLocation => {

  }).catch(err => {
    console.error(err);
  });

  }

  render() {

    return (
      <div>
        <div>

          {this.state.estabelecimentos.map(esta => {
            return (
              <CardBar
                key={esta.id}
                imageURL={esta.imageURL}
                nome={esta.nome}
                
              />
            );
          })}
          <div>
            <button onClick={this.createPedido}>Salvar</button>
          </div>
        </div>
        <section id="produtos" className="container card">
          {this.state.produtos.map(prod => {
            return (
              <div key={prod.id}>
              <Produto produto = {prod} addItem={(e) => this.addItem(prod, e)}/>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Comanda;
