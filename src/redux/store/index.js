// import { createStore } from "redux";
// import rootReducer from "../reducers/counterReducer";

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../slice/slice"
export default configureStore({
  reducer: {
    post: postSlice,
  },
});