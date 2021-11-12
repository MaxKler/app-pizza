import React from 'react'

const OrderName = ({classes, item}) => {

    let pizzaType = ''
    if (item.activeOption === 0 || item.activeOption === null ) {
        pizzaType = ''
    } else if (item.activeOption === 1) {
        pizzaType = item.status_opt_medium
    } else if (item.activeOption === 2) {
        pizzaType = item.status_opt_end
    }
    return (
    <div className={classes.order__size3}>
        <div className={classes.order__name}>{item.title}</div>
        <div className={classes.order__name}>{pizzaType}</div>
    </div>
    )
}

export default OrderName