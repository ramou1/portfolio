import React from "react";
import "../styles/Card.css";

interface CardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, category, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-container">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <p className="card-category">{category}</p>
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
