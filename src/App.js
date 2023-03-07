import React from "react";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Explore from "./screens/explore";
import Items from "./screens/items";
import Author from "./screens/author";
import Create from "./screens/create";
import Layout from "./screens/Layout";

const App = () => {
  const hello = () => {

    console.log('Hello World');
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Author" element={<Author />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
