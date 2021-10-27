import React, {useEffect, useState} from 'react'
import cartSvg from './../../../../project/image/layouts/navbar/svg/cart.svg'

const AddCart = ({classes, qty, onAdd, onRemove, food}) => {

    const [qtyLocal, setQtyLocal] = useState(0)

    useEffect(() => {
        setQtyLocal(qty ? qty : 0)
    }, [qty])
    const changeBtn = () => {
        onAdd(food)
    }
    console.log(qty)
    return (
    <>
        <div className={classes.buyBtn}>
        {qtyLocal ? 
            <div className={classes.buyBtn__block}>
                <div className={classes.buyBtn__block__inCart}>У кошику</div>
                <div className={classes.buyBtn__block__addRem}>
                    <span className={classes.buyBtn__block__rem} onClick={() => onRemove(food)} >-</span>
                    <div className={classes.buyBtn__block__qty}>{qtyLocal}</div>
                    <span className={classes.buyBtn__block__add} onClick={() => onAdd(food)} >+</span>
                </div>
            </div> :
            <div onClick={changeBtn} className={classes.buyBtn__add}>Додати до кошика + 1</div>
        }
            <div className={classes.buyBtn__cart}>
                <img className={classes.buyBtnCart} src={cartSvg} alt="cart" />
            </div>
       </div>  
       
    </>
    )
} 

export default AddCart