import { createStore, applyMiddleware } from "redux"
import { merge } from "lodash"
import thunk from "redux-thunk";
import formsReducer from "./forms_reducer"
import userReducer from "./user_reducer"
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  formData: formsReducer.initialState,
  user: userReducer.initialState
};

const reducer = (state, action) => ({
  formData: formsReducer(state.formData, action),
  user: userReducer(state.user, action)
});

export default function initialStore(railsProps) {
  return createStore(
    reducer,
    merge(initialState, railsProps),
    composeWithDevTools(applyMiddleware(thunk))
  );
}

