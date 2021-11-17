import React from 'react'

const OrderType = ({classes, item}) => {

    let pizzaType = ''
    if (item.activeOption === 0 || item.activeOption === null ) {
        pizzaType = 'Без борту'
    } else if (item.activeOption === 1) {
        pizzaType = item.status_opt_medium
    } else if (item.activeOption === 2) {
        pizzaType = item.status_opt_end
    }
    return (

        <div className={classes.order__bort}>
            <div className={classes.order__name}>Борт:</div>
            <div className={classes.order__bort__name}>{pizzaType}</div>
        </div>
    
    )
}

export default OrderType