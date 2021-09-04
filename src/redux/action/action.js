import { INCREMENT_COUNTER,ADD_ARTICLE } from "../constants/action-type";
export const incrementCounter = (payload) => ({
  type: INCREMENT_COUNTER,
  payload
});

export const addPost = newPost => {
  return {
      type: ADD_ARTICLE,
      payload: newPost
  }
}