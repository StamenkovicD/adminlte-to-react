import { configureStore } from "@reduxjs/toolkit";
import { reducerTodo } from "./reducer";
import userReducer from './notificationReducer';



const store = configureStore({
    // user: userReducer,
    reducer: {
        user: userReducer,
        reducer: reducerTodo
    }
});

export default store;

// reducer: reducer,
//     user: userReducer,

// const store = configureStore({
//     reducer: reducer,
  
//   });
  
