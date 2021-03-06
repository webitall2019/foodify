import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import Container from "../UI/Container/Container";
import classes from "./favourites.module.css";
import placeholderImage from "../../img/Placeholder.png";
import Modal from "../UI/Modal/Modal";

function Favorites() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewreceipt, setIsNewreceipt] = useState(false);
  const updatePage = (state) => {
    return setIsNewreceipt(state);
  };
  let likedReceipts = [];

  useEffect(() => {
    setIsNewreceipt(true);
    return () => {
      setIsNewreceipt(true);
    };
  }, [isNewreceipt]);

  const showAllSavedreceipts = () => {
    for (let obj in localStorage) {
      if (localStorage.getItem(obj) !== null) {
        likedReceipts.push(JSON.parse(localStorage.getItem(obj)));
      }
    }
  };
  showAllSavedreceipts();

  const addNewReceiptFunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.main}>
      <button
        className={classes.addNewReceiptBtn}
        onClick={() => {
          addNewReceiptFunc();
        }}
      >
        add custom dish
      </button>
      <Container>
        {likedReceipts.length ? (
          likedReceipts.map((receipt, index) => {
            return (
              <Card key={index} size={"28%"} cardCount={likedReceipts.length}>
                <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                  <img
                    style={{ maxWidth: "100%" }}
                    src={receipt.img ? receipt.img : placeholderImage}
                    alt="meals-thumb"
                    className={classes.image}
                  />
                </div>
                <div className="meal-info">
                  <h3 className="meal-title">{receipt.title}</h3>
                  <p className="meal-receipt">{receipt.receipt}</p>
                </div>
              </Card>
            );
          })
        ) : (
          <p style={{ fontSize: "50px", margin: "50px auto" }}>
            nothing to show
          </p>
        )}
      </Container>
      <Modal
        isOpen={isOpen}
        updateFunc={() => {
          updatePage();
        }}
      ></Modal>
    </div>
  );
}
export default Favorites;
