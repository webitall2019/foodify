import React from "react";
import classes from "./card.module.css";
function Card(props) {
  let cardCount = 100 / props.cardCount;
  return (
    <div
      className={classes.card}
      style={{
        maxWidth: cardCount - 3 + "%",
      }}
    >
      {props.children}
    </div>
  );
}
export default Card;
