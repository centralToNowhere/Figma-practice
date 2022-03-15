import React, { FC } from "react";
import { Header } from "@/components/Header/Header";

export const Homepage: FC = () => {
  return (
    <>
      <Header noLogo={true} />
      <div>Homepage</div>
    </>
  );
};
