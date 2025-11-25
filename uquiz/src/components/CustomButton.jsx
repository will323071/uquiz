import { twMerge } from "tailwind-merge";

const CustomButton = ({ onClick, className = "", children }) => {
  const classNameMerge = twMerge(
    "py-1.5 px-5 text-white rounded-sm hover:bg-gray-500 cursor-pointer",
    className
  );
  return (
    <button onClick={onClick} className={classNameMerge}>
      {children}
    </button>
  );
};

export default CustomButton;