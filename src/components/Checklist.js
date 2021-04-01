import { useEffect, useState } from "react";
import { useLocation, useHistory, Link, useParams } from "react-router-dom";
import Accordian from "./Accordian";
import Header from "./Header";
import "../App.css";
import useMainState from "../State/MainState";
import OrderCard from "./OrderCard";

const CheckList = () => {
  let Location = useLocation();
  const order = Location.state.data;
  const todo_list = Location.state.data.TodoList;
  const History = useHistory();
  const { id } = useParams();

  const { Loading, savingTodo } = useMainState();
  const [TodoInput, setTodoInput] = useState({
    Value: "",
    isChecked: false,
  });
  const [TodoList, setTodoList] = useState(todo_list);

  const handleSetTodo = () => {
    setTodoList((prev) => [
      ...prev,
      {
        Value: TodoInput.Value,
        isChecked: false,
      },
    ]);
    setTodoInput({ Value: "", isChecked: false });
  };

  useEffect(() => {
    // if we dont get any data from the URL then go to home page
    if (Location.state.data === null) History.push("/");
  });
  return (
    <div className="row m-0 p-0">
      <Header />
      {/* side bar 🎈 */}
      <div className="row m-0 p-0 d-flex flex-row" style={{ marginTop: 30 }}>
        <Accordian />
        {/* black space  */}
        <div className="col-1"></div>
        <div className="col-5" style={{ marginTop: 30 }}>
          <div className="row mt-4">
            <h4>CheckList</h4>
            <div
              className="col d-flex flex-column p-4"
              style={{
                backgroundColor: "#2c2f39",
                minHeight: 60,
                color: "white",
                fontSize: 18,
              }}
            >
              <div className="col d-flex flex-row ">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Enter list of things . . ."
                  value={TodoInput.value}
                  onChange={(e) =>
                    setTodoInput({
                      Value: e.target.value,
                      isChecked: false,
                    })
                  }
                />
                <button
                  className="btn btn-dark"
                  onClick={handleSetTodo}
                  disabled={TodoInput.Value.trim().length === 0 ? true : false}
                >
                  Add
                </button>
              </div>
              {/* show the list of todo's here  */}
              {TodoList.length > 0 ? (
                TodoList.map((todo, index) => {
                  if (TodoList.length === 1 && todo.Value === "") {
                    return (
                      <div className="col d-flex flex-row mt-3">
                        <p>No Todo yet</p>
                      </div>
                    );
                  } else if (todo.Value !== "") {
                    return (
                      <div className="col d-flex flex-row mt-3">
                        <input
                          type="checkbox"
                          className="mt-2"
                          defaultChecked={todo.isChecked}
                          onChange={(e) => {
                            let newTodoList = [...TodoList];
                            newTodoList[index]["isChecked"] = e.target.checked;
                            setTodoList(newTodoList);
                          }}
                        />
                        <p style={{ marginLeft: 10 }}>{todo.Value}</p>
                      </div>
                    );
                  }
                })
              ) : (
                <p>No Todo yet</p>
              )}
              <div className="col">
                <button
                  className="btn d-flex justify-content-center w-100 btn-secondary"
                  onClick={() => savingTodo(id, TodoList)}
                  disabled={
                    TodoList.length === 1 && TodoList[0].Value === ""
                      ? true
                      : false
                  }
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-4" key={id}>
            <h4>Order Details</h4>
            {/* show order details component  */}
            <OrderCard key={id} order={order} page={"Checklist"}/>
          </div>
        </div>
        {/* black space  */}
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col">
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default CheckList;
