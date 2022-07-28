import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Header() {
  const state = useSelector((s) => s);
  const { user, role } = state;
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch({ type: "sideBarToggle" });
  };
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to={"/" + role} className="logo d-flex align-items-center">
            <img src="/assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">Logoname</span>
          </Link>
          <i onClick={handleToggle} className="bi bi-list toggle-sidebar-btn" />
        </div>
        <div className="search-bar">
          <div className="search-form d-flex align-items-center">
            <input
              autoComplete="off"
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle">
                <i className="bi bi-search" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="/#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell" />
                <span className="badge bg-primary badge-number">4</span>{" "}
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="/#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <a href="/#">Show all notifications</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="/#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/assets/img/avatar.png"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {user?.name || ""}
                </span>{" "}
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{user?.phone}</h6>
                  {role === "user" && (
                    <span>
                      {user?.className} / {user?.medium} /{user?.board} /{" "}
                      {user?.subject || ""}
                    </span>
                  )}
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
