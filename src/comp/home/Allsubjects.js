import React from "react";
import Carousel from "../common/Carousel";

const src =
  "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148163416.jpg?t=st=1658810359~exp=1658810959~hmac=1b13b5cf8ac2a62e7280a905cd9db27c5de2476e5f44d565ed888396e2f900bd&w=740";
export default function Allsubjects() {
  const a = [
    { title: "Mathematics (8th class)", poster: "", link: "" },
    { title: "Mathematics (9th class)", poster: "", link: "" },
    { title: "Mathematics (10th class)", poster: "", link: "" },
    { title: "Mathematics (11th class)", poster: "", link: "" },
    { title: "Mathematics (12th class)", poster: "", link: "" },
    { title: "english (8th class)", poster: "", link: "" },
    { title: "english (9th class)", poster: "", link: "" },
    { title: "english (10th class)", poster: "", link: "" },
    { title: "english (11th class)", poster: "", link: "" },
    { title: "english (12th class)", poster: "", link: "" },
    { title: "science (8th class)", poster: "", link: "" },
    { title: "science (9th class)", poster: "", link: "" },
    { title: "science (10th class)", poster: "", link: "" },
    { title: "science (11th class)", poster: "", link: "" },
    { title: "science (12th class)", poster: "", link: "" },
    { title: "social science (8th class)", poster: "", link: "" },
    { title: "social science (9th class)", poster: "", link: "" },
    { title: "social science (10th class)", poster: "", link: "" },
    { title: "hindi (8th class)", poster: "", link: "" },
    { title: "hindi (9th class)", poster: "", link: "" },
    { title: "Physics (11th class)", poster: "", link: "" },
    { title: "Physics (12th class)", poster: "", link: "" },
    { title: "Chemistry (11th class)", poster: "", link: "" },
    { title: "Chemistry (12th class)", poster: "", link: "" },
    { title: "Biology (11th class)", poster: "", link: "" },
    { title: "Biology (12th class)", poster: "", link: "" },
    { title: "Computer Science (10th class)", poster: "", link: "" },
    { title: "Computer Science (11th class)", poster: "", link: "" },
    { title: "Computer Science (12th class)", poster: "", link: "" },
    { title: "Accountancy (10th class)", poster: "", link: "" },
    { title: "Accountancy (11th class)", poster: "", link: "" },
    { title: "Accountancy (12th class)", poster: "", link: "" },
    { title: "Business Studies (10th class)", poster: "", link: "" },
    { title: "Business Studies (11th class)", poster: "", link: "" },
    { title: "Business Studies (12th class)", poster: "", link: "" },
    { title: "Economics (10th class)", poster: "", link: "" },
    { title: "Economics (11th class)", poster: "", link: "" },
    { title: "Economics (12th class)", poster: "", link: "" },
    {
      title: "Mathematics/Informatics Practices (10th class)",
      poster: "",
      link: "",
    },
    {
      title: "Mathematics/Informatics Practices (11th class)",
      poster: "",
      link: "",
    },
    {
      title: "Mathematics/Informatics Practices (12th class)",
      poster: "",
      link: "",
    },
  ];
  return (
    <div className="">
      <div className="row">
        <div className="p-5 text-center bg-white">
          <h2 className="text-capitalize text-primary mb-5">all subjects</h2>
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
            <img className="col-lg-12" src={src} alt="" />
            <h4 className="text-uppercase">{props?.title}</h4>
            <span className="badge mx-2 rounded-pill bg-success">हिन्दी</span>
            <span className="badge rounded-pill bg-success">english</span>
            <div className="my-4">
              <span className="badge bg-primary">CBSE</span>
              <span className="badge mx-2 bg-info">BSEB</span>
              <span className="badge bg-danger">PSEB</span>
              <span className="badge mx-2 bg-warning">OTHER</span>
            </div>
            <a className="badge border-warning border-1 d-flex justify-flex-end align-items-center text-primary" href="">
              Explore Now <i className="bi bi-arrow-right mx-1 fs-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
