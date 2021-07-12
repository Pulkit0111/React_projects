import { TodoItem } from "./TodoItem";

export function TodoList({ todoList, handle, todo }) {
  return (
    <div>
      {todoList.map((el) => (
        <TodoItem todo={todo} handle={handle} key={el.id} item={el} />
      ))}
    </div>
  );
}
