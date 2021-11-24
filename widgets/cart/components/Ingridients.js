import { add } from 'date-fns'
import React, {useState, useEffect} from 'react'

const Ingridients = ({
    classes, 
    onAdd,
    onRemove,
    ad, 
    cart,
    setCart,
    item
}) => {
   

    const addIngridient = (type) => {
        const newCart = cart.map((elem) => {
            if (elem.id === item.id) {
                let newIngridients = elem.ingridients.filter(el => el.id === ad.id)
                if (newIngridients.length) {
                    if (newIngridients[0].qty === 1 && type === 'remove') {
                        newIngridients = elem.ingridients.filter(el => el.id != ad.id)
                    } else {
                        newIngridients = elem.ingridients.map((ingr) => {
                            if (ingr.id === ad.id) {
                                return {
                                    ...ingr,
                                    qty: type === 'add' ? ingr.qty + 1 : ingr.qty - 1
                                }
                            } else {
                                return ingr
                            }
                        })
                    }
                    return {
                        ...elem,
                        ingridients: newIngridients
                    }
                }                
            } else {
                return elem
            }
        })
        console.log(newCart)
        setCart(newCart)
    }

    const delItem = (id) => {
        const delCart = cart.map((elem) => {
            if (elem.id === item.id) {
              let delIngridients = elem.ingridients.filter(el => el.id !== id)
              console.log(delIngridients)
              return {
                ...elem,
                ingridients: delIngridients
            }
            }
        })
        setCart(delCart)
    }

    
    return (
        <div className={classes.ingridients__ingridients}>
             <div className={classes.ingridients__size}>
                 <div className={classes.ingridients__title}>{ad.title}</div>
            </div> 
            <div className={classes.ingridients__size1}>
            <div className={classes.ingridients__qty}>
                <span className={classes.ingridients__qty__minus} onClick={() => addIngridient('remove')} >-</span>
                <div className={classes.ingridients__qty__qty}>{ad.qty}</div>
                <span className={classes.ingridients__qty__plus}  onClick={() => addIngridient('add')} >+</span>
            </div>
</div>
<div className={classes.ingridients__size1}>
            <div className={classes.ingridients__price}>{ad.price * ad.qty} ₴</div>
        </div>
        <div className={classes.ingridients__size2}>
            <div onClick={() => delItem(ad.id)} className={classes.ingridients__remove}>X</div>
        </div>
        </div>
    )
}

export default Ingridients