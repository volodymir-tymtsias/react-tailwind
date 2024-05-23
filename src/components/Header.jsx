import { useState } from "react";
import { COMPANY, FEATURES } from "../constants/menu";
import { ReactComponent as LogoIcon } from "../images/logo.svg";
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";
import Button from "./Button";

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <header className="flex items-center">
      <LogoIcon />
      <nav className="flex space-x-6 ml-8">
        <NavItem
          text="Feature"
          selectedMenu={selectedMenu}
          handlerMenuOpen={setSelectedMenu}
        >
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem
          text="Company"
          selectedMenu={selectedMenu}
          handlerMenuOpen={setSelectedMenu}
        >
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text="Careers" handlerMenuOpen={setSelectedMenu} />
        <NavItem text="About" handlerMenuOpen={setSelectedMenu} />
      </nav>
      <div className="flex ml-auto space-x-5">
        <Button>Loggin</Button>
        <Button hasBorder>Register</Button>
      </div>
    </header>
  );
};

export default Header;
