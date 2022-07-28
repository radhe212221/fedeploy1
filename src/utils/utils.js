import { useEffect, useState } from "react";

export const getStorage = (k, p = false) => {
  let data = localStorage.getItem(k);
  if (p) {
    data = JSON.parse(data);
  }
  return data;
};

export const setStorage = (k, v, p = false) => {
  if (p) {
    v = JSON.stringify(v);
  }
  localStorage.setItem(k, v);
};

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  const abc = () => {
    setwidth(window.innerWidth);
    setIsMobile(window.innerWidth <= 900);
  };
  const boot = () => {
    // window.addEventListener("load", abc);
    // window.addEventListener("ready", abc);
    // window.addEventListener("resize", abc);
  };
  useEffect(boot, [document, window]);
  useEffect(abc, [document, window]);
  return [isMobile, width];
};
