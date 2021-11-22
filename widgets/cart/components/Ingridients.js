import React, {useState} from 'react'

const Ingridients = ({
    classes, 
    item,
    onAdd,
    onRemove,
    cart
}) => {
    const [qtyLocal, setQtyLocal] = useState(0)

    // useEffect(() => {
    //     setQtyLocal(qty ? qty : 0)
    // }, [qty])
    console.log(item.ingridients)
    return (
       <div>
           <div className={classes.order__name}>Інгрідієнти :</div>
           {item.ingridients && item.ingridients.map((elem) => {
            //    let qty = cart.filter(el => el.id === elem.id)
               return (
                   <div>
                        <div className={classes.order__name}>{elem.title}</div>
                        <span className={classes.quantity__minus} onClick={() => onRemove(elem)} >-</span>
                        <div className={classes.order__name}>{qtyLocal}</div>
                        <span className={classes.quantity__plus}  onClick={() => onAdd(elem)} >+</span>
                        <div className={classes.order__name}>{elem.price}</div>
                   </div>
               )
           })}
       </div>
    )
}

export default Ingridients