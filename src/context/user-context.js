import { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducer";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    userName: localStorage.getItem("afterglow-user") || "",
    focus: localStorage.getItem("afterglow-focus") || "",
    enterPressed:
      JSON.parse(localStorage.getItem("afterglow-enterPressedOnce")) || false,
    focusDone: JSON.parse(localStorage.getItem("afterglow-focusDone")) || false,
    isEdit: false,
    isFocusEdit: false,
  });

  useEffect(() => {
    localStorage.setItem("afterglow-user", userState.userName);
  }, [userState.userName]);

  const clearFocusHandler = () => {
    userDispatch({ type: "CLEAR_FOCUS", payload: "" });
    localStorage.removeItem("afterglow-focus");
  };
  return (
    <UserContext.Provider
      value={{ userState, userDispatch, clearFocusHandler }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
