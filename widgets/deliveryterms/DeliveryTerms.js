import React from "react"
import classes from './../../styles/widgets/deliveryterms/del-terms-style.module.scss'

const DeliveryTerms = () => {
    return (
          <div>
              <div className={classes.DeliveryTerms__title}>Умови доставки</div>
              <div className={classes.DeliveryTerms__png}></div>
          </div>
    )
}

export default DeliveryTerms