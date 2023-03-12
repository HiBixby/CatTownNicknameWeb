import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Color from "./routes/Color";
import Prefix from "./routes/Prefix";
import { Provider } from "react-redux";
import store from "./store/config";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "color",
    element: <Color />,
  },
  {
    path: "prefix",
    element: <Prefix />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
