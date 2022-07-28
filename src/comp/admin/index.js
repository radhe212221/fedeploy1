import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import Main from "../common/Main";
import Videos from "./videos";
import Uploads from "./Uploads";

import Faculty from "./Faculty";
import Material from "./Material";
import User from "./User";
import TOC from "./TOC";
export default function AdminRoute() {
  const options = [
    { path: "/Faculty", element: <Faculty /> },
    { path: "/Material", element: <Material /> },
    { path: "/User", element: <User /> },
    { path: "/Videos", element: <Videos /> },
    { path: "/TOC", element: <TOC /> },
    { path: "/Uploads", element: <Uploads /> },
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
