import { useContext } from "react";
import CostumIcon from "../CostumIcon/CostumIcon";
import { TransactionContext } from "../../context/TransactionContext";
import shortenAddress from "../../utils/shortenAddres";

import "./ConnectWallet.scss";

interface ConnectWalletProps {}

const ConnectWallet: React.FC<ConnectWalletProps> = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <section className="connect-wallet">
      <div className="connect-wallet__inner">
        <div className="pt-left">
          <CostumIcon iconName="info" iconHeight="25px" iconWidth="25px" />
          <h4>Connect your account to see the latest transactions</h4>
        </div>
        <CostumIcon
          iconName="arrow-right"
          iconWidth="100px"
          iconHeight="20px"
        />
        <div className="pt-right">
          <button
            className="button button--transparent button--large"
            onClick={() => connectWallet()}
          >
            <CostumIcon
              iconName="wallet-outline"
              iconWidth="30px"
              iconHeight="30px"
            />
            {currentAccount ? shortenAddress(currentAccount) : "Connect Wallet"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;
