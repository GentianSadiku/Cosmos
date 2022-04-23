import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import GradientLine from "../GradientLine/GradientLine";
import { HeroData } from "../../utils/data";
import "./Hero.scss";

function Hero(): JSX.Element {
  const { state } = useContext(AppContext);

  return (
    <section
      className="hero"
      style={{ opacity: state.connectWalletModal ? 0 : 1 }}
    >
      <h1 style={{ whiteSpace: "pre-line" }}>{HeroData.title}</h1>
      <div className="description">
        <GradientLine className="gradient-line--static-width" />
        <p>{HeroData.description}</p>
        <GradientLine className="gradient-line--static-width" />
      </div>
    </section>
  );
}

export default Hero;
