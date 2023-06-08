import React, { useTransition } from "react";
import { useState, useEffect } from "react";

const Todos = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data.todos));
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: input,
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((todoData) => {
        const copy = [...data];
        copy.push(todoData);
        setData(copy);
      })
      .then(setInput(""))
      .then(setLoading(false));
  };
  return (
    <>
      <div>Todos</div>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
