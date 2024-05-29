import { useState } from "react";
import { ReactComponent as LogoIcon } from "../images/logo.svg";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

const Header = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlerMobileMenuOpen = () => {
    setIsMobileMenuOpen((current) => setIsMobileMenuOpen(!current));
  };

  return (
    <header className="flex items-center">
      <LogoIcon />
      <NavMenu 
        stylesNav="hidden md:flex space-x-6 ml-8" 
        stylesDropDownMenu="flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30"
      />
      <div className="hidden md:flex ml-auto space-x-5">
        <Button>Loggin</Button>
        <Button hasBorder>Register</Button>
      </div>
      <div
        className="flex md:hidden ml-auto cursor-pointer"
        onClick={handlerMobileMenuOpen}
      >
        <MenuIcon />
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Header;
