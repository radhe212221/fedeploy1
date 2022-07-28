import axios from "axios";
import { getStorage, setStorage } from "./utils";
export const instance = axios.create({
  baseURL: "https://b-demo-july-22.herokuapp.com",
});

instance.defaults.headers["Authorization"] = "bearer X-AUTH-TOKEN";


export const upload = async (tag) => {
  const fd = new FormData();
  fd.append("file", tag.files[0]);
  let resp = await instance
    .post("/upload", fd)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const getTocFilters = async (payload) => {
  const { board, className, medium, subject, topic } = payload;
  const url = `/toc/filters?board=${board || ""}&medium=${
    medium || ""
  }&className=${className || ""}&subject=${subject || ""}&topic=${topic || ""}`;
  let resp = await instance
    .get(url)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};

export const getToc = async (payload) => {
  let resp = await instance
    .get("/toc")
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const postToc = async (payload) => {
  let resp = await instance
    .post("/toc", payload)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const patchToc = async (payload) => {
  let resp = await instance
    .patch("/toc", payload)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const deleteToc = async (payload) => {
  let resp = await instance
    .delete("/toc/" + payload)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};

// faculty specfic
export const facultyProfile = async () => {
  let id = getStorage("fid");
  let resp = await instance
    .get("/faculty/" + id)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const getMaterial = async () => {
  const fid = getStorage("fid");
  let resp = await instance
    .get("/material/faculty/" + fid)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const postMaterial = async (payload) => {
  const fid = getStorage("fid");
  let resp = await instance
    .post("/material/" + fid, payload)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};

// admin
export const getAllFaculty = async () => {
  let resp = await instance
    .get("/admin/faculty")
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const getAllMaterial = async () => {
  let resp = await instance
    .get("/admin/material")
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const getAllUpload = async () => {
  let resp = await instance
    .get("/admin/upload")
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
export const getAllToc = async () => {
  let resp = await instance
    .get("/admin/Toc")
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : null))
    .catch((e) => null);
  return resp;
};
// users
export const signup = async (payload, step) => {
  let resp = await instance
    .post("/user/signup/" + step, payload)
    .then((d) => d.data)
    .then((d) => {
      if (d?.status) {
        setStorage("uid", d?.data?._id);
        setStorage("userData", d.data, true);
        setStorage("accessToken", d?.data?.accessToken);
        setStorage("refreshToken", d?.data?.refreshToken);
        setStorage("salt", d?.data?.salt);
      }
      return d.status ? d.data : null;
    })
    .catch((e) => null);
  return resp;
};
//sendOtp
export const sendOtp = async ({ token, uid, phone, purpose }) => {
  let resp = await instance
    .post("/user/login/", { token, uid, phone, purpose })
    .then((d) => d.data)
    .then((d) => {
      return d.status ? d.data : null;
    })
    .catch((e) => null);
  return resp;
};
export const verifyUser = async (payload) => {
  let resp = await instance
    .post("/user/verify/", payload)
    .then((d) => d.data)
    .then((d) => {
      return d.status ? d.data : null;
    })
    .catch((e) => null);
  return resp;
};
