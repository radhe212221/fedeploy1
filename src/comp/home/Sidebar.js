import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useMobile } from "../../utils/utils";
export default function Sidebar() {
  const [mobile, width] = useMobile();
  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const { role } = state;
  let options = [];
  const navToDashboard = () => {
    if (role === "admin") {
      navigate("/Admin");
    }
    if (role === "faculty") {
      navigate("/faculty");
    }
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
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="/#"
            >
              <i className="bi bi-menu-button-wide" />
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="/components-alerts.html">
                  <i className="bi bi-circle" />
                  <span>Alerts</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Usefull Links</li>

          {options.map((x) => (
            <li key={x.name} className="nav-item">
              <Link className="nav-link collapsed" to={x.to}>
                <i className="bi bi-file-earmark" />
                <span>{x.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
