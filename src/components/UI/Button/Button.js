import classes from "./button.module.css";
import React from "react";

function Button(props) {
  return (
    <button
      onClick={() => {
        (props.btnName === "Like" ? props.onLike : props.onSkip)();
        console.log("test");
      }}
      className={classes.button}
      disabled={false}
    >
      {props.btnName}
    </button>
  );
}
export default Button;
