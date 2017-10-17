import React, { Component } from "react";

import './Pedido.css'

class Pedido extends Component {
    render(){
        return <div className="container">
            <h1>Boteco</h1>
            <div className="card">
              <h4 className="card-header">Pedido</h4>
              <div className="card-body">
                <div className="card-pedido">
                  <p className="card-text item-quantidade">2</p>
                  <p className="card-text item-produto">
                    Cerveja 600ml
                  </p>
                  <p className="card-text item-total">R$20,00</p>
                </div>
                <div className="card-pedido">
                  <p className="card-text item-quantidade">2</p>
                  <p className="card-text item-produto">
                    Cerveja 600ml
                  </p>
                  <p className="card-text item-total">R$20,00</p>
                </div>
                <hr />
                <div className="total">
                  <p className="card-text item-total-descricao">
                    Total
                  </p>
                  <p className="card-text item-total">R$40,00</p>
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