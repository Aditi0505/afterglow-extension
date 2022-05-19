export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_CURRENT_TASK":
      return {
        ...state,
        todo: payload,
      };
    case "ADD_TO_LIST":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            current: state.todo,
            key: Date.now(),
            isCompleted: false,
            isDeleted: false,
            isEdited: false,
          },
        ],
        todo: "",
      };
    case "EDIT_TODO":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.key === state.toEdit ? { ...item, current: state.todo } : item
        ),
        todo: "",
        toEdit: null,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.key === payload.key ? { ...item, isDeleted: true } : item
        ),
        todo: "",
      };
    case "MARK_COMPLETED_TODO":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.key === payload.key
            ? {
                ...item,
                isCompleted: item.isCompleted ? false : true,
              }
            : item
        ),
        todo: "",
      };
    case "SET_TO_EDIT":
      const todotoEdit = state.todoList.find(
        (item) => item.key === payload.key
      );
      return {
        ...state,
        todo: todotoEdit.current,
        toEdit: todotoEdit.key,
      };
    default:
      return state;
  }
};
