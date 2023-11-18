import { atom } from "recoil";

import { HEADERS, PROJECTS } from "../constants.jsx";

export const projectIdState = atom({
  key: "project_id_state",
  default: PROJECTS[0].id,
});

export const projectModalityState = atom({
  key: "project_modality_state",
  default: false,
});

export const headerState = atom({
  key: "header_state", // unique ID (with respect to other atoms/selectors)
  default: HEADERS[0],
});
