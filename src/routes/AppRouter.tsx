import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { routeNames } from "@/routes/routeNames";
import { Homepage } from "@/screens/Homepage/Homepage";
import { About } from "@/screens/About/About";
import { Expertise } from "@/screens/Expertise/Expertise";
import { Contact } from "@/screens/Contact/Contact";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={routeNames.homepage} element={<Homepage />} />
      <Route path={routeNames.about} element={<About />} />
      <Route path={routeNames.expertise} element={<Expertise />} />
      <Route path={routeNames.contact} element={<Contact />} />
    </Routes>
  );
};
