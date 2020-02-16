import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { submitLogin, updateForm } from "../../actions/user_actions";
import FormError from "../elements/FormError";

export const LoginPage = ({ formData, updateEmail, updatePassword, submitLogin }) => {
  return (
    <React.Fragment>
      <h1>Log In</h1>

      <label>
        <p>Email</p>
        <input type="text" value={ formData.email } onChange={ updateEmail }/>
      </label>

      <label>
        <p>Password</p>
        <input type="password" value={ formData.password } onChange={ updatePassword } />
      </label>

      <button onClick={ submitLogin } >
        Submit
      </button>

      <FormError error={ formData.error } />

      <Link to="/register">Click here to register</Link>
    </React.Fragment>
  )
};

const mapStateToProps = ({ formData }) => ({ formData });

const mapDispatchToProps = dispatch => ({
  updateEmail: (e) => dispatch(updateForm(e.target.value, 'email')),
  updatePassword: (e) => dispatch(updateForm(e.target.value, 'password')),
  submitLogin: () => dispatch(submitLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
