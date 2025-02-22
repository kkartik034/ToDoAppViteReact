import { useState } from "react";
import { useDispatch } from "react-redux";
import { adTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent dispatching empty todos
    dispatch(adTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`py-2 px-6 rounded text-lg focus:outline-none ${
          input.trim()
            ? "bg-indigo-500 hover:bg-indigo-600 text-white"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
        }`}
        disabled={!input.trim()} // Disable button if input is empty
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
