import React from "react";
import Box from "./Box";
import GridBox from "./GridBox";

const Heading = ({ children = "8 LÝ DO ĐỂ CHỌN", text = "ACTIONCOACH" }) => {
  return (
    <>
      <h1 className="text-center font-bold text-[64px] text-primary mb-[60px]">
        {children} <span className="!text-secondary">{text}</span>
      </h1>
      <GridBox>
        {Array(8)
          .fill(0)
          .map((item) => (
            <Box></Box>
          ))}
      </GridBox>
    </>
  );
};

export default Heading;
