import React, { useEffect, useState } from "react";
import { getAllToc } from "../../utils/services";
import Carousel from "../common/Carousel";
export default function Courses() {
  const [a, seta] = useState([]);

  const boot = () => {
    getAllToc().then((d) => seta(d));
  };
  useEffect(boot, []);
  return (
    <div>
      <section>
        <div className="row">
          <div className="col-lg-12">
            <div className="card text-center">
              <div className="card-title">
                <h3 align="center">Courses ({a.length})</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <Carousel slidesToShow={4}>
                    {a.map((x) => (
                      <Card key={x?._id} {...x} />
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Card = ({ poster, author, topic }) => {
  return (
    <div className="col-lg-12 ">
      <div className="col-lg-10">
        <div className="card">
          <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
            <img src={poster} alt="Profile" className="img img-responsive" />
            <h2>{author}</h2>
            <h3>{topic}</h3>
            <div className="social-links mt-2">
              <a className="mx-2 twitter">
                <i className="bi bi-twitter" />
              </a>
              <a className="mx-2 facebook">
                <i className="bi bi-facebook" />
              </a>
              <a className="mx-2 instagram">
                <i className="bi bi-instagram" />
              </a>
              <a className="mx-2 linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
