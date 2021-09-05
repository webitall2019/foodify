import classes from "./button.module.css";
import React, { useState, useEffect } from "react";

function Button(props) {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(props.isDisabled);
  }, [props.isDisabled]);

  return (
    <button
      onClick={() => {
        (props.btnName === "Like" ? props.onLike : props.onSkip)();
      }}
      className={classes.button}
      disabled={isDisabled}
    >
      {props.btnName}
    </button>
  );
}
export default Button;
