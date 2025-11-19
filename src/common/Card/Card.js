import React from "react";
import Button from "../Button/Button";
import "./Card.css";

export default function Card({ cardData, onDelete, onToggle }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <div
          className="circle"
          style={{
            backgroundColor: cardData.completed ? "#7fff00" : "grey",
      
          }}
          onClick={onToggle}
        />
        <p
          className="card"
          style={{
            textDecoration: cardData.completed ? "line-through" : "none",
          }}
        >
          {cardData.text}
        </p>
      </div>
      <Button name="X" cardButton onTaskSubmit={onDelete} />
    </div>
  );
}
