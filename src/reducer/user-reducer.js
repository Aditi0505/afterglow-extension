export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      return { ...state, userName: payload };
    case "FOCUS_DONE":
      return { ...state, focusDone: payload };
    case "SET_FOCUS":
      return { ...state, focus: payload, enterPressed: false };
    case "ENTER_PRESSED":
      return {
        ...state,
        enterPressed: payload.key === "Enter" ? true : state.enterPressed,
      };
    case "EDIT_USER":
      return { ...state, isEdit: !state.isEdit };
    case "EDIT_ENTER_PRESSED":
      return {
        ...state,
        isEdit: payload.key === "Enter" ? false : state.isEdit,
      };
    case "EDIT_FOCUS":
      return { ...state, isFocusEdit: !state.isFocusEdit };
    case "EDIT_FOCUS_ENTER_PRESSED":
      return {
        ...state,
        enterPressed: payload.key === "Enter" ? true : state.enterPressed,
        isFocusEdit: payload.key === "Enter" ? false : state.isFocusEdit,
      };
    case "CLEAR_FOCUS":
      return {
        ...state,
        isFocusEdit: true,
        focus: payload,
        enterPressed: false,
      };
    default:
      return state;
  }
};
