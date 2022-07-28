import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { faculty } from "../../utils/user.service";
export default function Faculty() {
  const [a, seta] = useState([]);
  const boot = () => {
    faculty().then((d) => {
      seta(d);
    });
  };
  const hidden = ["_id", "__v"];
  const dates = ["createdAt"];
  useEffect(boot, []);
  const cols = a.length ? Object.keys(a[0]) : [];
  return (
    <div>
      <Grid
        dates={dates}
        hidden={hidden}
        rows={a}
        cols={cols}
        title="My Course Faculty"
      />
    </div>
  );
}
