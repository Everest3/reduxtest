import { createStore, applyMiddleware, compose } from "redux";
import commentReducer from "./comments/commentsReducer";
import thunk from "redux-thunk";

// const initialState={}
const store = createStore(
  commentReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
