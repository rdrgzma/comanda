import React, {Component} from 'react'
 
class Atendimento extends Component {
  render() {
    return <div>
        <h1>Atendimento</h1>
        <div id="accordion" role="tablist">
          <div className="card">
            <div className="card-header" role="tab" id="headingOne">
              <h5 className="mb-0">
                <a data-toggle="collapse" href="#pedido1" aria-expanded="true" aria-controls="collapseOne">
                  Pedido #1
                </a>
              </h5>
            </div>

            <div id="pedido1" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <div className="card-pedido">
                  <p className="card-text item-quantidade">2</p>
                  <p className="card-text item-produto">Cerveja 600ml</p>
                  <p className="card-text item-total">R$20,00</p>
                </div>
                <div className="card-pedido">
                  <p className="card-text item-quantidade">2</p>
                  <p className="card-text item-produto">Cerveja 600ml</p>
                  <p className="card-text item-total">R$20,00</p>
                </div>
                <hr />
                <div className="total">
                  <p className="card-text item-total-descricao">Total</p>
                  <p className="card-text item-total">R$40,00</p>
                </div>
                <button type="button" className="btn btn-success">
                  Atender
                </button>
                <button type="button" className="btn btn-danger">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}
export default Atendimento;