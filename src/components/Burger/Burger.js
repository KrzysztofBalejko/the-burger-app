import React from 'react';
import classes from './Burger.module.scss'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'




const burger = (props) => {

    const dynamicIngredients = (props) => {

        let food = Object.keys(props.ingredients)
        let amount = Object.values(props.ingredients)
        let arr = [];
      
        food.forEach((key, index) => {
            for (let i of Array(amount[index]).keys()){
              arr.push(key)
            };
        })
        return arr.map((item) => <BurgerIngredient type={item} /> )
        
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {dynamicIngredients(props)}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;