import React from 'react'

const OrderName = ({classes, item}) => {

    let pizzaType = ''
    if (item.activeOption === 0) {
        pizzaType = ''
    } else if (item.activeOption === 1) {
        pizzaType = 'Сирний' 
    } else if (item.activeOption === 2) {
        pizzaType = 'ХотДог'
    }
    return (
    <div className={classes.order__size3}>
        <div className={classes.order__name}>{item.title}</div>
        <div className={classes.order__name}>{pizzaType}</div>
    </div>
    )
}

export default OrderName