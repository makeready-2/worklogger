import * as actions from './constants'
import ax from "../utilities/ax"

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

    dispatch({ type: actions.CLEAR_FORM_USER_ACTION });

    ax.post("/api/users", {
      email: formData.email,
      name: formData.name,
      password: formData.password,
      password_confirmation: formData.passwordConfirmation
    }).then(response => {
      dispatch({ type: actions.UPDATE_USER_ACTION, user: response.user })
    }).catch(error => {
      dispatch({ type: actions.FORM_ERROR_USER_ACTION, error: error.message })
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


