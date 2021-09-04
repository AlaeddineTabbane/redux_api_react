import { INCREMENT_COUNTER, ADD_ARTICLE } from "../constants/action-type";
const initialState = {
  counter: 0,
  posts:[
    {
      id: 1,
      title: 'my first post',
      content: 'my first content'
    }
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { counter: state.counter + 1 }
    case ADD_ARTICLE:
      return {...state ,posts:[...state.posts,action.payload]}
    default:
      return state;
  }
}

export default rootReducer;