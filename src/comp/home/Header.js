import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import OTP from "../common/OTP";
import {
  verifyUser,
  sendOtp,
  getTocFilters,
  signup,
} from "../../utils/services";
import { getStorage, setStorage } from "../../utils/utils";

export default function Header() {
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
          <a className="logo d-flex align-items-center">
            <img src="/assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">Logoname</span>
          </a>
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
        <nav className="header-nav ms-auto " id="d-custom-none">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle" href="/#">
                <i className="bi bi-search" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="/#" data-bs-toggle="dropdown">
                Classes
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-footer">
                  <a>8th class</a>
                </li>
                <li className="dropdown-footer">
                  <a>9th class</a>
                </li>
                <li className="dropdown-footer">
                  <a>10th class</a>
                </li>
                <li className="dropdown-footer">
                  <a>11th class</a>
                </li>
                <li className="dropdown-footer">
                  <a>12th class</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link " data-bs-toggle="dropdown">
                Bard
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-footer">
                  <a>CBSE</a>
                </li>

                <li className="dropdown-footer">
                  <a>BSEB</a>
                </li>
                <li className="dropdown-footer">
                  <a>HSEB</a>
                </li>
                <li className="dropdown-footer">
                  <a>PSEB</a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <a
                className="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Signup
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="btn btn-sm btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#adminModal"
              >
                admin
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="btn btn-sm btn-info"
                data-bs-toggle="modal"
                data-bs-target="#facultyModal"
              >
                faculty
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <MyModal
        color="btn btn-primary"
        id="loginModal"
        title="user"
        expectedRole="user"
        to="/user"
      />
      <MyModal
        color="btn btn-warning"
        id="adminModal"
        title="admin"
        expectedRole="admin"
        to="/admin"
      />
      <MyModal
        color="btn btn-info"
        id="facultyModal"
        title="faculty"
        expectedRole="faculty"
        to="/faculty"
      />
      <SignupModal />
    </>
  );
}
export const MyModal = ({ id, title, to, color, expectedRole }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = getStorage("userData", true);
  const [otp, setotp] = useState("");
  const [phone, setphone] = useState("");
  const [mounted, setmounted] = useState(false);
  const abc = (msg, payload) => toast(msg, payload);
  const onChange = (e) => {
    setotp(e);
  };
  const onRetry = (e) => {
    setmounted(false);
    const payload = {
      phone,
      purpose: "login",
      token: userData.accessToken || "",
      uid: userData._id || "",
    };
    sendOtp(payload)
      .then((d) => {
        setotp(d);
      })
      .finally(() => {
        setmounted(true);
      });
  };
  const hc = (e) => {
    setphone(e.target.value);
  };
  const obl = () => {
    onRetry();
  };
  const hs = () => {
    if (!userData?.accessToken && !userData?._id)
      return abc("not allowed", { type: "warning" });
    const payload = {
      otp,
      phone,
      purpose: "login",
      token: userData.accessToken || "",
      uid: userData._id || "",
    };
    verifyUser(payload).then((d) => {
      if (d) {
        let userData = getStorage("userData", true);
        dispatch({ type: "otp-login", payload: userData, role: expectedRole });
        navigate(to);
      } else {
        abc("failed to login as " + expectedRole, { type: "error" });
      }
    });
  };
  return (
    <>
      <div className="modal fade" id={id}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content ">
            <div className="modal-header">
              <h4 className="modal-title">Login As {title}</h4>
            </div>
            <div className="modal-body">
              <input
                onChange={hc}
                onBlur={obl}
                className="form-control"
                placeholder="mobile"
                value={phone}
              />
              <OTP
                otp={otp}
                mounted={mounted}
                onChange={onChange}
                onRetry={onRetry}
              />
              <div className="d-grid">
                <button data-bs-dismiss="modal" onClick={hs} className={color}>
                  verify otp
                </button>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export const SignupModal = () => {
  const [ob1, setob1] = useState({
    name: getStorage("userData", true)?.name || "",
    email: getStorage("userData", true)?.email || "",
    phone: getStorage("userData", true)?.phone || "",
    uid: getStorage("userData", true)?.uid || "",
  });

  const [ob2, setob2] = useState({
    board: getStorage("userData", true)?.board || "",
    className: getStorage("userData", true)?.className || "",
    medium: getStorage("userData", true)?.medium || "",
    subject: getStorage("userData", true)?.subject || "",
  });
  const [l1, setl1] = useState([]);
  const [l2, setl2] = useState([]);
  const [l3, setl3] = useState([]);
  const [l4, setl4] = useState([]);
  const hc1 = (e) => {
    const k = e.target.placeholder;
    const v = e.target.value;
    setob1({ ...ob1, [k]: v });
  };
  const hc2 = (k, v) => {
    setob2({ ...ob2, [k]: v });
    getTocFilters({ ...ob2, [k]: v }).then((d) => {
      if (k === "board") {
        setl2(d);
      }

      if (k === "medium") {
        setl3(d);
      }

      if (k === "className") {
        setl4(d);
      }
    });
  };

  const next1 = () => {
    signup(ob1, 1)
      .then((d) => {
        setob1({
          ...ob1,
          name: d?.name,
          phone: d?.phone,
          email: d?.email,
          uid: d?._id,
        });
      })
      .finally(() => {
        getTocFilters({}).then((d) => setl1(d));
      });
  };
  const next2 = () => {
    signup({ ...ob2, uid: ob1.uid }, 2).then((d) => {
      setStorage("userData", d, true);
    });
  };
  const getTitle = (k) => {
    if (ob2[k]) {
      return ob2[k];
    } else {
      return "select " + k;
    }
  };
  return (
    <>
      <div className="modal fade" id="signupModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">signupModal</h4>
            </div>
            <div className="modal-body">
              <div className="s1">
                {!ob1.uid && (
                  <>
                    <input
                      className="form-control mb-1"
                      onChange={hc1}
                      value={ob1.name}
                      placeholder="name"
                    />
                    <input
                      className="form-control mb-1"
                      onChange={hc1}
                      value={ob1.email}
                      placeholder="email"
                    />
                    <input
                      className="form-control mb-1"
                      onChange={hc1}
                      value={ob1.phone}
                      placeholder="phone"
                    />
                    <div className="d-grid">
                      <button className="btn btn-primary" onClick={next1}>
                        next1
                      </button>
                    </div>
                  </>
                )}
                {(ob1.uid || ob2.board) && (
                  <div>
                    <div>{getTitle("board")} </div>
                    {l1.map((x) => (
                      <label
                        className="badge rounded-pill bg-primary m-2"
                        onClick={() => hc2("board", x)}
                      >
                        {x} <input type="radio" checked={x === ob2.board} />
                      </label>
                    ))}

                    <div>{getTitle("medium")}</div>
                    {l2.map((x) => (
                      <label
                        className="badge rounded-pill bg-primary m-2"
                        onClick={() => hc2("medium", x)}
                      >
                        {x} <input type="radio" checked={x === ob2.medium} />
                      </label>
                    ))}
                    <div>{getTitle("className")}</div>
                    {l3.map((x) => (
                      <label
                        className="badge rounded-pill bg-primary m-2"
                        onClick={() => hc2("className", x)}
                      >
                        {x} <input type="radio" checked={x === ob2.className} />
                      </label>
                    ))}

                    <div>{getTitle("subject")}</div>
                    {l4.map((x) => (
                      <label
                        className="badge rounded-pill bg-primary m-2"
                        onClick={() => setob2({ ...ob2, subject: x })}
                      >
                        {x} <input type="radio" checked={x === ob2.subject} />
                      </label>
                    ))}
                    <div className="d-grid">
                      <button className="btn btn-primary" onClick={next2}>
                        next2
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
