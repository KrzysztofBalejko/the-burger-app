import React, { Component } from 'react';
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component{
    
    render(){
        
        let ingredient = null;
        let x = this.props.type

        if(x === "bread-bottom"){
            ingredient = (<div className={classes.BreadBottom}>bread bottom</div>);
        } else if(x === "bread-top"){
            ingredient = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}>bread top</div>
                <div className={classes.Seeds2}></div>
            </div>
            )
        } else if(x === "meat"){
            ingredient = <div className={classes.Meat}></div>
        } else if(x === "cheese"){
            ingredient = <div className={classes.Cheese}></div>
        } else if(x === "salad"){
            ingredient = <div className={classes.Salad}></div>
        } else if(x === "bacon"){
            ingredient = <div className={classes.Bacon}></div>
        } else {
            ingredient = null
        }

        // switch (this.props.type) {
        //     case ("bread-bottom"):
        //         ingredient = (<div className={classes.BreadBottom}></div>);
        //         break;
        //     case ("bread-top"):
        //         ingredient = (
        //             <div className={classes.BreadTop}>
        //                 <div className={classes.Seeds1}></div>
        //                 <div className={classes.Seeds2}></div>
        //             </div>
        //         )
        //         break;
        //     case ("meat"):
        //         ingredient = <div className={classes.Meat}></div>
        //         break;
        //     case ("cheese"):
        //         ingredient = <div className={classes.Cheese}></div>
        //         break;
        //     case ("salad"):
        //         ingredient = <div className={classes.Salad}></div>
        //         break;
        //     case ("bacon"):
        //         ingredient = <div className={classes.Bacon}></div>
        //         break;
        //     default:
        //     ingredient = null
            
        // }
        return ingredient;
      
    }

};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;