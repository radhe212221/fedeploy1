import React from "react";
import Carousel from "../common/Carousel";

export default function AllClasses() {
  const a = [
    {
      state: "",
      board: ["cbse", "bseb", "hseb", "pseb"],
      className: "8th",
      medium: ["हिन्दी", "english"],
    },
    {
      state: "",
      board: ["cbse", "bseb", "hseb", "pseb"],
      className: "9th",
      medium: ["हिन्दी", "english"],
    },
    {
      state: "",
      board: ["cbse", "bseb", "hseb", "pseb"],
      className: "10th",
      medium: ["हिन्दी", "english"],
    },
    {
      state: "",
      board: ["cbse", "bseb", "hseb", "pseb"],
      className: "11th",
      medium: ["हिन्दी", "english"],
    },
    {
      state: "",
      board: ["cbse", "bseb", "hseb", "pseb"],
      className: "12th",
      medium: ["हिन्दी", "english"],
    },
  ];
  return (
    <div className="">
      <div className="row">
        <div className="p-5 text-center bg-white">
          <h2 className="text-capitalize text-primary mb-5">all classes</h2>
          <div className="row">
            <Carousel slidesToShow={4}>
              {a.map((x, i) => (
                <Card key={i} {...x} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Card = ({ ...props }) => {
  return (
    <div className="col-lg-12">
      <div className="col-lg-10">
        <div className="card">
          <div className="card-title"></div>
          <div className="card-body">
            <img src="banner" alt="" />
            <h2>{props?.className}- class</h2>
            <span className="badge rounded-pill bg-success">
              {props?.medium[0]}
            </span>
            <span className="badge mx-2 rounded-pill bg-success">
              {props?.medium[1]}
            </span>
            <h6 className="mt-2">
              <span className="badge bg-primary">{props?.board[0]}</span>
              <span className="badge bg-info">{props?.board[1]}</span>
              <span className="badge bg-danger">{props?.board[2]}</span>
              <span className="badge bg-warning">{props?.board[3]}</span>
            </h6>
            <p>
            <a className="badge border-warning border-1 d-flex justify-flex-end align-items-center text-primary" href="">
              Explore Now <i className="bi bi-arrow-right mx-1 fs-4"></i>
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
