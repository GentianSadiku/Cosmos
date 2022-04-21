import React from "react";
import "./Card.scss";

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
        <img src={icon} alt="Icon" />
        <h2>{title}</h2>
      </header>
      <p>{description}</p>
    </div>
  );
};

export default Card;
