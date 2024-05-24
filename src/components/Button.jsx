const borderStyles = "border-2 border-almost-black hover:border-medium-gray";
const filledStyles =
  "text-white bg-black font-bold mx-0 hover:bg-transparent border-2 border-almost-black";

const Button = ({ children = "", hasBorder = false, isFilled = false }) => {
  return (
    <button
      className={`text-medium-gray px-5 py-2 rounded-lg hover:text-almost-black ${
        hasBorder && borderStyles
      } ${isFilled && filledStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
