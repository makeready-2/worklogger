import React from "react";
import { connect } from "react-redux"
import { submitRegistration, updateForm } from "../../actions/user_actions";
import { Link } from "react-router-dom";

const RegisterPage = ({ email, password, passwordConfirmation,
                        updateEmail, updatePassword, updatePasswordConfirmation,
                        submit }) => {
  return (
    <React.Fragment>
      <h1>Register</h1>

      <label>
        <p>Email</p>
        <input type="text" value={ email } onChange={ updateEmail }/>
      </label>

      <label>
        <p>Password</p>
        <input type="password" value={ password } onChange={ updatePassword } />
      </label>

      <label>
        <p>Confirm  Password</p>
        <input type="password" value={ passwordConfirmation } onChange={ updatePasswordConfirmation } />
      </label>

      <button onClick={ submit } >
        Submit
      </button>

      <Link to="/login">Click here to log in</Link>
    </React.Fragment>
  )
};

const mapStateToProps = ({ forms }) => ({ ...forms.registration });

const mapDispatchToProps = dispatch => ({
  updateEmail: (e) => {
    e.preventDefault();
    dispatch(updateForm(e.target.value, 'login', 'email'))
  },
  updatePassword: (e) => {
    e.preventDefault();
    dispatch(updateForm(e.target.value, 'login', 'password'))
  },
  updatePasswordConfirmation: (e) => {
    e.preventDefault();
    dispatch(updateForm(e.target.value, 'login', 'passwordConfirmation'))
  },
  submit: () => dispatch(submitRegistration())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)

