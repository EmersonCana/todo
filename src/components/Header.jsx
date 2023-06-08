import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/quotes">Quotes</Link>
    </>
  );
};
