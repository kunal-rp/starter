import React from "react";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";

import { HEADERS } from "./constants.jsx";

export default function App(props) {
  const router = createBrowserRouter([
    { path: "/home", element: <Home text={"standalone"} /> },
    {
      path: "/",
      element: <Layout />,
      children: [].concat(
        HEADERS.map((header) => {
          return { path: "/" + header, element: <Home text={header} /> };
        }),
      ),
    },
  ]);

  return (
    <RecoilRoot>
      <div className="w-screen h-screen bg-white">
        <RouterProvider router={router} />
      </div>
    </RecoilRoot>
  );
}
