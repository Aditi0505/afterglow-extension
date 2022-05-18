export const getSortedTodo = (filterState, todoList) => {
  if (filterState.sortBy === "OLDEST") {
    return [...todoList].sort((a, b) => a["key"] - b["key"]);
  }
  if (filterState.sortBy === "NEWEST") {
    return [...todoList].sort((a, b) => b["key"] - a["key"]);
  }
  return todoList;
};
