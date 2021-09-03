import classes from "./modal.module.css";
import React, { useState } from "react";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [newReceiptTitle, setNewReceiptTitle] = useState("");
  const [newReceiptDescription, setNewReceiptDescription] = useState("");

  let newReceipt = {};
  const submitForm = (e) => {
    e.preventDefault();
    newReceipt.title = newReceiptTitle;
    newReceipt.receipt = newReceiptDescription;
    if (newReceiptTitle.length > 10 && newReceiptDescription.length > 50) {
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
    setIsOpen(true);
  };
  return props.isOpen ? (
    <div
      className={classes.modal}
      onClick={(e) => {
        if (e.target.classList.contains("modal_modal__FaOf0")) {
          hideModal();
        }
      }}
      style={isOpen ? { display: "none" } : { display: "block" }}
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
            onChange={(e) => {
              setNewReceiptTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Dish description"
            onChange={(e) => {
              setNewReceiptDescription(e.target.value);
            }}
          ></textarea>
          <button style={{ fontWeight: "500" }}>Add custom dish</button>
        </form>
      </div>
    </div>
  ) :
  null;
}
export default Modal;
