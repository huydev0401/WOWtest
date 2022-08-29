import React from "react";
import GridBox from "./GridBox";

const Heading = ({ children = "8 LÝ DO ĐỂ CHỌN", text = "ACTIONCOACH" }) => {
  return (
    <>
      <h1 className="text-center font-bold text-[64px] text-primary">
        {children} <span className="!text-secondary">{text}</span>
      </h1>
      <GridBox></GridBox>
    </>
  );
};

export default Heading;
