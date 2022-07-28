import { getAllUpload } from "../../../utils/services";
import React, { useEffect, useState } from "react";
import moment from "moment";
export default function View() {
  const [editable, seteditable] = useState(false);
  const [a, seta] = useState([]);
  const formatSize = (x) => {
    let s = (x / 1024).toFixed(2);
    return s + " KB";
  };
  const hbc = (col, id, val, e) => {
    const k = col;
    const v = val;
    const newVal = e.target.innerHTML || "";
    // if (newVal && newVal !== v) {
    //   console.log(newVal);
    // }
    // patchToc({ id, k, v });
  };
  const boot = () => {
    getAllUpload().then((d) => seta(d));
  };
  const del = (id) => {
    // deleteToc(id);
  };
  useEffect(boot, []);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">All Uploads ({a.length})</h3>
              <button
                data-bs-toggle="modal"
                data-bs-target="#newModal"
                className="btn btn-primary"
              >
                <i className="bi bi-plus"></i>
              </button>
              <button
                onClick={() => seteditable(!editable)}
                className="btn btn-warning"
              >
                <i className="bi bi-pencil"></i>
              </button>
              <table className="table table-striped table-condensed datatable ">
                <thead>
                  <tr>
                    <th>sno</th>
                    <th>url</th>
                    <th>size</th>
                    <th>createdAt</th>
                    <th>status</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {a.map((x, i) => (
                    <tr
                      key={i}
                      contentEditable={editable}
                      className={editable ? "table-warning" : ""}
                    >
                      <td>{i + 1}</td>
                      <td
                        onChange={(e) =>
                          editable && hbc("url", x._id, x.url, e)
                        }
                      >
                        {x.url ? (
                          <a
                            className="btn btn-sm btn-primary"
                            target="_blank"
                            href={x.url}
                          >
                            <i className="bi bi-eye"></i>
                          </a>
                        ) : (
                          <button>add view</button>
                        )}
                      </td>
                      <td>{formatSize(x.size)} </td>
                      <td>
                        <i className="text-xs bi bi-clock"></i>{" "}
                        {moment(x.createdAt).toNow()}
                      </td>
                      <td>
                        {x.status ? (
                          <span className="badge bg-success">Active</span>
                        ) : (
                          <span className="badge bg-danger">InActive</span>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => del(x._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
