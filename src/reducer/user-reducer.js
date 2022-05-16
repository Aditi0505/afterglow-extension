export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      return { ...state, userName: payload };
    default:
      return state;
  }
};
