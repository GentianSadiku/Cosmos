import { useContext, useState } from "react";
import CostumIcon from "../CostumIcon/CostumIcon";

import { TransactionContext } from "../../context/TransactionContext";
import { AppContext } from "../../context/AppContext";
import Logo from "../../assets/logo.svg";
import Menu from "../../assets/icons/menu.svg";

import "./Header.scss";
import shortenAddress from "../../utils/shortenAddres";

const Header: React.FC = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const { state } = useContext(AppContext);

  const [isCollapsed, setCollapsed] = useState<boolean>(false);
  const collapsibleClass = isCollapsed
    ? "collapsible  collapsible--expanded"
    : "collapsible";
  const collapsibleContent = isCollapsed ? "" : "collapsible__content";

  const toggle = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`nav ${collapsibleClass}`}
      style={{ opacity: state.connectWalletModal ? 0.1 : 1 }}
    >
      <div className="nav__logo">
        <img src={Logo} alt="Cosmos" />
      </div>

      <button onClick={toggle} className="nav__toggler">
        <img src={Menu} alt="toggler" className="nav__toggler" />
      </button>

      <ul className={`list nav__list ${collapsibleContent}`}>
        <li className="nav__item">
          <a href="#">Market</a>
        </li>
        <li className="nav__item">
          <a href="#">Ecosystem</a>
        </li>
        <li className="nav__item">
          <a href="#">Community</a>
        </li>
        <li className="nav__item">
          <a href="#">Blog</a>
        </li>
      </ul>

      <div className={`nav__wallet ${collapsibleContent}`}>
        <button
          className="button button--default"
          onClick={() => connectWallet()}
        >
          <CostumIcon iconName="wallet" />
          {currentAccount ? shortenAddress(currentAccount) : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
