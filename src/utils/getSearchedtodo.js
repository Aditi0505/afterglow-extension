export const getSearchedTodo = (filterState, todoList) => {
  return [...todoList].filter((item) =>
    item.current.toLowerCase().includes(filterState.searchKeyword)
  );
};
