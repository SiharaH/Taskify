import React from 'react'
import { ToDo } from '../Model'

type Props = {
    todo: ToDo,
    todos: ToDo[],
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}
const SingleToDo = ({todo, todos, setTodos} : Props) => {
  return (
    <form className='todos_single'> 
    <span className="todos_single_text">
        {todo.todo}
    </span>
    </form>
  )
}

export default  SingleToDo
