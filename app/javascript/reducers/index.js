import { createStore } from "redux"

const initialState = {

};

function reducer(state, action) {
  return state;
}

export default function initialStore() {
  return createStore(reducer, initialState);
}

