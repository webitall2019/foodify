import React, { useState, useEffect } from "react";
import Container from "../UI/Container/Container";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./random.module.css";
import placeholderImage from "../../img/Placeholder.png";
const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
function Random() {
  const [mealObject, setMealObject] = useState({});
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
  };
  useEffect(() => {
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
    return;
  };
  const skipFunc = () => {
    getMeals();
  };
  return (
    <Container>
      <Card>
        <div className={classes.thumb}>
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
        <div className={classes.buttonsBox}>
          <Button btnName={"Skip"} onSkip={skipFunc}></Button>
          <Button
            btnName={"Like"}
            onLike={saveReceipt}
            // isDisable={true}
          ></Button>
        </div>
      </Card>
    </Container>
  );
}
export default Random;
