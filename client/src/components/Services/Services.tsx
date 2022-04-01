import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import Card from "../Card/Card";
import "./Services.scss";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const { state } = useContext(AppContext);

  return (
    <section
      className="services grid grid--1x2"
      style={{ opacity: state.connectWalletModal ? 0 : 1 }}
    >
      <div className="services__headline">
        <h1>PEOPLE HAVE USED COSMOS SERVICE</h1>
        <p>Our Network is growing</p>
      </div>
      <div className="services__features">
        <Card backgroundColor="#6B57CB" />
        <Card backgroundColor="#CB8557" />
      </div>
    </section>
  );
};

export default Services;
