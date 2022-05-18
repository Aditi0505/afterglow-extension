import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWallpaper } from "../../context";

const Todo = () => {
  const { wallpaper } = useWallpaper();
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const todoInputHandler = (e) => {
    setTodo(e.target.value);
  };
  const navigate = useNavigate();
  const addToToDoList = () => {
    const isEdited = todoList.some((item) => item.key === toEdit);
    if (isEdited) {
      console.log(todoList);
      const edited = todoList.map((item) =>
        item.key === toEdit ? { ...item, current: todo } : item
      );
      setTodoList([...edited]);
      setToEdit(null);
    } else {
      setTodoList([
        ...todoList,
        {
          current: todo,
          key: Date.now(),
          isCompleted: false,
          isDeleted: false,
          isEdited: false,
        },
      ]);
    }
    setTodo("");
  };
  const deleteTodo = (todo) => {
    const deletedTodo = todoList.map((item) =>
      item.key === todo.key ? { ...item, isDeleted: true } : item
    );
    setTodoList([...deletedTodo]);
  };
  const [toEdit, setToEdit] = useState(null);

  const editTodoHandler = (todo) => {
    const todotoEdit = todoList.find((item) => item.key === todo.key);
    setTodo(todotoEdit.current);
    setToEdit(todotoEdit.key);
  };

  const markCompletedTodo = (todo) => {
    console.log(todo);
    const completedTodo = todoList.map((item) =>
      item.key === todo.key
        ? {
            ...item,
            isCompleted: item.isCompleted ? false : true,
          }
        : item
    );
    setTodoList([...completedTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div
      className="flex flex-col justify-center items-center text-6xl text-white h-screen w-full bg-cover bg-no-repeat bg-clip-border bg-fixed bg-center"
      style={wallpaper}
    >
      <div className="w-full text-center">
        <div className="flex h-height-10 justify-center items-center gap-40	w-4/5	">
          <div>
            <button
              className="w-40 h-14 border border-black cursor-pointer text-white bg-black opacity-80 hover:bg-white hover:text-black rounded-b-30 text-lg font-Quattrocento"
              onClick={() => navigate("/welcome")}
            >
              Back
            </button>
          </div>
          <header>
            <h1 className="font-Montserrat font-bold">Your SuperList</h1>
          </header>
        </div>
        <main className="flex justify-center items-center h-height-90 gap-8">
          <div className="p-8 flex flex-col	justify-start items-center bg-white rounded-b-3 opacity-80 w-width-30 h-height-85">
            <div className="flex justify-around items-center w-full flex-wrap sticky top-0 h-20 z-10">
              <input
                type="text"
                className="p-4 rounded-b-30 border border-black text-base text-black font-Quattrocento font-bold"
                // onChange={todoInputHandler}
                // value={todo}
                placeholder="Search Task"
              />
            </div>
            <div>
              <div className="flex justify-start items-start flex-col w-width-20 h-80 overflow-x-hidden	overflow-y-hidden">
                <div className="text-black text-2xl	flex items-center justify-between w-width-20 font-Quattrocento">
                  Filter By:
                </div>
                <div className="text-black text-2xl	flex items-center justify-between w-width-20">
                  <div>
                    <input
                      type="checkbox"
                      name="today"
                      className="w-8 h-8 font-Quattrocento"
                      id="today"
                    />
                  </div>
                  <label
                    htmlFor="today"
                    className="text-black font-Quattrocento"
                  >
                    Today's Task
                  </label>
                </div>
                <div className="text-black text-2xl	flex gap-4 items-center justify-between w-width-20">
                  <div>
                    <input
                      type="checkbox"
                      name="completed"
                      className="w-8 h-8"
                      id="completed"
                    />
                  </div>
                  <label
                    htmlFor="completed"
                    className="text-black font-Quattrocento"
                  >
                    Completed
                  </label>
                </div>
                <div className="text-black text-2xl	flex gap-4 items-center justify-between w-width-20">
                  <div>
                    <input
                      type="checkbox"
                      name="all"
                      className="w-8 h-8"
                      id="all"
                    />
                  </div>
                  <label htmlFor="all" className="text-black font-Quattrocento">
                    All
                  </label>
                </div>
                <div className="text-black text-2xl	flex gap-4 items-center justify-between w-width-20 font-Quattrocento">
                  Sort By:
                </div>
                <div className="text-black text-2xl	flex gap-4 items-center justify-between w-width-20 font-Quattrocento">
                  <input
                    type="radio"
                    id="ascCreatedAt"
                    name="sortBy"
                    value="ascCreatedAt"
                  />
                  <label htmlFor="ascCreatedAt">Newest</label>
                </div>
                <div className="text-black text-2xl	flex gap-4 items-center justify-between w-width-20 font-Quattrocento">
                  <input
                    type="radio"
                    id="descCreatedAt"
                    name="sortBy"
                    value="descCreatedAt"
                  />
                  <label htmlFor="descCreatedAt">Oldest</label>
                </div>
                <button
                  className="w-40 h-14 border border-white cursor-pointer rounded-b-30 text-white bg-black text-lg hover:bg-white hover:text-black hover:border-black font-Quattrocento"
                  // onClick={() => navigate("/user-onboard")}
                >
                  Clear filters
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start flex-col bg-white rounded-b-3 opacity-80 p-8 w-width-40 relative h-height-85 overflow-y-hidden overflow-x-hidden">
            <div className="flex justify-around items-center w-full flex-wrap sticky top-0 h-20	z-10">
              <input
                type="text"
                className="p-4 rounded-b-30 border border-black text-base text-black font-Quattrocento font-bold"
                onChange={todoInputHandler}
                value={todo}
                placeholder="Create New Task"
              />
              {toEdit ? (
                <i
                  className="fa fa-pencil text-4xl visible text-black cursor-pointer"
                  onClick={addToToDoList}
                ></i>
              ) : (
                <button
                  className="rounded-full w-10 h-10 flex flex-col justify-center items-center border visible text-black border-black text-4xl font-bold font-Montserrat"
                  onClick={addToToDoList}
                >
                  +
                </button>
              )}
            </div>
            <div>
              <div className="flex items-center justify-start flex-col overflow-x-hidden overflow-y-scroll p-4 w-width-40 h-height-20">
                {todoList &&
                  todoList.map((item) =>
                    !item.isCompleted
                      ? !item.isDeleted && (
                          <div
                            className="text-white text-2xl flex gap-4 items-center justify-between w-width-35 break-all"
                            key={item.key}
                          >
                            <div>
                              <input
                                type="checkbox"
                                name="text-black"
                                className="w-8 h-8"
                                id={item.key}
                                onChange={() => markCompletedTodo(item)}
                              />
                            </div>
                            <label
                              htmlFor={item.key}
                              className="text-black w-11/12 font-Quattrocento"
                            >
                              {item.current}
                            </label>
                            <div></div>
                            <div className="flex gap-6 w-1/5">
                              <i
                                className="fa fa-pencil text-4xl visible text-black cursor-pointer"
                                onClick={() => editTodoHandler(item)}
                              ></i>
                              <i
                                className="far fa-trash text-4xl visible text-black cursor-pointer"
                                onClick={() => deleteTodo(item)}
                              ></i>
                            </div>
                          </div>
                        )
                      : !item.isDeleted && (
                          <div
                            className="text-white text-2xl flex gap-4 items-center justify-between w-width-35 break-all"
                            key={item.key}
                          >
                            <div>
                              <input
                                type="checkbox"
                                name="text-black"
                                className="w-8 h-8"
                                id={item.key}
                                onChange={() => markCompletedTodo(item)}
                                checked
                              />
                            </div>
                            <label
                              htmlFor={item.key}
                              className="text-black line-through w-10/12"
                            >
                              {item.current}
                            </label>
                            <div className="flex gap-6 w-1/5">
                              <i
                                className="fa fa-pencil invisible text-4xl text-black cursor-pointer"
                                onClick={() => editTodoHandler(item)}
                              ></i>
                              <i
                                className="far fa-trash text-4xl visible text-black cursor-pointer"
                                onClick={() => deleteTodo(item)}
                              ></i>
                            </div>
                          </div>
                        )
                  )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export { Todo };
