import { createSlice } from "@reduxjs/toolkit";

const initialState = [{title: 'Test11'}];

const addTodoReducer = createSlice({
  name: "todos",
  
  initialState,
  
  reducers: {
    addTodos: (state = initialState, action) => {
      state.push(action.payload);
      return state;
    },
   
  },
  
});


export const { addTodos } = addTodoReducer.actions;
export const reducerTodo = addTodoReducer.reducer;
