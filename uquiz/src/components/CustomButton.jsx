const CustomButton = ({ onClick, className = "", children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-1.5 rounded transition-colors cursor-pointer border-none ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;