export const getCheckedTodo = (filterState, todoList) => {
  const now = new Date();
  if (filterState.all) {
    return todoList;
  } else {
    if (filterState.completed && filterState.today) {
      return todoList.filter((item) =>
        item.isCompleted || Math.abs(item.key - now) / (60 * 60 * 1000) < 24 // Calcualting if the task is within 24 hours.
          ? item
          : false
      );
    }
    if (filterState.completed) {
      return todoList.filter((item) => item.isCompleted);
    }
    if (filterState.today) {
      return todoList.filter((item) =>
        Math.abs(item.key - now) / (60 * 60 * 1000) < 24 ? item : false
      );
    }
  }

  return todoList;
};
