import React, {useEffect, useState} from 'react'

const IngrBlock = ({
    classes, 
    elem,
    qty,
    onAdd,
    onRemove
}) => {

    const [qtyIngr, setQtyIngr] = useState(0)

    useEffect(() => {
        setQtyIngr(qty ? qty : 0)
    }, [qty])


    return (
       <div className={classes.block__names}>
            <div className={classes.block__names__name}>{elem.title}</div>
            <div className={classes.block__names__qty}>
                   <span style={{color: 'black'}} onClick={() => setQtyIngr(qtyIngr - 1)} >-</span>
                   <div className={classes.block__names__qty__qty} >{qtyIngr}</div>
                   <span style={{color: 'black'}}   onClick={() => setQtyIngr(qtyIngr + 1)} >+</span>
            </div>
            <div className={classes.block__names__name}>{elem.price * qtyIngr}</div>
        </div>
    )
}

export default IngrBlock