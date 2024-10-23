import React from "react";

const Button = ({ type, onClick, children, loading = false }) => {
  return (
    <button
      className="bg-black text-white w-full py-2 rounded-lg"
      onClick={() => onClick?.()}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
