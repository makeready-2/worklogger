import * as actions from './constants'

export function updateForm(value, form, field) {
  return {
    type: actions.UPDATE_FORM_USER_ACTION,
    value,
    form,
    field
  }
}

export function submitRegistration() {
  return {
    type: actions.REGISTER_USER_ACTION,
    email,
    password,
    passwordConfirmation
  }
}

export function submitLogin() {
  return {
    type: actions.LOGIN_USER_ACTION,
    email,
    password
  }
}


