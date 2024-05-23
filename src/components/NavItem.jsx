import { ReactComponent as ArrowDownIcon } from "../images/icon-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../images/icon-arrow-up.svg";

const NavItem = ({ text = "", selectedMenu, handlerMenuOpen, children }) => {
  const clickHandler = () => {
    handlerMenuOpen(selectedMenu !== text ? text : "");
  };

  return (
    <div className="relative">
      <div
        className="flex space-x-2 cursor-pointer items-center text-medium-gray hover:text-almost-black"
        onClick={clickHandler}
      >
        <span className="text-inherit">{text}</span>
        {children && text !== selectedMenu && <ArrowDownIcon />}
        {children && text === selectedMenu && <ArrowUpIcon />}
      </div>
      {selectedMenu === text && children}
    </div>
  );
};

export default NavItem;
