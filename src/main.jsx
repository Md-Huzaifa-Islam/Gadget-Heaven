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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Frame from "./components/Explore/Frame";
import ErrorPage from "./components/Errorpage/Errorpage";
import History from "./components/History/History";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Explore></Explore>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/",
            element: <Frame></Frame>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
              {
                path: "/",
                element: <All></All>,
                errorElement: <ErrorPage></ErrorPage>,
              },
              {
                path: "/all",
                element: <All></All>,
                errorElement: <ErrorPage></ErrorPage>,
              },
              {
                path: "phones",
                element: <Phones></Phones>,
                errorElement: <ErrorPage></ErrorPage>,
              },
              {
                path: "accessories",
                element: <Accessories></Accessories>,
                errorElement: <ErrorPage></ErrorPage>,
              },
              {
                path: "iphones",
                errorElement: <ErrorPage></ErrorPage>,
                element: <Iphones></Iphones>,
              },
              {
                path: "laptops",
                element: <Laptops></Laptops>,
                errorElement: <ErrorPage></ErrorPage>,
              },
              {
                path: "macbooks",
                element: <Macbook></Macbook>,
                errorElement: <ErrorPage></ErrorPage>,
              },
              {
                path: "smartwatches",
                element: <Smartwatches></Smartwatches>,
                errorElement: <ErrorPage></ErrorPage>,
              },
            ],
          },

          {
            path: "product/:id",
            element: <Details></Details>,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "all/product/:id",
            element: <Details></Details>,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "phones/product/:id",
            element: <Details></Details>,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "accessories/product/:id",
            element: <Details></Details>,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "iphones/product/:id",
            element: <Details></Details>,
          },
          {
            path: "laptops/product/:id",
            element: <Details></Details>,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "macbooks/product/:id",
            element: <Details></Details>,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "smartwatches/product/:id",
            element: <Details></Details>,
            errorElement: <ErrorPage></ErrorPage>,
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "history",
        element: <History></History>,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>,
);
