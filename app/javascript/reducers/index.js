import { createStore, applyMiddleware } from "redux"
import { merge } from "lodash"
import thunk from "redux-thunk";
import forms from "./forms_reducer"
import user from "./user_reducer"
import workLog from "./work_log_reducer"
import history from "./history_reducer"
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  formData: forms.initialState,
  user: user.initialState,
  workLog: workLog.initialState,
  history: history.initialState
};

const reducer = (state, action) => ({
  formData: forms.reducer(state.formData, action),
  user: user.reducer(state.user, action),
  workLog: workLog.reducer(state.workLog, action),
  history: history.reducer(state.history, action)
});

export default function initialStore(railsProps) {
  return createStore(
    reducer,
    merge(initialState, railsProps),
    composeWithDevTools(applyMiddleware(thunk))
  );
}

