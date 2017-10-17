import React, { Component } from 'react'
import CardBar from './CardBar'

class Comanda extends Component {
    render () {
        return <div>
            <CardBar />
            <section id="produtos" className="produtos-section">
              <div className="container produto">
                <div>
                  <img className="imagem-produto" src="http://static.wixstatic.com/media/350a48_3147cbfac80d478e8008fc62ccaa4850.jpg" alt="imagem=produto" />
                </div>
                <div>
                  <h3>Cerveja 600ml</h3>
                </div>
                <div>
                  <h3>1</h3>
                </div>
              </div>
              <div className="container produto">
                <div>
                  <img className="imagem-produto" src="http://www.xisdavoni.com.br/img/tres_xis.png" alt="imagem=produto" />
                </div>
                <div>
                  <h3>Xis Salada</h3>
                </div>
                <div>
                  <h3>1</h3>
                </div>
              </div>
              <div className="container produto">
                <div>
                  <img className="imagem-produto" src="http://tarcisiolanches.com.br/arquivos/produtos/3be17b3c9a5713d86a79f3a7522f3ceb.jpg" alt="imagem=produto" />
                </div>
                <div>
                  <h3>Batata Frita</h3>
                </div>
                <div>
                  <h3>1</h3>
                </div>
              </div>
              <div className="container produto">
                <div>
                  <img className="imagem-produto" src="http://atlivre.com/produtos_img/253.jpg" alt="imagem=produto" />
                </div>
                <div>
                  <h3>Refrigerante Lata</h3>
                </div>
                <div>
                  <h3>1</h3>
                </div>
              </div>
              <div className="container produto">
                <div>
                  <img className="imagem-produto" src="http://static.wixstatic.com/media/350a48_3147cbfac80d478e8008fc62ccaa4850.jpg" alt="imagem=produto" />
                </div>
                <div>
                  <h3>Cerveja 600ml</h3>
                </div>
                <div>
                  <h3>1</h3>
                </div>
              </div>
            </section>
          </div>;
    }
}

export default Comanda