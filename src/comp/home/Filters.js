import React from "react";

export default function Filters() {
  return (
    <div>
      <div className="row">
        <div className="card">
          <div className="card-title">
            <h3 align="center">Select any option</h3>
          </div>
          <div className="card-body ">
            <div className="d-flex gap-3 justify-content-center">
              <Myfilter />
              <Myfilter />
              <Myfilter />
              <Myfilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Myfilter = () => {
  return (
    <div className="form-floating mx-2 flex-grow-1">
      <select defaultValue="" className="form-select " id="floatingSelect" aria-label="State">
        <option >New York</option>
        <option value={1}>Oregon</option>
        <option value={2}>DC</option>
      </select>
      <label htmlFor="floatingSelect">State</label>
    </div>
  );
};
