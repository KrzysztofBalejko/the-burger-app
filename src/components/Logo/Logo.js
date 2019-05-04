import React from 'react';
import classes from './Logo.module.scss'
import BurgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="My Burger" />
    </div>
);

export default logo;