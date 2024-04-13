import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="justify-center items-center flex bg-zinc-500 min-h-screen flex-col">
      <div className="">
        <div className="font-serif font-extrabold text-6xl">
          Todo Application
        </div>
        <div className="pt-4">
          <input
            className="w-1/2 border rounded-s pt-5"
            type="text"
            placeholder="Todos"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="pt-4">
          <input
            className="border rounded-s pt-5 w-1/2"
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="pt-5">
          <button
            className="border rounded-s bg-white font-sans text-lg font-bold w-44"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
        <div>
          {todos.map((todo, index) => (
            <div key={index}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
