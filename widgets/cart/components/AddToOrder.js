import React, {useState, useEffect} from "react";
import classes from './../../../styles/widgets/cart/add-to-order.module.scss'
import { NET } from "../../../network";

const AddToOrder = ({
    elem, 
    onAdd,
    onRemove,
    qty
}) => {

    const [qtyLocal, setQtyLocal] = useState(0)

    useEffect(() => {
        setQtyLocal(qty ? qty : 0)
    }, [qty])
    const changeBtn = () => {
        onAdd(elem)
    }
    return (
    <div className={classes.addToOrder}>
        <div className={classes.addToOrder__prod}>
            <img  className={classes.addToOrder__img} src={`${NET.WEB_URL}/${elem.image}`} alt='pizza' />
            <div className={classes.addToOrder__title}>{elem.title}</div>
        </div>
        <div className={classes.addToOrder__block}>
            <div>
                <div className={classes.addToOrder__price}>{elem.price}  грн</div>
                <div className={classes.addToOrder__weight}>{elem.weight}</div>
            </div>
            {qtyLocal ?
                <div className={classes.quantity}>
                   <span className={classes.quantity__minus} onClick={() => onRemove(elem)} >-</span>
                   <div className={classes.quantity__qty}>{qtyLocal}</div>
                   <span className={classes.quantity__plus}  onClick={() => onAdd(elem)} >+</span>
                </div> :
            <div onClick={changeBtn} className={classes.quantity__add}>додати</div>}
        </div>
    </div>    
    )
}

export default AddToOrder