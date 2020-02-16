import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { submitLogin, updateForm } from "../../actions/user_actions";

export const LoginPage = ({ email, password, updateEmail, updatePassword, submitLogin }) => {
  return (
    <React.Fragment>
      <h1>Log In</h1>

      <label>
        <p>Email</p>
        <input type="text" value={ email } onChange={ updateEmail }/>
      </label>

      <label>
        <p>Password</p>
        <input type="password" value={ password } onChange={ updatePassword } />
      </label>

      <button onClick={ submitLogin } >
        Submit
      </button>

      <Link to="/register">Click here to register</Link>
    </React.Fragment>
  )
};

const mapStateToProps = ({ forms }) => ({...forms.login});

const mapDispatchToProps = dispatch => ({
  updateEmail: (e) => dispatch(updateForm(e.target.value, 'login', 'email')),
  updatePassword: (e) => dispatch(updateForm(e.target.value, 'login', 'password')),
  submitLogin: () => dispatch(submitLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
