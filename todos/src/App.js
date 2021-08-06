import React, { useState, useEffect } from "react";
import './App.css';
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //USE EFFECT
  //핸들러가 실행될 때 마다 실행하는 함수.
  useEffect(()=> {
    // console.log('hey');
    filterHandler();
  }, [todos]);
  //Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'umcompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }
  return (
    <div className="App">
      <header>
        <h1>seeULater</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
