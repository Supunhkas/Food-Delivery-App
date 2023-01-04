import React from "react";

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12  ${
        flag ? "overflow-x-scroll" : "overflow-hidden"
      }`}
    >
      <div className="w-full h-20 bg-blue-400 md:w-350 shadow-md backdrop-blur-lg">
        {" "}
      </div>
    </div>
  );
};

export default RowContainer;
