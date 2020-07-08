import React from "react";
import BurgerIngrdient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) =>
    [...Array(props.ingredients[igKey])].map((_, i) => (
      <BurgerIngrdient key={igKey + i} type={igKey} />
    ))
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngrdient type="bread-top" />
      {transformedIngredients}
      <BurgerIngrdient type="bread-bottom" />
    </div>
  );
};

export default burger;
