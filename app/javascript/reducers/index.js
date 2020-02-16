import { createStore, applyMiddleware } from "redux"
import { merge } from "lodash"
import thunk from "redux-thunk";
import formsReducer from "./forms_reducer"
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  forms: {
    login: {},
    registration: {}
  }
};

const reducer = (state, action) => ({
  forms: formsReducer(state.forms, action)
});

export default function initialStore(railsProps) {
  return createStore(
    reducer,
    merge(initialState, railsProps),
    composeWithDevTools(applyMiddleware(thunk))
  );
}

