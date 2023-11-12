import { atom } from "recoil";

import { HEADERS } from "../constants.jsx";

export const projectIdState = atom({
  key: "project_id_state",
  default: null,
});

export const headerState = atom({
  key: "header_state", // unique ID (with respect to other atoms/selectors)
  default: HEADERS[0],
});
