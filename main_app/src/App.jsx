import React from "react";
import { RecoilRoot } from "recoil";

import Home from "./components/Home.jsx";

export default function App(props) {
  return (
    <RecoilRoot>
      <div className="w-screen h-screen bg-white">
        <Home />
      </div>
    </RecoilRoot>
  );
}
