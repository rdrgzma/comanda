import React, { Component } from "react";

import './Pedido.css';
import base from "./base";


class Pedido extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pedido: [],
    }

    // base.bindToState("pedido", {
    //   context: this,
    //   state: "pedido"
    // })
  }
componentDidMount(){
  base.fetch('pedido', {
  context: this,
  asArray: true
}).then(data => {
  this.setState({pedido: data["0"]["0"].itens})
  console.log(data["0"]["0"].itens);
}).catch(error => {
  //handle error
})
}
    render(){

        return <div className="container">
            <h1>Boteco</h1>
            <div className="card">
              <h4 className="card-header">Pedido</h4>
              <div className="card-body">
                {this.state.pedido.map((p,index) =>{
                  return (
                    <div key = {index}>
                    <p>{p.nome}</p>
                    <p>{p.preco}</p>
                  </div>
                  )
                })}

                <hr />
                <div className="total">
                  <p className="card-text item-total-descricao">
                    Total
                  </p>
                  <p className="card-text item-total"></p>
                </div>
                <br/>
                <a href="/atendimento" className="btn btn-primary">
                  Realizar Pedido
                </a>
              </div>
            </div>
          </div>;
    }
}
export default  Pedido;
