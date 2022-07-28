import { instance as axios } from "./services";
import { getStorage } from "./utils";
const getHeaders = () => {
  return {
    headers: {
      Authorization: `bearer ${getStorage("accessToken")}`,
    },
  };
};
export const faculty = async () => {
  const headers = getHeaders();
  const data = await axios
    .get("/user/faculty", headers)
    .then((d) => d.data)
    .then((d) => (d?.status ? d?.data : []))
    .catch((e) => []);
  return data;
};
export const material = async () => {
  const headers = getHeaders();
  const data = await axios
    .get("/user/material", headers)
    .then((d) => d.data)
    .then((d) => (d?.status ? d?.data : []))
    .catch((e) => []);
  return data;
};
export const subject = async () => {
  const headers = getHeaders();
  const data = await axios
    .get("/user/subject", headers)
    .then((d) => d.data)
    .then((d) => (d?.status ? d?.data : []))
    .catch((e) => []);
  return data;
};
export const videos = async () => {
  const headers = getHeaders();
  const data = await axios
    .get("/user/videos", headers)
    .then((d) => d.data)
    .then((d) => (d?.status ? d?.data : []))
    .catch((e) => []);
  return data;
};
export const videosForThisSubject = async (subject) => {
  const headers = getHeaders();
  const data = await axios
    .get("/user/videos?subject=" + subject, headers)
    .then((d) => d.data)
    .then((d) => (d?.status ? d?.data : []))
    .catch((e) => []);
  return data;
};

export const mysubjects = async () => {
  const headers = getHeaders();
  const data = await axios
    .get("/user/my-subjects", headers)
    .then((d) => d.data)
    .then((d) => (d?.status ? d?.data : []))
    .catch((e) => []);
  return data;
};
