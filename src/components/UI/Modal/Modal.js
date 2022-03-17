import classes from "./modal.module.css";
import React, { useState, useEffect } from "react";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [newReceiptTitle, setNewReceiptTitle] = useState("");
  const [newReceiptDescription, setNewReceiptDescription] = useState("");

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  let newReceipt = {};
  const submitForm = (e) => {
    e.preventDefault();
    newReceipt.title = newReceiptTitle;
    newReceipt.receipt = newReceiptDescription;
    if (newReceiptTitle.length > 5 && newReceiptDescription.length > 10) {
      newReceipt = JSON.stringify(newReceipt);
      localStorage.setItem(
        `${"newReceiptId" + Math.random().toFixed(2) * 100}`,
        newReceipt
      );
      alert("New receipt created");
      hideModal();
    } else {
      alert("Please fill out all areas");
      hideModal();
    }
    props.updateFunc(true);
  };
  const hideModal = () => {
    setIsOpen(!props.isOpen);
  };
  return props.isOpen ? (
    <div
      className={classes.modal}
      onClick={(e) => {
        if (e.target.classList.contains("modal_modal__FaOf0")) {
          hideModal();
        }
      }}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className={classes.formBox}>
        <h3>Add custom dish</h3>
        <form
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <input
            type="text"
            placeholder="Dish title"
            required
            onChange={(e) => {
              setNewReceiptTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Dish description ..."
            required
            onChange={(e) => {
              setNewReceiptDescription(e.target.value);
            }}
          ></textarea>
          <button style={{ fontWeight: "500" }}>Add custom dish</button>
        </form>
      </div>
    </div>
  ) : null;
}
export default Modal;
