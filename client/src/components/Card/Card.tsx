import React from "react";
import "./Card.scss";

import Logo from "../../assets/logo.svg";

interface CardProps {
  backgroundColor?: string;
  icon?: string;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({
  backgroundColor,
  icon,
  title,
  description,
}) => {
  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      <header className="card__header">
        <img src={Logo} alt="Icon" />
        <h2>Fastest transactions</h2>
      </header>
      <p>
        Security is guaranted. We always maintain privacy and mainting the
        quality of our products.
      </p>
    </div>
  );
};

export default Card;
