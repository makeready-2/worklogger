import * as actions from './constants'

export function register(email, password, passwordConfirmation) {
  return {
    type: actions.REGISTER_USER_ACTION,
    email,
    password,
    passwordConfirmation
  }
}

export function submitLogin(email, password) {
  return {
    type: actions.LOGIN_USER_ACTION,
    email,
    password
  }
}

export function updateForm(value, field) {
  return {
    type: actions.UPDATE_FORM_USER_ACTION,
    value,
    field
  }
}
