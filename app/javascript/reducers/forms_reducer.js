import * as actions from "../actions/constants"

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_FORM_USER_ACTION:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.field]: action.value
        }
      };
    case actions.LOGIN_USER_ACTION:
      return {
        ...state,
        login: {
          ...state.login,
          password: undefined
        }
      };

    case actions.REGISTER_USER_ACTION:
      return {
        ...state,
        registration: {
          ...state.registration,
          password: undefined,
          passwordConfirmation: undefined
        }
      };
    default:
      return state
  }
};


export default reducer
