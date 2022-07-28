import React, { useState } from "react";
import moment from "moment";
import VideoPlayer from "../common/VideoPlayer";
// import DocViewer from "react-doc-viewer";
// import { DocViewerRenderers } from "react-doc-viewer";

export default function Grid({
  dates = ["createdAt", "modifiedOn"],
  links = [],
  title,
  rows,
  cols,
  hidden = [],
  asVideo = "",
  currentTime = 0,
  onPlay = () => {},
}) {
  const handlePlay = (e) => {
    console.log(e);
  };
  const [_doc, set_doc] = useState(null);
  const images = ["image", "poster", "preview"];
  const formatDate = (val) => {
    return moment(val).toNow();
  };
  const handleDocClick = (doc) => {
    set_doc({ uri: decodeURI(doc) });
    console.log(doc);
  };
  const format = (k, v, _row, index) => {
    if (asVideo) {
      if (k === asVideo) {
        return (
          <VideoPlayer
            currentTime={currentTime}
            poster={_row["poster"]}
            src={v}
            canPlay={_row.playerIndex}
            onPlay={() => onPlay(index)}
          />
        );
      }
    }
    if (dates.includes(k)) return formatDate(v);
    if (links.includes(k))
      return (
        <div
          className="text-warning"
          onClick={() => handleDocClick(v)}
          data-bs-target="#docViewer"
          data-bs-toggle="modal"
          href={v}
        >
          <i className="bi-file-earmark-ppt-fill"></i>
        </div>
      );
    if (k === "status")
      return (
        <span
          className={`badge rounded-pill ${v ? "bg-success" : "bg-danger"}`}
        >
          {v ? "active" : "inactive"}
        </span>
      );
    if (images.includes(k))
      return (
        <img
          className="rounded-pill"
          width={20}
          src={v || "/assets/img/avatar.png"}
          alt={v || "profile"}
        />
      );

    return v;
  };
  cols = cols.filter((x) => x !== "_id").filter((x) => x !== "__v");
  if (hidden.length) {
    cols = cols.filter((x) => !hidden.includes(x));
  }
  if (!rows.length || !cols.length)
    return (
      <div className="col-lg-12">
        <div className="card p-3 px-4">
          <div className="card-title">
            <h4>{title}</h4>
          </div>
          <div className="card-body">
            <div
              className="alert alert-primary bg-primary text-light border-0 alert-dismissible fade show"
              role="alert"
            >
              Nothing found for {title} in our system
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <>
      <div className="col-lg-12">
        <div className="card p-2">
          <div className="card-title">
            <h4>{title}</h4>
          </div>
          <div className="card-body">
            <div className="overflow-auto">
              <table className="table table-hover">
                <thead>
                  <tr>
                    {cols?.map((x) => (
                      <th key={x}>{x}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows?.map((x, i) => (
                    <tr key={Date.now + i}>
                      {cols?.map((y) => (
                        <td key={y + i + x.toString()}>
                          {format(y, x[y], x, i)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="docViewer">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Document Viewer</h4>
            </div>
            <div className="modal-body">
              {/* <DocViewer
                documents={[_doc]}
                config={{
                  header: {
                    disableHeader: false,
                    disableFileName: false,
                    retainURLParams: false,
                  },
                }}
                pluginRenderers={DocViewerRenderers}
              /> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
