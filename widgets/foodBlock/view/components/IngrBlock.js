import React, {useEffect, useState} from 'react'
import { NET } from '../../../../network'
import checkSvg from './../../../../project/image/views/main/svg/checkSvg.svg'
const IngrBlock = ({
    classes, 
    elem,
    ingridientData,
    setIngridientData,
}) => {

    const [qtyIngr, setQtyIngr] = useState(0)
    if (qtyIngr < 0) {
        setQtyIngr(0)
    }
  
    const addIngrd = (type) => {
        let newData = ingridientData
        const newItem = newData.filter(el => el.id === elem.id) 
        
        if (newItem.length) {
            if (type === 'remove' && !(qtyIngr - 1)) {
                newData = newData.filter(ingr => ingr.id != elem.id)
            } else {
                newData = newData.map(ingr => {
                    if (ingr.id === elem.id) {
                        return {
                            ...ingr,
                            qty: type === 'add' ? qtyIngr + 1 : qtyIngr - 1
                        }
                    } else {
                        return ingr
                    }
                })
            }            
            setIngridientData([...newData])
            setQtyIngr(type === 'add' ? qtyIngr + 1 : qtyIngr - 1)
        } else {
            if (type === 'add') {
                newData.push({
                    ...elem,
                    qty: 1
                })
                setIngridientData([...newData])
                setQtyIngr(type === 'add' ? qtyIngr + 1 : qtyIngr - 1)
            }
        }
    }

    
    
    return (
       <div className={qtyIngr > 0 ? classes.block__names : classes.block__namesTr}>
               <div className={classes.block__names__name}>
                   <div className={classes.block__names__name2}>
                       <div className={classes.block__names__name2__image}>
                            <img src={`${NET.WEB_URL}/${elem.image}`} />
                       </div>
                       <div>
                            <div className={classes.block__names__name1}>{elem.title}</div>
                            <div className={classes.block__names__weight}>{elem.weight} гр</div>
                       </div>
                   </div>
               </div>
            <div className={classes.block__names__qty}>
                   <span className={classes.block__names__qty__rem} onClick={() => addIngrd('remove')} >-</span>
                   <div className={classes.block__names__qty__qty} >{qtyIngr}</div>
                   <span className={classes.block__names__qty__add}  onClick={() => addIngrd('add')} >+</span>
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