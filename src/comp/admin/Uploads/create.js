import React, { useEffect, useState } from "react";
import { upload, getTocFilters, postToc } from "../../../utils/services";
export default function Create() {
  const [ob, setob] = useState({
    board: "",
    medium: "",
    className: "",
    subject: "",
    topic: "",
    url: "",
    poster: "",
    preview: "",
  });

  const [board, setboard] = useState([]);
  const [medium, setmedium] = useState([]);
  const [className, setclassName] = useState([]);
  const [subject, setsubject] = useState([]);
  const [topic, settopic] = useState([]);
  const hc = (e) => {
    const { placeholder, value } = e.target;
    setob({ ...ob, [placeholder]: value });
  };
  const hfc = (e) => {
    const name = e.target.placeholder;
    upload(e.target)
      .then((d) => {
        setob({ ...ob, [name]: d?.url });
      })
      .catch((e) => console.log("err", e));
  };
  const insert = () => {
    postToc(ob)
      .then((ds) => console.log(ds))
      .catch((e) => console.log("err", e));
  };
  const boot = () => {
    getTocFilters(ob)
      .then((d) => {
        // console.log("data", d);
        setboard(d);
      })
      .catch((e) => console.log("err"));
  };
  useEffect(boot, []);
  return (
    <>
      <div className="modal fade" id="newModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Video</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* form here starts */}
              <div>
                <input className="form-control input-sm mb-2"
                  list="bl"
                  placeholder="board"
                  value={ob.board}
                  onChange={hc}
                />
                <input className="form-control input-sm mb-2"
                  list="ml"
                  placeholder="medium"
                  value={ob.medium}
                  onChange={hc}
                />
                <input className="form-control input-sm mb-2"
                  list="cl"
                  placeholder="className"
                  value={ob.className}
                  onChange={hc}
                />
                <input className="form-control input-sm mb-2"
                  list="sl"
                  placeholder="subject"
                  value={ob.subject}
                  onChange={hc}
                />
                <input className="form-control input-sm mb-2"
                  list="tl"
                  placeholder="topic"
                  value={ob.topic}
                  onChange={hc}
                />
                <input className="form-control input-sm mb-2" type="file" placeholder="url" onChange={hfc} />
                <input className="form-control input-sm mb-2" type="file" placeholder="poster" onChange={hfc} />
                <input className="form-control input-sm mb-2" type="file" placeholder="preview" onChange={hfc} />

                {(ob.url || ob.poster || ob.preview) && (
                  <div className="preview">
                    <h1>view preivew</h1>
                    <img alt="poster" src={ob.poster} width={100} />
                    {ob.url && (
                      <video controls muted src={ob.url} width={300} />
                    )}
                    {ob.preview && (
                      <video controls muted src={ob.preview} width={300} />
                    )}
                  </div>
                )}
                <datalist id="bl">
                  <option value="">select a option</option>
                  {board.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </datalist>
                <datalist id="ml">
                  <option value="">select a option</option>
                  {medium.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </datalist>
                <datalist id="sl">
                  <option value="">select a option</option>
                  {subject.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </datalist>
                <datalist id="tl">
                  {topic.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </datalist>
              </div>
              {/* form here ends */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={insert}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
