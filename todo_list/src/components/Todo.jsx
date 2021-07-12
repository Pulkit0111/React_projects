import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useState } from "react";
import styles from "../Style.module.css";
export function Todo() {
  const [todo, setTodo] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const handleAddTodo = (item) => {
    setTodo([...todo, item]);
  };
  const handleFilter = () => {
    setIsFilter(!isFilter);
  };
  const handle = (todo) => {
    setTodo(todo);
  };
  return (
    <div className={styles.listCont}>
      <TodoInput addTodo={handleAddTodo} />
      <TodoList
        todo={todo}
        handle={handle}
        todoList={todo.filter((e) => (isFilter ? e.status === true : e))}
      />
      <button className={styles.show_button} onClick={handleFilter}>
        {isFilter ? "Show All Todos" : "Show Completed Todos"}
      </button>
    </div>
  );
}
