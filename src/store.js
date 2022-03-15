


import { configureStore } from '@reduxjs/toolkit'

import {
  reducerPath as apiReducerPath,
  reducer as apiReducer,
  middleware
} from './services/todos.service'

import {reducer as todoReducer } from './slice/todo';

const store = configureStore({
  reducer: {
    [apiReducerPath]: apiReducer,
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware)
})

export default store
