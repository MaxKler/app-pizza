import React, {useEffect, useState} from 'react'
import checkSvg from './../../../../project/image/views/main/svg/checkSvg.svg'
const IngrBlock = ({
    classes, 
    elem,
    qty,
    onAdd,
    onRemove,
    
}) => {

    const [qtyIngr, setQtyIngr] = useState(0)
        if (qtyIngr < 0) {
            setQtyIngr(0)
        }
    useEffect(() => {
        setQtyIngr(qty ? qty : 0)
    }, [qty])


   
    return (
       <div className={qtyIngr > 0 ? classes.block__names : classes.block__namesTr}>
               <div className={classes.block__names__name}>
                   <div className={classes.block__names__name2}>
                       <div className={classes.block__names__name1}>{elem.title}</div>
                       <div className={classes.block__names__weight}>{elem.weight} гр</div>
                   </div>
               </div>
            <div className={classes.block__names__qty}>
                   <span className={classes.block__names__qty__rem} onClick={() => setQtyIngr(qtyIngr - 1)} >-</span>
                   <div className={classes.block__names__qty__qty} >{qtyIngr}</div>
                   <span className={classes.block__names__qty__add}  onClick={() => setQtyIngr(qtyIngr + 1)} >+</span>
            </div>
            <div className={classes.block__names__price}>
                <div className={classes.block__names__price__price}>{elem.price * qtyIngr} грн</div>
                {qtyIngr > 0 && 
                    <div className={classes.block__names__price__icon}>
                        <img  className={classes.block__names__price__icon__icon} src={checkSvg} alt="" />
                    </div>
                }
            </div>
        </div>
    )
}

export default IngrBlock