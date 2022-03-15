import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/routes/AppRouter";
import { basename } from "@/routes/basename";
import "@/styles/main.sass";

export const App: FC = () => {
  return (
    <BrowserRouter basename={basename}>
      <AppRouter />
    </BrowserRouter>
  );
};
