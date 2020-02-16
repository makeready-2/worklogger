import { createStore, applyMiddleware } from "redux"
import { merge } from "lodash"
import thunk from "redux-thunk";
import forms from "./forms_reducer"
import user from "./user_reducer"
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  formData: forms.initialState,
  user: user.initialState
};

const reducer = (state, action) => ({
  formData: forms.reducer(state.formData, action),
  user: user.reducer(state.user, action)
});

export default function initialStore(railsProps) {
  return createStore(
    reducer,
    merge(initialState, railsProps),
    composeWithDevTools(applyMiddleware(thunk))
  );
}

