export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        [payload]: !state[payload],
      };
    case "CLEAR":
      return {
        ...state,
        sortBy: null,
        today: false,
        completed: false,
        all: false,
        searchKeyword: "",
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchKeyword: payload,
      };
    default:
      return state;
  }
};
