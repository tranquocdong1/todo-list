import logo from "./logo.svg";
import "./App.css";
import FormSearch from "./components/form_search";
import Filter from "./components/filter";
import ListTodo from "./components/list_todo";
import { useState } from "react";

function App() {
  let list = [
    { name: "Hoc JS", status: false },
    { name: "Hoc ReactJs", status: false },
    { name: "Hoc HTML", status: false },
    { name: "Hoc CSS", status: false },
    { name: "Hoc PHP", status: false },
  ];
  const [listTodos, setTodos] = useState(list);

  function handleDelete(index) {
    listTodos.splice(index, 1);
    setTodos([...listTodos]);
  }

  function addTodo(name) {
    let item = { name, status: false };
    setTodos([...listTodos, item]);
  }

  function editTodo(name, index) {
    console.log(name, index);
  }

  return (
    <div className="container">
      <h1 className="title">TODO</h1>
      <FormSearch addTodo={addTodo} />
      <Filter />
      <ListTodo
        editTodo={editTodo}
        handleDelete={handleDelete}
        listTodos={listTodos}
      />
    </div>
  );
}

export default App;
