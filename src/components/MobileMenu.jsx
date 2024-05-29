import { ReactComponent as MenuCloseIcon } from "../images/icon-close-menu.svg";
import Button from "./Button";
import NavMenu from "./NavMenu";

const MobileMenu = ({ isOpen, setIsMobileMenuOpen }) => {
  const hadlerClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`${isOpen ? "flex" : "hidden"} fixed inset-0 z-10 md:hidden`}
    >
      <div className="w-full h-full bg-almost-black opacity-50" />
      <div className="flex flex-col fixed inset-y-0 right-0 bg-almost-white w-1/2 overflow-y-auto ring-1 ring-medium-gray py-4 px-5 z-20 mobile-menu">
        <div className="ml-auto cursor-pointer" onClick={hadlerClose}>
          <MenuCloseIcon />
        </div>
        <NavMenu
          stylesNav="my-5 space-y-5 w-full border-b-2 border-medium-gray pb-5"
          stylesDropDownMenu="flex flex-col space-y-2 pl-2 mt-2"
        />
        <div className="flex flex-col space-y-2 self-center">
          <Button>Loggin</Button>
          <Button hasBorder>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
