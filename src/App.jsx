import { useState } from "react";
import genrateRandomId from "./utilies/generateRandomId";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInputValue, setTodoInputValue] = useState("");

  function saveTodo() {
    setTodos([
      ...todos,
      {
        id: genrateRandomId(),
        title: todoInputValue,
        status: "INCOMPLETE",
      },
    ]);
    setTodoInputValue("");
  }

  return (
    <div className="max-w-md mx-auto my-20 bg-blue-50 rounded-lg p-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">ToDo APP</h1>

        <form className="space-y-4" onSubmit={function(e){
          e.preventDefault();
          saveTodo();
        }}>
          <input
            type="text"
            className="border border-gray-300 rounded-md w-full h-10 px-3"
            placeholder="Enter your Task"
            required
            value={todoInputValue}
            onChange={function (e) {
              setTodoInputValue(e.target.value);
            }}
          />

          <button
            onClick={saveTodo}
            className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2.5 rounded-md text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-6 space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                onChange={function (e) {
                  setTodos(
                    todos.map((el) => {
                      if (el.id == todo.id) {
                        return {
                          ...el,
                          status: e.target.checked ? "COMPLETE" : "INCOMPLETE",
                        };
                      }
                      return el;
                    })
                  );
                }}
              />
              <p className={todo.status == "COMPLETE" ? "line-through" : ""}>
                {todo.title}
              </p>
            </div>
            <div>
              <button
                onClick={function () {
                  setTodos(todos.filter((el) => el.id !== todo.id));
                }}
                className="bg-red-500 text-white px-2 py-1 rounded-md text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {todos.length > 0 && (
        <div>
          <button
            onClick={function () {
              setTodos([]);
            }}
            className="bg-red-500 text-white px-3 py-2 rounded-md w-full mt-8"
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
