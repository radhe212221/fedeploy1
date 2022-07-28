import React, { useEffect, useState } from "react";
import { getAllMaterial } from "../../../utils/services";
import moment from "moment";
export default function View() {
  const [a, seta] = useState([]);

  const boot = () => {
    getAllMaterial().then((d) => seta(d));
  };
  useEffect(boot, []);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-title"></div>
            <div className="card-body">
              <h3>All Material {a.length}</h3>
              <div className="overflow-auto">
                <table class="table table-sm table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>board</th>
                      <th>medium</th>
                      <th>className</th>
                      <th>subject</th>
                      <th>topic</th>
                      {/* <th>title</th>
                      <th>comments</th>
                      <th>remarks</th> */}
                      <th>tags</th>
                      <th>createdBy</th>
                      <th>url</th>
                      <th>poster</th>
                      {/* <th>preview</th> */}
                      <th>author</th>
                      <th>status</th>
                      <th>createdAt</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {a.map((x, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{x.board}</td>
                        <td>{x.medium}</td>
                        <td>{x.className}</td>
                        <td>{x.subject}</td>
                        <td>{x.topic}</td>
                        {/* <td>{x.title}</td>
                        <td>{x.comments}</td>
                        <td>{x.remarks}</td> */}
                        <td>{x.tags}</td>
                        <td>{x.createdBy}</td>
                        <td>
                          <a href={x.url} class="btn btn-sm btn-primary">
                            <i className="bi bi-eye"></i>
                          </a>
                        </td>
                        <td>
                          <img width={30} src={x.poster} alt="" />
                        </td>
                        {/* <td>{x.preview}</td> */}
                        <td>{x.author}</td>
                        <td>
                          {x.status ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-danger">InActive</span>
                          )}
                        </td>
                        <td>
                          <i className="text-xs bi bi-clock"></i>{" "}
                          {moment(x.createdAt).toNow()}
                        </td>

                        <td>{x.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
