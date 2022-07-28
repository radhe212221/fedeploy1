import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { subject } from "../../utils/user.service";
export default function Subject() {
  const [a, seta] = useState([]);
  const boot = () => {
    subject().then((d) => {
      seta(d);
    });
  };

  useEffect(boot, []);
  const rows = a;
  const cols = a?.length ? Object.keys(a[0]) : [];
  return (
    <div>
      <Grid links={["url"]} rows={rows} cols={cols} title="My subject" />
    </div>
  );
}
