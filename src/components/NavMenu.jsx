import React, { useState } from "react";
import NavItem from "./NavItem";
import DropDownMenu from "./DropDownMenu";
import { COMPANY, FEATURES } from "../constants/menu";

const NavMenu = ({ stylesNav, stylesDropDownMenu }) => {
  const [selectedMenu, setSelectedMenu] = useState("");
  return (
    <nav className={stylesNav}>
      <NavItem
        text="Feature"
        selectedMenu={selectedMenu}
        handlerMenuOpen={setSelectedMenu}
      >
        <DropDownMenu items={FEATURES} styles={stylesDropDownMenu} />
      </NavItem>
      <NavItem
        text="Company"
        selectedMenu={selectedMenu}
        handlerMenuOpen={setSelectedMenu}
      >
        <DropDownMenu items={COMPANY} styles={stylesDropDownMenu} />
      </NavItem>
      <NavItem text="Careers" handlerMenuOpen={setSelectedMenu} />
      <NavItem text="About" handlerMenuOpen={setSelectedMenu} />
    </nav>
  );
};

export default NavMenu;
