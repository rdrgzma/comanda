import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./NavBar";

import Comanda from "./Comanda";
import Pedido from "./Pedido";
import Atendimento from "./Atendimento";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact component={Comanda} />
            <Route path="/pedido" component={Pedido} />
            <Route path="/atendimento" component={Atendimento} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
