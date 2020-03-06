import { combineReducers } from "redux";
import { GET_TODOS } from "../../actions";

const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_TODOS":
      return payload;
    default:
      return state;
  }
};

const todo = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_TODO":
      return payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ todos, todo });

export default rootReducer;
