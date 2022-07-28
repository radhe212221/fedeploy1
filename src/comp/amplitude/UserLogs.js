import React, { useEffect, useState } from "react";
import { getLogs } from "../../utils/socket.service";
import Grid from "../user/Grid";
import moment from "moment";

export default function UserLogs() {
  const [a, seta] = useState([]);

  const boot = () => {
    getLogs("user")
      .then((d) =>
        d.map((y) => {
          let x = y.split(",");
          return {
            page: x[0],
            event: x[1],
            key: x[2],
            value: x[3],
            actiondate: moment(+x[4]).toNow(),
            resourceid: x[5],
            resourcetype: x[6],
            component: x[7],
            createdOnTime: moment(+x[8]).toNow(),
            playerIndex: false,
          };
        })
      )
      .then((d) => {
        seta(d);
      });
  };
  useEffect(boot, []);
  const rows = a;
  const cols = rows.length ? Object.keys(rows[0]) : [];
  const onPlay = (index) => {
    seta(
      a.map((x, i) =>
        i === index ? { ...x, playerIndex: true } : { ...x, playerIndex: false }
      )
    );
  };
  return (
    <div>
      <Grid
        onPlay={onPlay}
        asVideo="resourceid"
        currentTime="value"
        rows={rows}
        cols={cols}
      />
    </div>
  );
}
