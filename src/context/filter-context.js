import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    today: false,
    completed: false,
    all: false,
    searchKeyword: "",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
