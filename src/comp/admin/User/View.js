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
              <h3>All Material ?</h3>
              <div className="overflow-auto">
                <table class="table table-sm table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>email</th>
                      <th>phone</th>
                      <th>password</th>
                      <th>board</th>
                      <th>medium</th>
                      <th>className</th>
                      <th>subject</th>
                      <th>topic</th>
                      <th>tags</th>
                      <th>nickname</th>
                      <th>image</th>
                      <th>url</th>
                      <th>createdAt</th>
                      <th>status</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {a.map((x, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.phone}</td>
                        <td>{x.password}</td>
                        <td>{x.board}</td>
                        <td>{x.medium}</td>
                        <td>{x.className}</td>
                        <td>{x.subject}</td>
                        <td>{x.topic}</td>
                        <td>{x.tags}</td>
                        <td>{x.nickname}</td>
                        <td>{x.image}</td>
                        <td>{x.url}</td>
                        <td>{x.createdAt}</td>
                        <td>
                          {x.status ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-danger">InActive</span>
                          )}
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
