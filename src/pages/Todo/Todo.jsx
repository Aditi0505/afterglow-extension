import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "../../components";
import { useFilter, useTodo, useWallpaper } from "../../context";
import { getSearchedTodo, getSortedTodo, getCheckedTodo } from "../../utils";

const Todo = () => {
  const { wallpaper } = useWallpaper();
  const { todoState, todoDispatch } = useTodo();
  const { todo, todoList, toEdit } = todoState;
  const navigate = useNavigate();
  const { filterState, filterDispatch } = useFilter();
  const searchedTodo = getSearchedTodo(filterState, todoList);
  const checkedTodo = getCheckedTodo(filterState, searchedTodo);
  const sortedTodo = getSortedTodo(filterState, checkedTodo);
  return (
    <div
      className="flex flex-col justify-center items-center text-6xl text-white h-screen w-full bg-cover bg-no-repeat bg-clip-border bg-fixed bg-center"
      style={wallpaper}
    >
      <ThemeToggle />
      <div className="w-fit text-center dark:bg-slate-900 dark:opacity-70 dark:rounded-b-3">
        <div className="flex h-height-10 justify-center items-center gap-40 w-4/5">
          <div>
            <button
              className="w-40 h-14 border border-black cursor-pointer text-black bg-white opacity-80 hover:bg-transparent hover:text-white hover:border-white rounded-b-30 text-lg font-Quattrocento dark:bg-slate-900 dark:text-[#F7D8BA] opacity-70 dark:hover:text-black dark:hover:bg-white dark:border-white"
              onClick={() => navigate("/welcome")}
            >
              Back
            </button>
          </div>
          <header>
            <h1 className="font-Montserrat font-bold dark:text-[#F7D8BA] dark:bg-slate-900 rounded-full">
              Your SuperList
            </h1>
          </header>
        </div>
        <main className="flex justify-center items-center h-height-90 gap-8">
          <div className="p-8 flex flex-col justify-start items-center bg-white rounded-b-3 opacity-80 w-width-30 h-height-85 dark:bg-slate-900 dark:text-[#F7D8BA]">
            <div className="flex justify-around items-center w-full flex-wrap sticky top-0 h-20 z-10">
              <input
                type="text"
                className="p-4 rounded-b-30 border border-black text-base text-black font-Quattrocento font-bold"
                onChange={(e) =>
                  filterDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  })
                }
                value={filterState.searchKeyword}
                placeholder="Search Task"
              />
            </div>
            <div>
              <div className="flex justify-start items-start flex-col w-width-20 h-80 overflow-x-hidden	overflow-y-hidden">
                <div className="text-black text-2xl flex items-center justify-between w-width-20 font-Quattrocento dark:text-[#F7D8BA]">
                  Filter By:
                </div>
                <div className="text-black text-2xl flex items-center justify-between w-width-20">
                  <div>
                    <input
                      type="checkbox"
                      name="today"
                      className="w-8 h-8 font-Quattrocento"
                      id="today"
                      onChange={() =>
                        filterDispatch({
                          type: "FILTER_BY_CATEGORY",
                          payload: "today",
                        })
                      }
                      checked={filterState["today"]}
                    />
                  </div>
                  <label
                    htmlFor="today"
                    className="text-black font-Quattrocento dark:text-[#F7D8BA]"
                  >
                    Today's Task
                  </label>
                </div>
                <div className="text-black text-2xl flex gap-4 items-center justify-between w-width-20">
                  <div>
                    <input
                      type="checkbox"
                      name="completed"
                      className="w-8 h-8"
                      id="completed"
                      onChange={() =>
                        filterDispatch({
                          type: "FILTER_BY_CATEGORY",
                          payload: "completed",
                        })
                      }
                      checked={filterState["completed"]}
                    />
                  </div>
                  <label
                    htmlFor="completed"
                    className="text-black font-Quattrocento dark:text-[#F7D8BA]"
                  >
                    Completed
                  </label>
                </div>
                <div className="text-black text-2xl flex gap-4 items-center justify-between w-width-20">
                  <div>
                    <input
                      type="checkbox"
                      name="all"
                      className="w-8 h-8"
                      id="all"
                      onChange={() =>
                        filterDispatch({
                          type: "FILTER_BY_CATEGORY",
                          payload: "all",
                        })
                      }
                      checked={filterState["all"]}
                    />
                  </div>
                  <label
                    htmlFor="all"
                    className="text-black font-Quattrocento dark:text-[#F7D8BA]"
                  >
                    All
                  </label>
                </div>
                <div className="text-black text-2xl flex gap-4 items-center justify-between w-width-20 font-Quattrocento dark:text-[#F7D8BA]">
                  Sort By:
                </div>
                <div className="text-black text-2xl flex gap-4 items-center justify-between w-width-20 font-Quattrocento dark:text-[#F7D8BA]">
                  <input
                    type="radio"
                    id="ascCreatedAt"
                    name="sortBy"
                    value="ascCreatedAt"
                    onChange={() =>
                      filterDispatch({
                        type: "SORT",
                        payload: "OLDEST",
                      })
                    }
                    checked={filterState.sortBy === "OLDEST"}
                  />
                  <label htmlFor="ascCreatedAt">Oldest</label>
                </div>
                <div className="text-black text-2xl flex gap-4 items-center justify-between w-width-20 font-Quattrocento dark:text-[#F7D8BA]">
                  <input
                    type="radio"
                    id="descCreatedAt"
                    name="sortBy"
                    value="descCreatedAt"
                    onChange={() =>
                      filterDispatch({
                        type: "SORT",
                        payload: "NEWEST",
                      })
                    }
                    checked={filterState.sortBy === "NEWEST"}
                  />
                  <label htmlFor="descCreatedAt">Newest</label>
                </div>
                <button
                  className="w-40 h-14 border border-white cursor-pointer rounded-b-30 text-white bg-black text-lg hover:bg-white hover:text-black hover:border-black font-Quattrocento dark:bg-slate-900 dark:text-[#F7D8BA] opacity-70 dark:hover:text-black dark:hover:bg-white"
                  onClick={() =>
                    filterDispatch({
                      type: "CLEAR",
                      payload: "",
                    })
                  }
                >
                  Clear filters
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start flex-col bg-white rounded-b-3 opacity-80 p-8 w-width-40 relative h-height-85 overflow-y-hidden overflow-x-hidden dark:bg-slate-900 dark:text-[#F7D8BA] opacity-70">
            <div className="flex justify-around items-center w-full flex-wrap sticky top-0 h-20	z-10">
              <input
                type="text"
                className="p-4 rounded-b-30 border border-black text-base text-black font-Quattrocento font-bold"
                onChange={(e) =>
                  todoDispatch({
                    type: "ADD_CURRENT_TASK",
                    payload: e.target.value,
                  })
                }
                value={todo}
                placeholder="Create New Task"
              />
              {toEdit ? (
                <i
                  className="fa fa-pencil text-4xl visible text-black cursor-pointer dark:text-[#F7D8BA]"
                  onClick={() =>
                    todoDispatch({
                      type: "EDIT_TODO",
                      payload: "",
                    })
                  }
                ></i>
              ) : (
                <button
                  className="rounded-full w-10 h-10 flex flex-col justify-center items-center border visible text-black border-black text-4xl font-bold font-Montserrat dark:text-[#F7D8BA] dark:border-white"
                  onClick={() =>
                    todoDispatch({
                      type: "ADD_TO_LIST",
                      payload: "",
                    })
                  }
                >
                  +
                </button>
              )}
            </div>
            <div>
              <div className="flex items-center justify-start flex-col overflow-x-hidden overflow-y-scroll p-4 w-width-40 h-height-20">
                {sortedTodo &&
                  sortedTodo.map((item) =>
                    !item.isCompleted
                      ? !item.isDeleted && (
                          <div
                            className="text-white text-2xl flex gap-4 items-center justify-between w-width-35 break-all dark:text-[#F7D8BA]"
                            key={item.key}
                          >
                            <div>
                              <input
                                type="checkbox"
                                name="text-black"
                                className="w-8 h-8"
                                id={item.key}
                                onChange={() =>
                                  todoDispatch({
                                    type: "MARK_COMPLETED_TODO",
                                    payload: item,
                                  })
                                }
                              />
                            </div>
                            <label
                              htmlFor={item.key}
                              className="text-black w-11/12 font-Quattrocento dark:text-[#F7D8BA]"
                            >
                              {item.current}
                            </label>
                            <div></div>
                            <div className="flex gap-6 w-1/5">
                              <i
                                className="fa fa-pencil text-4xl visible text-black cursor-pointer dark:text-[#F7D8BA]"
                                onClick={() =>
                                  todoDispatch({
                                    type: "SET_TO_EDIT",
                                    payload: item,
                                  })
                                }
                              ></i>
                              <i
                                className="far fa-trash text-4xl visible text-black cursor-pointer dark:text-[#F7D8BA]"
                                onClick={() =>
                                  todoDispatch({
                                    type: "DELETE_TODO",
                                    payload: item,
                                  })
                                }
                              ></i>
                            </div>
                          </div>
                        )
                      : !item.isDeleted && (
                          <div
                            className="text-white text-2xl flex gap-4 items-center justify-between w-width-35 break-all dark:text-[#F7D8BA]"
                            key={item.key}
                          >
                            <div>
                              <input
                                type="checkbox"
                                name="text-black"
                                className="w-8 h-8"
                                id={item.key}
                                onChange={() =>
                                  todoDispatch({
                                    type: "MARK_COMPLETED_TODO",
                                    payload: item,
                                  })
                                }
                                checked
                              />
                            </div>
                            <label
                              htmlFor={item.key}
                              className="text-black line-through w-10/12 dark:text-[#F7D8BA]"
                            >
                              {item.current}
                            </label>
                            <div className="flex gap-6 w-1/5">
                              <i
                                className="fa fa-pencil invisible text-4xl text-black cursor-pointer dark:text-[#F7D8BA]"
                                onClick={() =>
                                  todoDispatch({
                                    type: "SET_TO_EDIT",
                                    payload: item,
                                  })
                                }
                              ></i>
                              <i
                                className="far fa-trash text-4xl visible text-black cursor-pointer dark:text-[#F7D8BA]"
                                onClick={() =>
                                  todoDispatch({
                                    type: "DELETE_TODO",
                                    payload: item,
                                  })
                                }
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
