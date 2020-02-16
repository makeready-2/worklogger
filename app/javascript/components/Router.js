import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'

import Header from "./elements/Header";
import WorkLogPage from "./pages/WorkLogPage";
import LoginPage from "./pages/LoginPage";
import initialStore from "../reducers";

class Router extends React.Component {
  render () {
    return (
      <Provider store={ initialStore(this.props.initialState) }>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><WorkLogPage /></Route>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/register"><RegisterPage /></Route>
            <Route path="/history"><HistoryPage /></Route>
            <Route path="/edit"><EditPage /></Route>
            <Route path="/review"><ReviewPage /></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

Router.proptypes = {
  initialState: PropTypes.object
};

export default Router
