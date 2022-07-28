import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 custom-footer">
      <div className="row">
        {[1, 2, 3, 4].map((x) => (
          <div className="col-lg-3" key={x}>
            <div className="p-2">
              <div className="card-title">Link1</div>
              <ul>
                <li>
                  <a href="">sublinks1</a>
                </li>
                <li>
                  <a href="">sublinks1</a>
                </li>
                <li>
                  <a href="">sublinks1</a>
                </li>
                <li>
                  <a href="">sublinks1</a>
                </li>
                <li>
                  <a href="">sublinks1</a>
                </li>
                <li>
                  <a href="">sublinks1</a>
                </li>
                <li>
                  <a href="">sublinks1</a>
                </li>
                <li>
                  <a href="">sublinks1</a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
