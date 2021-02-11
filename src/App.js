import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux"

import Penjual from "./page/form/formPenjual"
import Pembeli from "./page/form/formPembeli"
import Login from "./page/login"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: ""
    }
  }

  doLogin = (user, pass) => {
    console.log("username: ", user);
    console.log("password: ", pass);

    if ((user == "admin") && (pass == "admin")) {
      this.setState(prevState => ({
        statusLogin: !prevState.statusLogin,
        role: "penjual"
      }));

      this.props.changeLogin()

    } else if ((user == "user") && (pass == "user")) {
      this.setState(prevState => ({
        statusLogin: !prevState.statusLogin,
        role: "pembeli"
      }));

      this.props.changeLogin();
    } else {
      alert("Username atau password tidak terdaftar");
    }
  }

  logout = () => {
    this.setState({
      statusLogin: false,
      role: ""
    })
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login">
              <Login statusLogin={this.state.statusLogin} role={this.state.role} doLogin={this.doLogin} />
            </Route>
            <Route path="/penjual">
              <Penjual statusLogin={this.state.statusLogin} logout={this.logout} />
            </Route>
            <Route path="/pembeli">
              <Pembeli statusLogin={this.state.statusLogin} logout={this.logout} />
            </Route>
            <Route path="/">
              <Login statusLogin={this.state.statusLogin} role={this.state.role} doLogin={this.doLogin} />
            </Route>
          </Switch>

        </Router>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeLogin: () => dispatch({ type: "LOGIN_SUCCESS" })
});

export default connect(null, mapDispatchToProps)(App);