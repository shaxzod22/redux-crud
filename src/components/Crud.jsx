import { useSelector } from "react-redux"
import AddToDo from "./AddToDo"
import TodoItem from "./TodoItem"

const Crud = () => {

    const todoList = useSelector(state=>state.todo.list)
    const loopTodo = todoList.map((todo,i)=>(
    
        <TodoItem task={todo.name} id={todo.id} number={i+1} key={todo.id}/>
    ))
  return (
    <div className="container">
    <h1>todo</h1>
      <AddToDo/>
      <ul>
      {loopTodo}
      </ul>
    </div>
  )
}

export default Crud
