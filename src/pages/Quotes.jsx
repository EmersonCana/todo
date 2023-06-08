import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setData(data.quotes))
      .then(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>Quotes</h1>
      <hr />
      <ul>
        {data.map((quote) => (
          <li key={quote.id}>
            {quote.quote} - {quote.author}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Quotes;
