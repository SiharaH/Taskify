import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './Model';
import ToDoList from './components/ToDoList';


const App: React.FC =() => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo ={todo} setTodo={setTodo} handleAdd = {handleAdd} />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
