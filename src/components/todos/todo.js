/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useCreateMutation, useGetIdQuery, useUpdateMutation } from '../../services/todos.service'
// import { createTodos, retrieveTodo } from '../../slice/todo'
import { Row , Col, Form, Input, Button, Label, FormGroup } from 'reactstrap'
const Todo = (props) => {
    const id  = props.match?.params?.id
    // const dispatch = useDispatch()
    const [data, setData ] = useState({})

    const [ submitFunc, objectCreate ] = useCreateMutation()
    const [ updateFunc, objectUpdate ] = useUpdateMutation()

    const todo = useGetIdQuery(id)

    const handleSubmit = async(e) => {
        e.preventDefault()
        id ? await updateFunc(id, data) :  await submitFunc(data)
        // dispatch(createTodos(data))  //Also you can use without fetchbase
    }
    const handleChange = (event) => {
        data[event.target.name] = event.target.value
        setData({...data})
    }
    return(<Form onSubmit={ handleSubmit }>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="title">
                Name
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="with a placeholder"
                type="text"
                defaultValue={ todo?.data?.title }
                onChange={ handleChange }
              />
              <Button type='submit'> {(objectCreate || objectUpdate)?.isLoading ? 'please wait ...' : 'submit'}</Button>
            </FormGroup>
            </Col >
            </Row>
        </Form>)
} 

export default Todo