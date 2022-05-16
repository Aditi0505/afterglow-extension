import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Weather } from "../../components";
import { useQuote, useUser, useWallpaper } from "../../context";
import { appreciationMessage } from "../../data/appreciationMessage";

const WelcomeUser = () => {
  const { wallpaper } = useWallpaper();
  const { userState, userDispatch, clearFocusHandler } = useUser();
  const { userName, focus, enterPressed, focusDone, isEdit, isFocusEdit } =
    userState;
  const { quote } = useQuote();
  useEffect(() => {
    localStorage.setItem("focus", focus);
    localStorage.setItem("focusDone", focusDone);
    localStorage.setItem("enterPressedOnce", enterPressed);
  }, [focus, focusDone, enterPressed]);

  const navigate = useNavigate();

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
          <Weather />
          {!isEdit ? (
            <h2 className="w-full flex justify-center items-center group font-Montserrat mt-5">
              Good Evening, {userName}.
              <span>
                <i
                  className="fa fa-pencil invisible group-hover:visible cursor-pointer"
                  onClick={() =>
                    userDispatch({
                      type: "EDIT_USER",
                      payload: "",
                    })
                  }
                ></i>
              </span>
            </h2>
          ) : (
            <h2 className="w-full flex justify-center items-center font-Montserrat mt-5">
              Good Evening,
              <input
                className="text-center font-extrabold text-6xl w-fit py-4 px-0 border-0 border-b-4 outline-0 bg-transparent font-Quattrocento"
                onChange={(e) =>
                  userDispatch({
                    type: "ADD_USER",
                    payload: e.target.value,
                  })
                }
                value={userName}
                onKeyDown={(e) =>
                  userDispatch({
                    type: "EDIT_ENTER_PRESSED",
                    payload: e,
                  })
                }
              />
            </h2>
          )}
          {isFocusEdit ? (
            <h3 className="font-Montserrat">
              What is your main focus for today?
            </h3>
          ) : (
            <h3 className={`${enterPressed ? "hidden" : ""} font-Montserrat`}>
              What is your main focus for today?
            </h3>
          )}
        </header>
        <main>
          {isFocusEdit ? (
            <input
              className="text-center font-extrabold text-4xl w-11/12 py-4 px-0 border-0 border-b-4 outline-0 bg-transparent font-Quattrocento"
              onChange={(e) =>
                userDispatch({
                  type: "SET_FOCUS",
                  payload: e.target.value,
                })
              }
              value={focus}
              onKeyDown={(e) =>
                userDispatch({
                  type: "EDIT_FOCUS_ENTER_PRESSED",
                  payload: e,
                })
              }
            />
          ) : (
            <input
              className={`text-center font-extrabold text-4xl w-11/12 py-4 px-0 border-0 border-b-4 outline-0 bg-transparent font-Quattrocento ${
                enterPressed ? "hidden" : ""
              }`}
              onChange={(e) =>
                userDispatch({
                  type: "SET_FOCUS",
                  payload: e.target.value,
                })
              }
              value={focus}
              onKeyDown={(e) =>
                userDispatch({
                  type: "ENTER_PRESSED",
                  payload: e,
                })
              }
            />
          )}

          <h4
            className={`${enterPressed ? "" : "hidden"} mt-10 ${
              isFocusEdit ? "hidden" : ""
            } text-4xl`}
          >
            Today
          </h4>
          <div className="flex flex-wrap justify-center items-center h-screen/5 gap-8 ml-20">
            <div>
              {isFocusEdit ? (
                <input
                  type="checkbox"
                  id="focus-label"
                  name="focus-checkbox"
                  className="hidden"
                  onChange={(e) =>
                    userDispatch({
                      type: "FOCUS_DONE",
                      payload: e.target.checked,
                    })
                  }
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
                  onChange={(e) =>
                    userDispatch({
                      type: "FOCUS_DONE",
                      payload: e.target.checked,
                    })
                  }
                  checked={focusDone}
                />
              )}
            </div>
            <div className="group">
              {isFocusEdit ? (
                <label
                  htmlFor="focus-label"
                  className={`${
                    focusDone ? "line-through" : ""
                  } hidden text-center text-4xl font-Quattrocento break-all`}
                >
                  {enterPressed ? focus : ""}
                </label>
              ) : (
                <label
                  htmlFor="focus-label"
                  className={`${
                    focusDone ? "line-through" : ""
                  } text-center text-4xl font-Quattrocento break-all`}
                >
                  {enterPressed ? focus : ""}
                </label>
              )}
              {isFocusEdit || focus === "" ? (
                <span className="hidden group-hover:visible cursor-pointer">
                  <i
                    className="fa fa-pencil ml-2.5"
                    onClick={() =>
                      userDispatch({
                        type: "EDIT_FOCUS",
                        payload: "",
                      })
                    }
                  ></i>
                  <i
                    className="far fa-trash ml-2.5"
                    onClick={clearFocusHandler}
                  ></i>
                </span>
              ) : (
                <span className="invisible group-hover:visible cursor-pointer">
                  <i
                    className="fa fa-pencil ml-2.5"
                    onClick={() =>
                      userDispatch({
                        type: "EDIT_FOCUS",
                        payload: "",
                      })
                    }
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
            } text-4xl font-Quattrocento`}
          >
            {
              appreciationMessage[
                Math.floor(Math.random() * appreciationMessage.length)
              ].message
            }
          </div>
        </main>
      </div>
      <footer className="flex items-center justify-between w-full fixed bottom-0 mb-8">
        <div className="flex-1 text-center text-xl font-Quattrocento">
          {wallpaper["altVal"]}
        </div>
        <div className="flex-1 text-center text-2xl font-Quattrocento">
          {quote}
        </div>
        <div className="flex-1 text-center text-2xl font-Quattrocento">
          <span>Todo</span>
          <i className="fas fa-tasks ml-2.5" onClick={naviagteToTODO}></i>
        </div>
      </footer>
    </div>
  );
};
export { WelcomeUser };
