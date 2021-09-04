import { createSlice } from '@reduxjs/toolkit';

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


const postSlice = createSlice({
  name:'post',
  initialState,
  reducers:{
    addPost : (state,action) => {
      state.posts = [...state.posts,action.payload]
    }
  }
})

export const {addPost} = postSlice.actions
export default postSlice.reducer