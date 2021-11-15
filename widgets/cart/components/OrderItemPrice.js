import React from 'react'

const OrderItemPrice = ({classes, item}) => {

    let itemPrice = '' 
    if (item.activeOption === 0 || item.activeOption === null) { 
        itemPrice = item.price
    } else if (item.activeOption === 1) {
        itemPrice = item.price_two
    } else if (item.activeOption === 2) {
        itemPrice = item.price_three
    }
    return (
        <div className={classes.order__price}>{itemPrice * item.qty} ₴</div>
    )
}

export default OrderItemPrice