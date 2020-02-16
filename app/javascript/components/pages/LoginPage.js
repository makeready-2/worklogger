import React from "react";
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { submitLogin, updateForm } from "../../actions/user_actions";
import FormError from "../elements/FormError";

export const LoginPage = ({ formData, user, updateEmail, updatePassword, submitLogin }) => {
  if (user && user.email) {
    return (
      <Redirect to={{ pathname: "/" }} />
    )
  } else {
    return (
      <React.Fragment>
        <h1>Log In</h1>

        <label>
          <p>Email</p>
          <input type="text" value={formData.email} onChange={updateEmail}/>
        </label>

        <label>
          <p>Password</p>
          <input type="password" value={formData.password} onChange={updatePassword}/>
        </label>

        <div>
          <input type="submit" onClick={submitLogin} value="Submit"/>
        </div>


        <FormError error={formData.error}/>

        <div>
          <Link to="/register">Click here to register</Link>
        </div>
      </React.Fragment>
    )
  }
};

const mapStateToProps = ({ formData, user }) => ({ formData, user });

const mapDispatchToProps = dispatch => ({
  updateEmail: (e) => dispatch(updateForm(e.target.value, 'email')),
  updatePassword: (e) => dispatch(updateForm(e.target.value, 'password')),
  submitLogin: () => dispatch(submitLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
