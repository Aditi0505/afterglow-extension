import { createContext, useContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todo: "",
    todoList: JSON.parse(localStorage.getItem("afterglow-todos")) || [],
    toEdit: null,
  });
  useEffect(() => {
    localStorage.setItem("afterglow-todos", JSON.stringify(todoState.todoList));
  }, [todoState.todoList]);
  return (
    <TodoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
