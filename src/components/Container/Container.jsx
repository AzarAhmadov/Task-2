import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex justify-center max-w-[400px] mx-auto items-center h-screen flex-col">
      {children}
    </div>
  );
};

export default Container;
