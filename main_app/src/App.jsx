import React from "react";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import ProductDashBoard from "./components/ProductDashBoard.jsx";
import MaterialsDashBoard from "./components/MaterialsDashBoard.jsx";
import LogisticsDashBoard from "./components/LogisticsDashBoard.jsx";

import { HEADERS } from "./constants.jsx";

export default function App(props) {
  const HEADER_COMPONENT_MAP = {
    product: <ProductDashBoard />,
    material: <MaterialsDashBoard />,
    logistics: <LogisticsDashBoard />,
  };

  const router = createBrowserRouter([
    { path: "/home", element: <Home text={"standalone"} /> },
    {
      path: "/",
      element: <Layout />,
      children: [].concat(
        HEADERS.map((header) => {
          return {
            path: "/" + header,
            element: HEADER_COMPONENT_MAP.hasOwnProperty(header) ? (
              HEADER_COMPONENT_MAP[header]
            ) : (
              <Home text={header} />
            ),
          };
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
