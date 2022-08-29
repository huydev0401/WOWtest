import React from "react";

const GridBox = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-[30px] gap-y-[40px]">
      {children}
    </div>
  );
};

export default GridBox;
