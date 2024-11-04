import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import Explore from "./components/Explore/Explore";
import Phones from "./components/Explore/Phones";
import All from "./components/Explore/All";
import Accessories from "./components/Explore/Accessories";
import Iphones from "./components/Explore/Iphones";
import Laptops from "./components/Explore/Laptops";
import Macbook from "./components/Explore/Macbook";
import Smartwatches from "./components/Explore/Smartwatches";
import Details from "./components/Details/Details";
import Frame from "./components/Explore/Frame";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Explore></Explore>,
        children: [
          {
            path: "/",
            element: <Frame></Frame>,
            children: [
              {
                path: "/",
                element: <All></All>,
              },
              {
                path: "phones",
                element: <Phones></Phones>,
              },
              {
                path: "accessories",
                element: <Accessories></Accessories>,
              },
              {
                path: "iphones",
                element: <Iphones></Iphones>,
              },
              {
                path: "laptops",
                element: <Laptops></Laptops>,
              },
              {
                path: "macbooks",
                element: <Macbook></Macbook>,
              },
              {
                path: "smartwatches",
                element: <Smartwatches></Smartwatches>,
              },
            ],
          },

          {
            path: "product/:id",
            element: <Details></Details>,
          },
          {
            path: "phones/product/:id",
            element: <Details></Details>,
          },
          {
            path: "accessories/product/:id",
            element: <Details></Details>,
          },
          {
            path: "iphones/product/:id",
            element: <Details></Details>,
          },
          {
            path: "laptops/product/:id",
            element: <Details></Details>,
          },
          {
            path: "macbooks/product/:id",
            element: <Details></Details>,
          },
          {
            path: "smartwatches/product/:id",
            element: <Details></Details>,
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
