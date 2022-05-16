import { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducer";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    userName: localStorage.getItem("user") || "",
    focus: localStorage.getItem("focus") || "",
    enterPressed: JSON.parse(localStorage.getItem("enterPressedOnce")) || false,
    focusDone: JSON.parse(localStorage.getItem("focusDone")) || false,
    isEdit: false,
    isFocusEdit: false,
  });

  useEffect(() => {
    localStorage.setItem("user", userState.userName);
  }, [userState.userName]);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
