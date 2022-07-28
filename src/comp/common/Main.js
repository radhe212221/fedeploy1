import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Main({ children }) {
  const state = useSelector((s) => s);
  const { role } = state;
  const data = useParams();
  const getTitle = (ob) => {
    let k = Object.values(ob);
    return k[0];
  };
  return (
    <main id="main" className="main">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/" + role}>{role}</Link>
          </li>
          <li className="breadcrumb-item active">{getTitle(data)}</li>
        </ol>
      </nav>
      <section className="section">{children}</section>
    </main>
  );
}
