import React from "react"; 
import classes from './cartbox-style.module.scss'
import CartBoxSvg from './CartBox.svg'




const CartBox = ({countProduct,watchCart}) => {

 

    return (
    <div onClick={watchCart} className={classes.cartbox}>
        <img className={classes.svg} src={CartBoxSvg} alt="" />
        <div className={classes.cartbox__item}>{countProduct}</div>
    </div>
    )
}

export default CartBox