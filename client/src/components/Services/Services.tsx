import React from "react";
import Card from "../Card/Card";
import GradientLine from "../GradientLine/GradientLine";
import "./Services.scss";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <section className="services grid grid--1x2">
      
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
