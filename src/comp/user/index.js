import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import Main from "../common/Main";

import Packages from "./Packages";
import Dashboard from "./Dashboard";
import Material from "./Material";
import Subject from "./Subject";
import Videos from "./Videos";
import Watchlist from "./Watchlist";
import Pending from "./Pending";
import Completed from "./Completed";
import Tests from "./Tests";
import Mock from "./Mock";
import Preparation from "./Preparation";
import Live from "./Live";
import Faculty from "./Faculty";
import SubjectVideo from "./SubjectVideo";
export default function UserRoute() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/Faculty" element={<Faculty />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Material" element={<Material />} />
          <Route path="/Subject" element={<Subject />} />
          <Route path="/Subject/:subject" element={<SubjectVideo />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Watchlist" element={<Watchlist />} />
          <Route path="/Pending" element={<Pending />} />
          <Route path="/Completed" element={<Completed />} />
          <Route path="/Tests" element={<Tests />} />
          <Route path="/Mock" element={<Mock />} />
          <Route path="/Preparation" element={<Preparation />} />
          <Route path="/Live-classs" element={<Live />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}
