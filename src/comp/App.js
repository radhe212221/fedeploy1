import React, { useEffect } from "react";
import {
  AmpltiudeRoute,
  HomeRoute,
  AdminRoute,
  FacultyRoute,
  UserRoute,
} from "./";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useMobile } from "../utils/utils";
import { useDispatch } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  const [m, w] = useMobile();
  const boot = () => {
    console.log(m,w)
    dispatch({ type: "sidebar-open", payload: m });
  };
  useEffect(boot, [window,document]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Admin/*" element={<AdminRoute />} />
          <Route path="/Faculty/*" element={<FacultyRoute />} />
          <Route path="/User/*" element={<UserRoute />} />
          <Route path="/Amplitude/*" element={<AmpltiudeRoute />} />
          <Route path="/*" element={<HomeRoute />} />
          <Route path="*" element={<ErrPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export const ErrPage = () => {
  return (
    <main>
      <div className="container">
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <h1>404</h1>
          <h2>The page you are looking for doesn't exist.</h2>
          <Link className="btn" to="/Admin">
            Back to home
          </Link>
          <img
            src="./assets/img/not-found.svg"
            className="img-fluid py-5"
            alt="Page Not Found"
          />
        </section>
      </div>
    </main>
  );
};
