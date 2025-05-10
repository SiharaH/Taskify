import React from 'react'
import './styles.css'
import { ToDo } from '../Model'
import SingleToDo from './SingleToDo';

interface Props {
    todos: ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;

}

const ToDoList: React.FC<Props> = ({todos,setTodos}: Props) => {
  return (
    <div className='todos'>
      {todos.map(todo => (
        <SingleToDo todo ={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default ToDoList
