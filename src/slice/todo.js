import { createSlice } from "@reduxjs/toolkit";
import { todoService } from "../services/todos.service";
const initialState = {data: [], isLoading: false};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder)  => {
    // With the help of you can append data to state 
    builder.addMatcher(
      todoService.endpoints.getAll.matchFulfilled,
      (state, { payload }) => {
        state['isLoading'] = false
        state['data'] = payload
        state['dd'] = 'fadsfas'
        return state
      }
    )
    builder.addMatcher(
      todoService.endpoints.getAll.matchPending,
      (state, { payload }) => {
        state['isLoading'] = true
        return state
      }
    )
    builder.addMatcher(
      todoService.endpoints.getAll.matchRejected,
      (state, { payload }) => {
        state['error'] = 'fsafd'
        return state
      }
    )
  },
});
export const { reducer } = todoSlice;
