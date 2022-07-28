import React, { useEffect, useState } from "react";
import { getStorage } from "../../../utils/utils";
import { facultyProfile, upload, postMaterial } from "../../../utils/services";
export default function Create() {
  const [ob, setob] = useState({
    board: "",
    medium: "",
    className: "",
    subject: "",
    topic: "",
    title: "",
    comments: "",
    remarks: "",
    tags: "",
    createdBy: getStorage("fid"),
  });
  const [m, setm] = useState({
    topic: "",
    title: "",
    comments: "",
    remarks: "",
    tags: "",
    url: "",
    poster: "",
  });
  const insert = () => {
    postMaterial(m);
  };
  const boot = () => {
    facultyProfile()
      .then((d) => setob(d))
      .catch((e) => console.warn(e));
  };
  const hic = (e) => {
    const { placeholder, value } = e.target;
    setm({ ...m, [placeholder]: value });
  };
  const hfc = (e) => {
    const { target } = e;
    const { placeholder } = target;
    upload(target).then((d) => {
      if (d?.url) {
        setm({ ...m, [placeholder]: d?.url });
      }
    });
  };
  useEffect(boot, []);
  return (
    <>
      <div class="modal fade" id="newModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title">Add new Material</h3>
            </div>
            <div class="modal-body">
              <div>
                <input
                  className="form-control input-sm mb-2"
                  placeholder="topic"
                  onChange={hic}
                />
                <input
                  className="form-control input-sm mb-2"
                  placeholder="title"
                  onChange={hic}
                />
                <input
                  className="form-control input-sm mb-2"
                  placeholder="comments"
                  onChange={hic}
                />
                <input
                  className="form-control input-sm mb-2"
                  placeholder="remarks"
                  onChange={hic}
                />
                <input
                  className="form-control input-sm mb-2"
                  placeholder="tags"
                  onChange={hic}
                />
                <input
                  className="form-control input-sm mb-2"
                  type="file"
                  placeholder="url"
                  onChange={hfc}
                />
                <input
                  className="form-control input-sm mb-2"
                  type="file"
                  placeholder="poster"
                  onChange={hfc}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button onClick={insert} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
