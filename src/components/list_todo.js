import TodoItem from "./todo_item";
import { useState } from "react";

function ListTodo(props) {
  let datas = props.listTodos.map(function (item, index) {
    return (
      <TodoItem
        editTodo={props.editTodo}
        key={index}
        index={index}
        handleDelete={props.handleDelete}
        name={item.name}
      />
    );
  });

  return <div className="ListTodo">{datas}</div>;
}
export default ListTodo;
