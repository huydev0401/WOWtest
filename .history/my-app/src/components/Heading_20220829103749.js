import React from "react";

const Heading = ({ children = "8 LÝ DO ĐỂ CHỌN ACTIONCOACH" }) => {
  return (
    <h1 className="text-center font-bold text-[64px] text-primary">
      {children}
    </h1>
  );
};

export default Heading;
