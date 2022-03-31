import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Types } from "../../context/reducers";

import GradientLine from "../GradientLine/GradientLine";
import "./Hero.scss";

function Hero(): JSX.Element {
  const { state, dispatch } = useContext(AppContext);

  return (
    <section
      className="hero"
      style={{ opacity: state.connectWalletModal ? 0 : 1 }}
    >
      <h1>
        SEND CRYPTO <br /> ACCROS THE WORLD
      </h1>
      <div className="description">
        <GradientLine className="gradient-line--static-width" />
        <p
          onClick={() => {
            dispatch({
              type: Types.connectWalletModalOpen,
            });
          }}
        >
          Swap, earn, and build on the leading decentralized crypto trading
          protocol.
        </p>
        <GradientLine className="gradient-line--static-width" />
      </div>
    </section>
  );
}

export default Hero;
