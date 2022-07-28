import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import Main from "../common/Main";
import Videos from "./videos";

import Material from "./Material";
import TOC from "./TOC";
export default function FacultyRoute() {
  const options = [
    { path: "/Material", element: <Material /> },
    { path: "/Videos", element: <Videos /> },
    { path: "/TOC", element: <TOC /> },
  ];
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        {options.map((x) => (
          <Route
            key={x.path}
            path={x.path}
            element={<Main>{x.element}</Main>}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}
