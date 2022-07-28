import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { mysubjects } from "../../utils/user.service";
export default function Sidebar() {
  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { role } = state;
  const [a, seta] = useState([]);

  const boot = () => {
    mysubjects()
      .then((d) => seta(d))
      .catch((e) => seta([]));
  };
  useEffect(boot, []);
  let options = [];
  if (role === "amplitude") {
    options = [
      {
        icon: "file-earmark-spreadsheet-fill",
        name: "User logs",
        to: "/Amplitude/User",
      },
      {
        icon: "file-spreadsheet-fill",
        name: "Guest Logs",
        to: "/Amplitude/Guest",
      },
    ];
  }
  if (role === "user") {
    options = [
      { icon: "person", name: "Faculty", to: "/User/Faculty" },
      { icon: "credit-card", name: "Packages", to: "/User/Packages" },
      { icon: "book", name: "Material", to: "/User/Material" },
      { icon: "journal", name: "Subject", to: "/User/Subject" },
      { icon: "play", name: "Videos", to: "/User/Videos" },
      { icon: "plus", name: "Watchlist", to: "/User/Watchlist" },
      { icon: "arrow-down", name: "Pending", to: "/User/Pending" },
      { icon: "check", name: "Completed", to: "/User/Completed" },
      { icon: "hourglass-bottom", name: "Tests", to: "/User/Tests" },
      { icon: "hourglass", name: "Mock", to: "/User/Mock" },
      { icon: "pencil-square", name: "Preparation", to: "/User/Preparation" },
      {
        name: "Live",
        to: "/User/Live",
        icon: "broadcast-pin",
      },
    ];
  }

  if (role === "admin") {
    options = [
      { name: "Faculty", to: "/Admin/Faculty" },
      { name: "Material", to: "/Admin/Material" },
      { name: "User", to: "/Admin/User" },
      { name: "Videos", to: "/Admin/Videos" },
      { name: "Toc", to: "/Admin/Toc" },
      { name: "Uploads", to: "/Admin/Uploads" },
    ];
  }

  if (role === "faculty") {
    options = [
      { name: "Material", to: "/Faculty/Material" },
      { name: "Videos", to: "/Faculty/Videos" },
      { name: "Toc", to: "/Faculty/Toc" },
    ];
  }

  const navToDashboard = () => {
    if (role === "admin") {
      navigate("/Admin");
    }

    if (role === "faculty") {
      navigate("/faculty");
    }
  };
  const hclk = (u, s) => {
    navigate(u);
  };
  const makeSubjectsForUser = () => {
    return (
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-bs-target="#components-nav"
          data-bs-toggle="collapse"
        >
          <i className="bi bi-menu-button-wide" />
          <span>My subjects ({a?.length || 0})</span>
          <i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul
          id="components-nav"
          className="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          {a.map((x) => (
            <li key={x}>
              <a onClick={() => hclk(`/user/subject/${x}`, x)}>
                <i
                  style={{ fontSize: "18px" }}
                  className="bi bi-journal-text"
                />
                <span>{x}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <>
      <aside
        id="sidebar"
        className={state.sideBarToggle ? "sidebar active" : "sidebar "}
      >
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link collapsed" onClick={navToDashboard}>
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
          </li>
          {role === "user" && makeSubjectsForUser()}

          <li className="nav-heading">Usefull Links</li>

          {options.map((x) => (
            <li key={x.name} className="nav-item">
              <Link className="nav-link collapsed" to={x.to}>
                {x.icon && <i className={"bi bi-" + x.icon}></i>}
                <span>{x.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
