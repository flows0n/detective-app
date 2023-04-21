import { createBrowserRouter } from "react-router-dom";
import ChooseView from "./views/ChooseView";
import React from "react";
import RiddleView from "./views/RiddleView";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ChooseView />,
  },
  {
    path: "/:id",
    element: <RiddleView />,
  },
]);

export default routes;
