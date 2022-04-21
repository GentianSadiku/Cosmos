import { useEffect, useContext } from "react";
import CostumIcon from "../CostumIcon/CostumIcon";
import TransactionsSection from "../TransactionsSection/TransactionsSection";
import { TransactionContext } from "../../context/TransactionContext";
import { AppContext } from "../../context/AppContext";
import { Types } from "../../context/reducers";
import shortenAddress from "../../utils/shortenAddres";

import "./ConnectWallet.scss";

interface ConnectWalletProps {}

const ConnectWallet: React.FC<ConnectWalletProps> = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const { state, dispatch } = useContext(AppContext);

  const openModal = () => {
    
    // dispatch fn will be move on else statement
    dispatch({
      type: Types.connectWalletModalOpen,
    });

    if (!currentAccount) {
      //connectWallet();
    } else {
      // dispatch({
      //   type: Types.connectWalletModalOpen,
      // });
    }
  };

  useEffect(() => {
    const escKey = (event: { key: string; }) => {
      if (event.key === "Escape") {
        dispatch({
          type: Types.connectWalletModalClose,
        });
      }
    };
    
    window.addEventListener("keydown", escKey);

    return () => {
      dispatch({
        type: Types.connectWalletModalClose,
      });
      window.removeEventListener("keydown", escKey);
    };
  }, []);

  return (
    <section className={`connect-wallet ${state.connectWalletModal ? 'modal-open' : ''}`}>
      <div className="connect-wallet__inner" >
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
            onClick={() => openModal()}
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

      <TransactionsSection />
    </section>
  );
};

export default ConnectWallet;
