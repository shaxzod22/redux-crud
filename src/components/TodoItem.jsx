import { useDispatch } from "react-redux";
import { removeItem } from "./redux/slice/todo";

const TodoItem = (todo) => {
  const dispatch = useDispatch()
    console.log(todo);
  return (
    <>
      <li className="todo__item"><h2>{todo.number}. {todo.task}</h2>
      <button className="todo__btn" onClick={()=>dispatch(removeItem(todo))}>Delete</button>
      </li>
    </>
  )
}

export default TodoItem
