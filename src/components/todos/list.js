import React from 'react'
import { useDispatch  } from 'react-redux'
import { useGetAllQuery , todoService, useDeleteMutation }  from '../../services/todos.service'
import { Link } from 'react-router-dom'
const TodoList = () => {
    const dispatch = useDispatch()
    const { data, isLoading, refetch } = useGetAllQuery()
    const [ deleteFunc, deleteObj ] = useDeleteMutation()
    console.log(deleteObj)
    return(<div>
        { isLoading && <>loading ... </> } 
        {
       
        data && data.map((item, index) => {
            return(<div key={index}>{ item.title }
             <Link to={`/todos/${item._id}/edit`} >edit</Link> 
             <button onClick={() => deleteFunc(item._id)}> delete</button>

             </div>)
        })
        }             <button onClick={ refetch }> Refetch with function</button>
          <button onClick={ () => dispatch(todoService.endpoints.getAll.initiate({})) }> Refetch without function  </button>
        </div>)
} 
export default TodoList
