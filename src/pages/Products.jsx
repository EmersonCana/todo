import React from "react";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
  });

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>Products</h1>
      {data.map((product) => (
        <div
          key={product.id}
          style={{ backgroundColor: "#fff", color: "black" }}
        >
          <div className="card">
            <div className="card-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-content">
              <div className="card-header">
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </div>
              <span className="subtitle pills">{product.category}</span>
              <div className="card-body">{product.description}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
