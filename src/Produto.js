import React, { Component } from "react";

class Produto extends Component {
 

  render() {
    return (
      <div className="container produto ">
        <div>
          <img
            className="imagem-produto"
            src={this.props.imageURL}
            alt="imagem=produto"
          />
        </div>
        <div>
          <h3>{this.props.nome}</h3>
        </div>
        <div>
          <p>R$ {this.props.preco}</p>
        </div>
      </div>
    );
  }
}
export default Produto
