import React from "react";
import { connect } from "react-redux"
import {submitLogin, submitRegistration, updateForm} from "../../actions/user_actions";

export const RegisterPage = ({ email, password, passwordConfirmation, submitRegistration }) => {
  return (
    <React.Fragment>

    </React.Fragment>
  )
};

const mapStateToProps = ({ forms }) => ( {...forms.registration} );

const mapDispatchToProps = dispatch => ({
  updateEmail: (e) => dispatch(updateForm(e.target.value, 'login', 'email')),
  updatePassword: (e) => dispatch(updateForm(e.target.value, 'login', 'password')),
  updatePasswordConfirmation: (e) => dispatch(updateForm(e.target.value, 'login', 'passwordConfirmation')),
  submit: () => dispatch(submitRegistration())
})
