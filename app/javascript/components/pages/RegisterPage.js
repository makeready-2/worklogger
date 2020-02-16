import React from "react";
import { connect } from "react-redux"
import { submitRegistration, updateForm } from "../../actions/user_actions";
import { Link, Redirect } from "react-router-dom";
import FormError from "../elements/FormError";

const RegisterPage = ({ formData, user,
                        updateEmail, updatePassword, updatePasswordConfirmation, updateName,
                        submit }) => {
  if (user && user.email) {
    return (
      <Redirect to={{ pathname: "/" }} />
    )
  } else {
    return (
      <React.Fragment>
        <h1>Register</h1>

        <label>
          <p>Email</p>
          <input type="text" value={formData.email} onChange={updateEmail}/>
        </label>

        <label>
          <p>Name</p>
          <input type="text" value={formData.name} onChange={updateName}/>
        </label>

        <label>
          <p>Password</p>
          <input type="password" value={formData.password} onChange={updatePassword}/>
        </label>

        <label>
          <p>Confirm Password</p>
          <input type="password" value={formData.passwordConfirmation} onChange={updatePasswordConfirmation}/>
        </label>

        <button onClick={submit}>
          Submit
        </button>

        <FormError error={formData.error}/>

        <Link to="/login">Click here to log in</Link>
      </React.Fragment>
    )
  }
};

const mapStateToProps = ({ formData, user }) => ({ formData, user });

const mapDispatchToProps = dispatch => ({
  updateEmail: (e) => {
    e.preventDefault();
    dispatch(updateForm(e.target.value, 'email'))
  },
  updatePassword: (e) => {
    e.preventDefault();
    dispatch(updateForm(e.target.value, 'password'))
  },
  updateName: (e) => {
    e.preventDefault();
    dispatch(updateForm(e.target.value, 'name'))
  },
  updatePasswordConfirmation: (e) => {
    e.preventDefault();
    dispatch(updateForm(e.target.value, 'passwordConfirmation'))
  },
  submit: () => dispatch(submitRegistration())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)

