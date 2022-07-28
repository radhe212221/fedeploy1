import { instance as axios } from "./services";
import { getStorage } from "./utils";
const PREFIX = "RTS";
export const _userType = () => {
  const uid = getStorage("userData", true)?._id || "";
  return !!uid;
};
export const getToken = () => {
  const uid = getStorage("userData", true)?._id || "";
  return uid;
};
export const guestHeaders = (payload) => {
  const {
    actionDate = Date.now(),
    resourceID,
    resourceType,
    component,
    page,
    event,
    key,
    value,
  } = payload;
  const headers = {
    headers: {
      page: `${page}`,
      event: `${event}`,
      key: `${key}`,
      value: `${value}`,
      actionDate: `${actionDate}`,
      resourceID: `${resourceID}`,
      resourceType: `${resourceType}`,
      component: `${component}`,
    },
  };
  return headers;
};
export const userHeaders = (payload) => {
  const {
    actionDate = Date.now(),
    resourceID,
    resourceType,
    component,
    page,
    event,
    key,
    value,
  } = payload;
  const token = getStorage("accessToken");
  const uid = getStorage("userData", true)?._id || "";
  const salt = getStorage("userData", true)?.salt || "";
  const accessToken = getStorage("userData", true)?.accessToken || "";
  const refreshToken = getStorage("userData", true)?.refreshToken || "";
  const headers = {
    headers: {
      token: `x-provider ${token}`,
      salt: `x-auth-provider ${salt}`,
      accessToken: `my-auth-provider ${accessToken}`,
      refreshToken: `x-bearer ${refreshToken}`,
      user: `bearer ${uid}`,
      page: `${page}`,
      event: `${event}`,
      key: `${key}`,
      value: `${value}`,
      actionDate: `${actionDate}`,
      resourceID: `${resourceID}`,
      resourceType: `${resourceType}`,
      component: `${component}`,
    },
  };
  return headers;
};
export const logAmplitude = (payload) => {
  const userType = _userType();
  const headers = userType ? userHeaders(payload) : guestHeaders(payload);
  axios.get(`/events/${userType ? "user" : "guest"}`, headers);
};

export const getLogs = async (user = false) => {
  const data = await axios
    .get(`/events/logs/${user ? "user" : "guest"}`)
    .then((d) => d.data)
    .then((d) => (d.status ? d.data : []))
    .catch((e) => []);
  return data;
};
