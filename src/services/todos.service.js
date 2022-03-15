import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// If you use axios 

// import axios from 'axios'
// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data }) => {
//     debugger
//     try {
//       const result = await axios({ url: baseUrl + url, method, data })
//       return { data: result.data }
//     } catch (axiosError) {
//       let err = axiosError
//       return {
//         error: { status: err.response?.status, data: err.response?.data },
//       }
//     }
//   }
export const todoService = createApi({
  reducerPath: 'todoService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://crudcrud.com/api/4a7e21d7b60344eab339208a4dccdcb3',
  // baseQuery: axiosBaseQuery({ baseUrl: 'https://crudcrud.com/api/0c27752b1aa24f1698e695d90d7de2eb',

  prepareHeaders: (headers) => {
    headers.set('content-type', 'application/json')
    return headers
  }
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => `/todos`,
      transformResponse: (response) => response, // transform resoponse 

      //query: () => ({ url: '/todos', method: 'get' }),               // if use axios
    }),
    getId: builder.query({
      query: (id) => `/todos/${id}`,
    }),
    create: builder.mutation({
      query: (data) => {
        return {
          url: `/todos`,
          method: 'POST',
          body: data
        }
      }
    }),
    update: builder.mutation({
      query: (id, data) => {
        return {
          url: `/todos/${id}`,
          method: 'PUT',
          body: data
        }
      }
    }),
    delete: builder.mutation({
      query: (id) => {
        return {
          url: `/todos/${id}`,
          method: 'DELETE',
        }
      }
    }),
  }),
})

export const {
  reducer,
  middleware,
  reducerPath,
  useGetAllQuery,
  useGetIdQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation

} =  todoService 