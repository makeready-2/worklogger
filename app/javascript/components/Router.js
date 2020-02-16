import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'

import Header from "./elements/Header";
import WorkLogPage from "./pages/WorkLogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import initialStore from "../reducers";

const contentContainer = {
  padding: '60px 20px 0 20px'
};

class Router extends React.Component {
  render () {
    return (
      <Provider store={ initialStore(this.props.initialState) }>
        <Header />
        <div style={ contentContainer } >
          <BrowserRouter>
            <Switch>
              <Route exact path="/"><WorkLogPage /></Route>
              <Route path="/login"><LoginPage /></Route>
              <Route path="/register"><RegisterPage /></Route>
              {/*<Route path="/history"><HistoryPage /></Route>*/}
              {/*<Route path="/edit"><EditPage /></Route>*/}
              {/*<Route path="/review"><ReviewPage /></Route>*/}
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

Router.proptypes = {
  initialState: PropTypes.object
};

export default Router
