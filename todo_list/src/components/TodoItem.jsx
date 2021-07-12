import styles from "../Style.module.css";
import { useState } from "react";
export function TodoItem({ item, handle, todo }) {
  const [sts, setSts] = useState(item.status);
  const [style, setStyle] = useState("");
  return (
    <div>
      <h3 className={style || styles.h3}>{item.title}</h3>
      <p className={styles.p}>Status: {sts ? "Done" : "Not Done"}</p>
      <button
        className={styles.toggle}
        onClick={() => {
          for (let i = 0; i < todo.length; i++) {
            if (todo[i].id === item.id) {
              if (todo[i].status) {
                todo[i].status = false;
                setSts(false);
              } else {
                todo[i].status = true;
                setStyle(styles.done);
                setSts(true);
              }
            }
          }
        }}
      >
        Done/Not Done
      </button>
      <button
        className={styles.delete}
        onClick={() => {
          todo = todo.filter((e) => e.id !== item.id);
          handle(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
}
