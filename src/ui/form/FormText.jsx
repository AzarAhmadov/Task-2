import React, { memo } from "react";

const FormText = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className="p-2 text-black border rounded-md"
      type={type}
      required={true}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default memo(FormText);
