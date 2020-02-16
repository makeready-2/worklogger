import React from "react";
import { connect } from "react-redux"
import { link } from "react-router-dom"
import { submitLogin, updateForm } from "../../actions/user_actions";

export const LoginPage = ({ email, password, updateForm, submitLogin }) => {
  return (
    <React.Fragment>
      <h1>Log In</h1>
      <form onSubmit={(e) => submitLogin()} >
        <label>
          <p>Email</p>
          <input type="text" value={ email } onChange={ (e) => updateForm(e.target.value, 'email') }/>
        </label>

        <label>
          <p>Password</p>
          <input type="password" value={ password } onChange={ (e) => updateForm(e.target.value, 'password') } />
        </label>

        <input type="submit" value="submit" />
      </form>
      <Link to="/register">Click here to register</Link>
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    form: state.forms.login.email,
    password: state.forms.login.password
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateForm,
    submitLogin
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
