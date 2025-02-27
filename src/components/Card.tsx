import React from "react";
import "../styles/Modal.css";

interface CardProps {
  image: string;
  title: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
