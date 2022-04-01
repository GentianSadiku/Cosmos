import { useContext } from "react";
import CostumIcon from "../CostumIcon/CostumIcon";

import { TransactionContext } from "../../context/TransactionContext";
import { AppContext } from "../../context/AppContext";
import Logo from "../../assets/logo.svg";

import "./Header.scss";
import shortenAddress from "../../utils/shortenAddres";

const Header: React.FC = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const { state } = useContext(AppContext);

  return (
    <header className="header" style={{ opacity: state.connectWalletModal ? 0 : 1 }}>
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
        <button
          className="button button--default"
          onClick={() => connectWallet()}
        >
          <CostumIcon iconName="wallet" />
          {currentAccount ? shortenAddress(currentAccount) : "Connect Wallet"}
        </button>
      </div>
    </header>
  );
};

export default Header;
