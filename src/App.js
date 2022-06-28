import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] =  useState([
  { name: "Buy shopping", priority: "high" },
  { name: "Clean bathroom", priority: "low" },
  { name: "Car's MOT", priority: "high" }
  ])

  const [priorityValue , setpriorityValue] = useState("") 
  const [newTodo , setNewTodo] = useState("")
  const todosNodes = todos.map((todo,index)=>{
  return (
    <li>
    <span> {todo.name} </span> 
    
  </li>
  )})


  const handleTodoradio = (evt) => {
    setpriorityValue(evt.target.value)

  }


  const handleTodoInput = (evt) => {
    setNewTodo(evt.target.value)
  }

  const saveNewTodo = (evt) => {
    evt.preventDefault() 

    const copyTodos = [...todos]; 
    copyTodos.push({name : newTodo, priority : handleTodoradio(evt)})
    setTodos(copyTodos)
    setNewTodo("")
    setpriorityValue("")


  }




  return (
    <div>

      <h1>Todo List</h1>
      <hr></hr>

      <form onSubmit = {saveNewTodo}>
        <input id='new-todo' type='text' value={newTodo} onChange = {handleTodoInput} />

        <label htmlFor="high">High</label>
        <input type="radio" id="high" name="high" value= "high" onSelect = {handleTodoradio} />

        <label htmlFor="low">Low</label>
        <input type="radio" id="low" name="low" value="low" onSelect = {handleTodoradio} />

        <input type="submit" value = "save a new todo"/>


      </form>




      <ul>
        {todosNodes}
      </ul>

    </div>
  );



};

export default App;
