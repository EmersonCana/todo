import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const { data, loading } = useFetch({
    url: `https://fakestoreapi.com/products/${id}`,
  });
  return (
    <div>
      <h1>{data.title}</h1>
      <div className="card" style={{ color: "black" }}>
        <img src={data.image} alt="" />
        <hr />
        <div className="card-content">
          <dl>
            <dt>
              <h3>Description</h3>
            </dt>
            <dd>{data.description}</dd>
            <dt>
              <h3>Category</h3>
            </dt>
            <dd>
              <span className="subtitle pills">{data.category}</span>
            </dd>
            <dt>
              <h3>Price</h3>
            </dt>
            <dd>
              <h3>{data.price}</h3>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Product;
