import React from "react";
import Filters from "./Filters";
import Footer from "./Footer";
import Header from "./Header";
import Courses from "./Courses";
import Videos from "./Videos";
import Faq from "./Faq";
import AllClasses from "./AllClasses";
import Allsubjects from "./Allsubjects";
import Sidebar from "./Sidebar";
import TOC from "./TOC";

export default function HomeRoute() {
  return (
    <div>
      <Header />
      <Sidebar />
      <br />
      <br />
      <br />
      <AllClasses />
      <Allsubjects />
      <Filters />
      <Courses />
      <Videos />
      <Faq />
      <Footer />
    </div>
  );
}
