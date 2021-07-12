import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "../Style.module.css";
export function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={text}
        type="text"
        placeholder="Enter Todo Here..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className={styles.inp_button}
        onClick={() => {
          const payLoad = {
            id: uuid(),
            title: text,
            status: false,
          };
          addTodo(payLoad);
          setText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
