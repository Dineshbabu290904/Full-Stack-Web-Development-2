import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./routes/Home";
import Report from "./routes/Report";
import Student from "./routes/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
