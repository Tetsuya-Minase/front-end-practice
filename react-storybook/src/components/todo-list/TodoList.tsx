import { useRef, useState } from "react";

const useTodoList = () => {
  const [todoList, setTodoList] = useState<string[]>(["なにかする"]);
  const [newTodo, setNewTodo] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const updateTodoList = () =>
    setTodoList((prev) => {
      if (!newTodo) {
        return prev;
      }
      if (textareaRef.current) {
        textareaRef.current.value = "";
        setNewTodo("");
      }
      return [...prev, newTodo];
    });
  const reset = () => {
    setTodoList(["なにかする"]);
    setNewTodo("");
  };
  return { todoList, textareaRef, setNewTodo, updateTodoList, reset } as const;
};

export const TodoList: React.VFC = () => {
  const { todoList, textareaRef, setNewTodo, updateTodoList, reset } =
    useTodoList();
  return (
    <>
      <h1>TodoList</h1>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <div>
        <textarea
          ref={textareaRef}
          data-testid="textarea"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div>
          <button onClick={updateTodoList}>追加</button>
          <button onClick={reset}>リセット</button>
        </div>
      </div>
    </>
  );
};
