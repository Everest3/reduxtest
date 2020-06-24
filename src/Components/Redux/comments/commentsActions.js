import { GET_COMMENTS, DELETE_COMMENTS, ADD_COMMENTS } from "./commentsTypes";
import axios from "axios";

export const getComments = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
  const resData = res.data.filter((comment) => comment.id < 7);
  dispatch({
    type: GET_COMMENTS,
    payload: resData,
  });
};

export const deleteComments = (id) => {
  return {
    type: DELETE_COMMENTS,
    payload: id,
  };
};

export const addComments = (comment) => async (dispatch) => {
  var randnum = Math.floor(Math.random() * 500) + 11;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments/${randnum}`
  );
  dispatch({
    type: ADD_COMMENTS,
    payload: res.data,
  });
};
