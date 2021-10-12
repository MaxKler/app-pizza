import React from "react"; 
import classes from './burger-menu.module.scss'
import burgerSvg from './burger.svg'

const BurgerMenu = ({showMenu}) => {
    return (
    <div onClick={showMenu} className={classes.burger}>
        <img className={classes.svg} src={burgerSvg} alt="" />
    </div>
    )
}

export default BurgerMenu