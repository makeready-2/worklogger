import * as actions from "../actions/constants"

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_FORM_USER_ACTION:
      return {
        ...state,
        [action.field]: action.value
      };
    case actions.CLEAR_PASSWORDS_USER_ACTION:
      return {
        ...state,
        password: undefined,
        passwordConfirmation: undefined
      };
    default:
      return state
  }
};


export default reducer
