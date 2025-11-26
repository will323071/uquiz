import React from "react";

const CustomButton = ({ onClick, className = "", children }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-1.5
        text-white
        rounded
        bg-blue-500
        hover:bg-gray-600
        transition-colors
        cursor-pointer
        border-none
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
