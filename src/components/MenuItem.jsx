const MenuItem = ({ text = "", icon }) => {
  return (
    <div className="flex space-x-4 w-full cursor-pointer text-medium-gray hover:text-almost-black">
      {icon}
      <span className="text-inherit">{text}</span>
    </div>
  );
};

export default MenuItem;
