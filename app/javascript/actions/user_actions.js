import * as actions from './constants'
import axios from "axios"

export function updateForm(value, field) {
  return {
    type: actions.UPDATE_FORM_USER_ACTION,
    value,
    field
  }
}

export function submitRegistration() {
  return (dispatch, getState) => {
    const formData = getState().formData;

    dispatch({ type: actions.CLEAR_PASSWORDS_USER_ACTION });

    axios.post("/api/users", {
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.passwordConfirmation
    }).then(response => {
      dispatch({ type: actions.UPDATE_USER_ACTION, user: response.user })
    }).catch(error => {

    })
  }
}

export function submitLogin() {
  return {
    type: actions.LOGIN_USER_ACTION,
    email,
    password
  }
}


