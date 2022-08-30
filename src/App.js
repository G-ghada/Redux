import "./App.css";
import ToDoList from "./components/ToDoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ToDoList />
    </div>
  );
}

export default App;
