import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useWallpaper } from "../../context";

const WelcomeUser = () => {
  const { wallpaper } = useWallpaper();
  const { userState, userDispatch } = useUser();
  const [focus, setFocus] = useState(localStorage.getItem("focus") || "");
  const [enterPressed, setEnterPressed] = useState(
    JSON.parse(localStorage.getItem("enterPressedOnce")) || false
  );
  const [focusDone, setFocusDone] = useState(
    JSON.parse(localStorage.getItem("focusDone")) || false
  );
  const [isEdit, setIsEdit] = useState(false);
  const [isFocusEdit, setIsFocusEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("focus", focus);
    localStorage.setItem("focusDone", focusDone);
    localStorage.setItem("enterPressedOnce", enterPressed);
  }, [focus, focusDone, enterPressed]);

  const navigate = useNavigate();
  const appreciation = [
    {
      id: 1,
      message: "Way to go!",
    },
    {
      id: 2,
      message: "Great work!",
    },
    {
      id: 3,
      message: "Good job!",
    },
    {
      id: 4,
      message: "Nice!",
    },
  ];
  const focusDoneHandler = (e) => {
    setFocusDone(e.target.checked);
  };
  const focusHandler = (e) => {
    setFocus(e.target.value);
    setEnterPressed(false);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      setEnterPressed(true);
    }
  };
  const editUserHandler = () => {
    setIsEdit((prev) => !prev);
  };
  const handleEditEnter = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
    }
  };
  const editFocusHandler = () => {
    setIsFocusEdit((prev) => !prev);
  };
  const clearFocusHandler = () => {
    setIsFocusEdit(true);
    setFocus("");
    setEnterPressed(false);
    localStorage.removeItem("focus");
  };
  const handleEditFocusEnter = (e) => {
    if (e.key === "Enter") {
      setEnterPressed(true);
      setIsFocusEdit(false);
    }
  };
  const naviagteToTODO = () => {
    navigate("/todo");
  };
  return (
    <div
      className="flex flex-col justify-center items-center text-6xl text-white h-screen w-full bg-cover bg-no-repeat bg-clip-border bg-fixed bg-center"
      style={wallpaper}
    >
      <div className="w-full text-center h-full relative">
        <header>
          {!isEdit ? (
            <h2 className="w-full flex justify-center items-center group">
              Good Evening, {userState.userName}.
              <span>
                <i
                  className="fa fa-pencil invisible group-hover:visible ml-2.5 cursor-pointer"
                  onClick={editUserHandler}
                ></i>
              </span>
            </h2>
          ) : (
            <h2 className="w-full flex justify-center items-center">
              Good Evening,
              <input
                className="text-center font-extrabold text-7xl w-fit py-4 px-0 border-0 border-b-4 outline-0 bg-transparent"
                onChange={(e) =>
                  userDispatch({
                    type: "ADD_USER",
                    payload: e.target.value,
                  })
                }
                value={userState.userName}
                onKeyDown={handleEditEnter}
              />
            </h2>
          )}
          {isFocusEdit ? (
            <h3>What is your main focus for today?</h3>
          ) : (
            <h3 className={`${enterPressed ? "hidden" : ""}`}>
              What is your main focus for today?
            </h3>
          )}
        </header>
        <main>
          {isFocusEdit ? (
            <input
              className="text-center font-extrabold text-7xl w-11/12 py-4 px-0 border-0 border-b-4 outline-0 bg-transparent"
              onChange={focusHandler}
              value={focus}
              onKeyDown={handleEditFocusEnter}
            />
          ) : (
            <input
              className={`text-center font-extrabold text-7xl w-11/12 py-4 px-0 border-0 border-b-4 outline-0 bg-transparent ${
                enterPressed ? "hidden" : ""
              }`}
              onChange={focusHandler}
              value={focus}
              onKeyDown={handleEnterKey}
            />
          )}

          <h4
            className={`${enterPressed ? "" : "hidden"} mt-24 ${
              isFocusEdit ? "hidden" : ""
            }`}
          >
            Today
          </h4>
          <div className="flex flex-wrap justify-center items-center h-screen/5 gap-8">
            <div className="focus-container">
              {isFocusEdit ? (
                <input
                  type="checkbox"
                  id="focus-label"
                  name="focus-checkbox"
                  className="hidden"
                  onChange={focusDoneHandler}
                  checked={focusDone}
                />
              ) : (
                <input
                  type="checkbox"
                  id="focus-label"
                  name="focus-checkbox"
                  className={`border border-white w-5 h-5 outline-0 ml-2.5 ${
                    enterPressed ? "" : "hidden"
                  }`}
                  onChange={focusDoneHandler}
                  checked={focusDone}
                />
              )}
            </div>
            <div className="group">
              {isFocusEdit ? (
                <label
                  htmlFor="focus-label"
                  className={`${focusDone ? "line-through" : ""} hidden`}
                >
                  {enterPressed ? focus : ""}
                </label>
              ) : (
                <label
                  htmlFor="focus-label"
                  className={`${focusDone ? "line-through" : ""}`}
                >
                  {enterPressed ? focus : ""}
                </label>
              )}
              {isFocusEdit || focus === "" ? (
                <span className="hidden group-hover:visible ml-2.5 cursor-pointer">
                  <i
                    className="fa fa-pencil ml-2.5"
                    onClick={editFocusHandler}
                  ></i>
                  <i
                    className="far fa-trash ml-2.5"
                    onClick={clearFocusHandler}
                  ></i>
                </span>
              ) : (
                <span className="invisible group-hover:visible ml-2.5 cursor-pointer">
                  <i
                    className="fa fa-pencil ml-2.5"
                    onClick={editFocusHandler}
                  ></i>
                  <i
                    className="far fa-trash ml-2.5"
                    onClick={clearFocusHandler}
                  ></i>
                </span>
              )}
            </div>
          </div>
          <div
            className={`${enterPressed ? "" : "hidden"} ${
              focusDone ? "visible" : "hidden"
            }`}
          >
            {
              appreciation[Math.floor(Math.random() * appreciation.length)]
                .message
            }
          </div>
        </main>
      </div>
      <footer className="flex items-center justify-between w-full fixed bottom-0 mb-8">
        <div className="flex-1 text-center text-xs">{wallpaper["altVal"]}</div>
        <div className="flex-1 text-center text-xl">
          <span>Todo</span>
          <i className="fas fa-tasks" onClick={naviagteToTODO}></i>
        </div>
      </footer>
    </div>
  );
};
export { WelcomeUser };
