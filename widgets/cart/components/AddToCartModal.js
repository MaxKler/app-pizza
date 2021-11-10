import React, {useState} from 'react'
import classes from './../../../styles/widgets/cart/add-to-cart.module.scss'




const AddToCartModal = ({addToCartItem}) => {
   


    return (
        <div className={classes.addToCart}>
            <div>
                {addToCartItem}
            </div>
        </div>
    )
}

export default AddToCartModal