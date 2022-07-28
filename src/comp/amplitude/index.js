import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import Main from "../common/Main";
import User from "./UserLogs";
import Guest from "./GuestLogs";
export default function AdminRoute() {
  const options = [
    { path: "/User", element: <User /> },
    { path: "/Guest", element: <Guest /> },
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
