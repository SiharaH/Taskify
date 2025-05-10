import React from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo,setTodo, handleAdd} : Props) => {
  return (
   <form className='input' onSubmit={handleAdd}>
      <input type="input" value={todo} onChange={(e)=>setTodo(e.target.value)}  placeholder='Add a new task' className='input_box' />
      <button className='input_btn' type='submit'>Go</button>

   </form>
  )
}

export default InputField
