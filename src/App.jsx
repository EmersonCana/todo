import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import About from "./pages/About";
import MainLayout from "./pages/layouts/MainLayout";
import Quotes from "./pages/Quotes";
import Product from "./pages/Product";
import Todos from "./pages/Todos";
import TodoAdd from "./pages/TodoAdd";

const App = () => {
  const NotFound = () => {
    return (
      <div>
        404: Page not found. <Link to="/">Go Back.</Link>
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/add" element={<TodoAdd />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
