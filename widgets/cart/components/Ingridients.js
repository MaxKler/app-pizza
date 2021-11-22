import React, {useState, useEffect} from 'react'

const Ingridients = ({
    classes, 
    onAdd,
    onRemove,
    ad, 
    qty
}) => {
    const [qtyLocal, setQtyLocal] = useState(0)

    useEffect(() => {
        setQtyLocal(qty ? qty : 0)
    }, [qty])

    return (
        <div className={classes.ingridients}>
            <div className={classes.ingridients__title}>{ad.title}</div>
            <div className={classes.ingridients__qty}>
                <span className={classes.ingridients__qty__minus} onClick={() => onRemove(ad)} >-</span>
                <div className={classes.ingridients__qty__qty}>{qtyLocal}</div>
                <span className={classes.ingridients__qty__plus}  onClick={() => onAdd(ad)} >+</span>
            </div>
            <div className={classes.ingridients__price}>{ad.price}</div>
        </div>
    )
}

export default Ingridients