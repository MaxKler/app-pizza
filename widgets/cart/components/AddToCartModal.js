import React, {useState} from 'react'
import classes from './../../../styles/widgets/cart/add-to-cart.module.scss'




const AddToCartModal = ({addToCartItem, showAddToCartModal}) => {
   


    return (
        <div className={ showAddToCartModal ? classes.addToCart : classes.addToCartNone}>
            <div className={classes.addToCart__block}>
                <div className={classes.addToCart__block__item}>
                    {addToCartItem}
                </div>
                <div className={classes.addToCart__block__title}>
                    додано до кошика
                </div>
            </div>
        </div>
    )
}

export default AddToCartModal