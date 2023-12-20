import { useState } from "react"
import { useDispatch } from "react-redux"
import { Form,Button } from "react-bootstrap"
import { addTodo } from "./redux/slice/todo"

const AddToDo = () => {
    const dispatch = useDispatch()
    const [todo,setTodo] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        const newTodo = {
            id:Math.floor(Math.random()*999999 + 100000),
            name:todo,
            isDone:false,
            createAt:new Date().toLocaleString()
        }

dispatch(addTodo(newTodo));
setTodo("")
e.target.input.value = ''
    }
    return (
        <>
        <Form onSubmit={handleSubmit}>
        <div className="d-flex">
        <Form.Group style={{width:'100%'}}>
        <Form.Control
        required
        type="text"
        placeholder="Enter work"
        name="input"
        onChange={(e)=>{
            setTodo(e.target.value.trim())
        }}
        />
        </Form.Group>
        
        <Form.Group>
        <Button type="submit">Add</Button>
        </Form.Group>
        </div>
        </Form>
        </>
        )
    }
    
    export default AddToDo
    