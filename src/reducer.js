import { getStorage } from "./utils/utils";
const role = "user";
// const role = "admin";
// const role = "faculty";
// const role = "amplitude";
const intialState = {
  role: role,
  sideBarToggle: false,
  user: getStorage("userData", true),
  loggedin: true,
  userClickedSubject: "",
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case "sideBarToggle":
      return { ...state, sideBarToggle: !state.sideBarToggle };
    case "sidebar-open":
      return { ...state, sideBarToggle: action.payload };

    default:
      return state;
  }
}
export default reducer;
