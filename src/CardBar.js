import React, { Component } from 'react'

class CardBar extends Component {
    render () {
        return <div>
            <section id="intro" className="container card">
              <div>
                <img className="card-img-top" src="https://i.ytimg.com/vi/dPouJoY3HVo/maxresdefault.jpg" alt="imagem" />
                <div className="card-body">
                  <h2 className="card-text">Boteco do zé</h2>
                  <h1>Comanda</h1>
                </div>
              </div>
            </section>
          </div>;
    }
}

export default CardBar