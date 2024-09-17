
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import { MouseEventHandler, SyntheticEvent, useState } from "react";

function App() {

  const onAddTodotask = () => {
    console.log("Add Todo Task");
    let name = document.getElementById("todoName")?.value ?? "Default Task";
    let date = new Date(document.getElementById("todoDate")?.value).toDateString() ?? new Date().toDateString();
    
    if (name === "" || date === "") {
      alert("Please enter a valid task and date");
      return;
    }
    
    setTodoItems([...todoItems, { id:uuidv4(), name, date }]);
    document.getElementById("todoName")!.value = "";
    document.getElementById("todoDate")!.value = "";
  }
  
  const onDeleteTodotask = (id:string) => {
    console.log("Delete Todo Task");
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  }
  const [todoItems, setTodoItems] = useState([
    { id: uuidv4(), name: "Buy Milk", date: new Date().toDateString() },
    { id: uuidv4(), name: "Buy Bread", date: new Date().toDateString() },
    { id: uuidv4(), name: "Buy Eggs", date: new Date().toDateString() },
  ]);

  console.log("I am in App Component");
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleAddTodoTask={onAddTodotask}/>
      <TodoItems todoItems={todoItems} handleDeleteTodoTask = {onDeleteTodotask}/>
    </center>
  );
}


export default App;