import React from "react";
import GradientLine from "../GradientLine/GradientLine";
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>
        SEND CRYPTO <br /> ACCROS THE WORLD
      </h1>
      <div className="description">
        <GradientLine className="gradient-line--static-width"/>
        <p>
          Swap, earn, and build on the leading decentralized crypto trading
          protocol.
        </p>
        <GradientLine className="gradient-line--static-width"/>
      </div>
    </section>
  );
};

export default Hero;
