import React from "react";
import "./card.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img src={props.image} alt={props.name} />
    </div>
  </div>
);

export default FriendCard;
