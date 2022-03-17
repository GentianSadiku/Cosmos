import React from "react";
import CostumIcon from "../CostumIcon/CostumIcon";

import Logo from "../../assets/logo.svg";

import "./Header.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Cosmos" />
      </div>

      <nav className="header__navigation">
        <ul>
          <li>Market</li>
          <li>Ecosystem</li>
          <li>Community</li>
          <li>Blog</li>
        </ul>
      </nav>

      <div className="header__wallet">
        <button className="button button--default">
          <CostumIcon iconName="wallet" />
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
