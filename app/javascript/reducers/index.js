import { createStore } from "redux"
import { merge } from "lodash"
import thunk from "redux-thunk";

const initialState = {

};

function reducer(state, action) {
  return state;
}

export default function initialStore(railsProps) {
  return createStore(reducer, merge(initialState, railsProps));
}

