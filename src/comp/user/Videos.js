import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { videos } from "../../utils/user.service";
import { useSelector } from "react-redux";

export default function Videos() {
  const userClickedSubject = useSelector((s) => s.userClickedSubject);
  const [a, seta] = useState([]);
  const boot = () => {
    videos().then((d) => seta(d.map((x) => ({ ...x, playerIndex: false }))));
  };

  useEffect(boot, [window.location.search]);
  let rows = a;
  const cols = a?.length ? Object.keys(a[0]) : [];
  const onPlay = (i) => {
    seta(
      a.map((x, index) =>
        index === i ? { ...x, playerIndex: true } : { ...x, playerIndex: false }
      )
    );
  };
  return (
    <div>
      <Grid
        hidden={["poster"]}
        asVideo="url"
        rows={rows}
        cols={cols}
        title="My videos"
        onPlay={onPlay}
      />
    </div>
  );
}
