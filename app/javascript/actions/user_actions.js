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

    ax.post("/api/users", {
      email: formData.email,
      name: formData.name,
      password: formData.password,
      password_confirmation: formData.passwordConfirmation
    }).then(response => {
      dispatch({ type: actions.LOGIN_USER_ACTION, user: response.data.user })
    }).catch(error => {
      dispatch({ type: actions.FORM_ERROR_USER_ACTION, error: error.message })
    })
  }
}

export function logOut() {
  return (dispatch) => {
    ax.delete("/api/users/sign_out", {})
      .then(() => {
        dispatch({ type: actions.LOGOUT_USER_ACTION, user: {} })
      })
  }
}

export function submitLogin() {
  return (dispatch, getState) => {
    const formData = getState().formData;

    ax.post("/api/users/sign_in", {
      user: {
        email: formData.email,
        password: formData.password
      }
    }).then(response => {
      dispatch({ type: actions.LOGIN_USER_ACTION, user: response.data.user, workLog: response.data.log })
    }).catch(error => {
      dispatch({ type: actions.FORM_ERROR_USER_ACTION, error: error.message })
    })
  }
}


