import React, { Component } from "react";


class Produto extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
handleClick(){
  this.props.addItem(this.props.produto)
}

  render() {
    return (
      <div>
          <button onClick={this.handleClick}>
            <div className="container produto ">
                <div>
                  <img
                    className="imagem-produto"
                    src={this.props.produto.imageURL}
                    alt="imagem=produto"
                  />
              </div>
              <div>
                <h3>{this.props.produto.nome}</h3>
              </div>
              <div>
                <p>R$ {this.props.produto.preco}</p>
              </div>
          </div>
        </button>
      </div>
    );
  }
}
export default Produto
