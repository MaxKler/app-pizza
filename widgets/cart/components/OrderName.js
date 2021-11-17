import React from 'react'

const OrderName = ({classes, item}) => {

  
    return (
    <div className={classes.order__size3}>
        <div className={classes.order__name}>{item.title}</div>
    </div>
    )
}

export default OrderName