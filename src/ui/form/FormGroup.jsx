import React, { memo } from "react";

const FormGroup = ({ label, children }) => {
  return (
    <div className="flex flex-col w-full space-y-2">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default memo(FormGroup);
