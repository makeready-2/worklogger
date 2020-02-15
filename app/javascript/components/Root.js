import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'

import Header from "./Header";
import initialStore from "../reducers";

class Root extends React.Component {
  render () {
    return (
      <Provider store={ initialStore() }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Ahoy")} />
            <Route path="/goodbye" render={() => <Header/>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root
