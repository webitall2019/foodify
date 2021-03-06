import React, { useState, useEffect } from "react";
import Container from "../UI/Container/Container";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./random.module.css";
import placeholderImage from "../../img/Placeholder.png";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function Random() {
  const [mealObject, setMealObject] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const getMeals = async () => {
    try {
      const apiRequest = await fetch(API_URL);
      let answer = apiRequest.json();
      answer.then((data) => {
        setMealObject(data.meals[0]);
      });
    } catch (error) {
      console.log(error);
    }
    setIsDisabled(false);
  };

  useEffect(() => {
    console.log("random");
    getMeals();
  }, []);

  let randomRecipt = {};
  const saveReceipt = () => {
    randomRecipt.img = mealObject.strMealThumb;
    randomRecipt.title = mealObject.strMeal;
    randomRecipt.receipt = mealObject.strInstructions;
    randomRecipt.isDisabled = true;
    randomRecipt = JSON.stringify(randomRecipt);
    localStorage.setItem(`${Math.random().toFixed(2) * 100}`, randomRecipt);
    setIsDisabled(true);
    alert("receipt saved");
    return;
  };
  const skipFunc = () => {
    getMeals();
  };
  return (
    <Container>
      <Card size={100}>
        <div className={classes.buttonsBox}>
          <Button btnName={"Skip"} onSkip={skipFunc} ></Button>
          <Button
            btnName={"Like"}
            onLike={saveReceipt}
            isDisabled={isDisabled}
          ></Button>
        </div>
        <div className={classes.cardImageWrap}>
          <img
            src={
              mealObject.strMealThumb
                ? mealObject.strMealThumb
                : placeholderImage
            }
            alt="meals-thumb"
            className={classes.image}
          />
        </div>
        <div className="meal-info">
          <h3 className="meal-title">{mealObject.strMeal}</h3>
          <p className="meal-receipt">{mealObject.strInstructions}</p>
        </div>
      </Card>
    </Container>
  );
}
export default Random;
