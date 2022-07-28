import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { material } from "../../utils/user.service";
export default function Material() {
  const [a, seta] = useState([]);
  const boot = () => {
    material().then((d) => {
      seta(d);
    });
  };

  useEffect(boot, []);
  const rows = a;
  const cols = a?.length ? Object.keys(a[0]) : [];
  return (
    <div>
      <Grid rows={rows} cols={cols} title="My Material" />
    </div>
  );
}
