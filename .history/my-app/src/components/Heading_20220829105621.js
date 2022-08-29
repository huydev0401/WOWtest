import React from "react";

const Heading = ({ children = "8 LÝ DO ĐỂ CHỌN", text = "ACTIONCOACH" }) => {
  return (
    <>
      <h1 className="text-center font-bold text-[64px] text-primary mb-[60px]">
        {children} <span className="!text-secondary">{text}</span>
      </h1>
    </>
  );
};

export default Heading;
