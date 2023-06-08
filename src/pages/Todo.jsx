import React from "react";
import { useState, useEffect } from "react";

const Todo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setImmediate(data));
  }, []);
  return (
    <>
      <div>Todo</div>
      {console.log(data)}
    </>
  );
};

export default Todo;
