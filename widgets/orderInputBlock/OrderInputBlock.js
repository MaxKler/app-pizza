import React, { useState } from "react";
import classes from './../../styles/widgets/inputBlock/inputBlock-style.module.scss'

const OrderInputBlock = () => {

    const [adress, setAdress] = useState(false)
    
    const adressVisible = () => {
        setAdress(true)
    }
    const adressUnVisible = () => {
        setAdress(false)
    }

    const [state, setState] = useState(true)
    const [state1, setState1] = useState(false)

    const selected = () => {
        setState(true)
        setState1(false)
        adressUnVisible()
    }
    const selected1 = () => {
        setState(false)
        setState1(true)
        adressVisible()
    }
    const [stateTime, setStateTime] = useState(true)
    const [stateTime1, setStateTime1] = useState(false)

    const selectedTime = () => {
        setStateTime(true)
        setStateTime1(false)
    }
    const selectedTime1 = () => {
        setStateTime(false)
        setStateTime1(true)
    }


    return (
        <div>
            <div  className={classes.input}>
                <input className={classes.input__pole} placeholder="Ваше ім'я" type="text"/>
                <input className={classes.input__pole} placeholder="Телефон"  type="text" />
                <input className={classes.input__pole} placeholder="Кількість персон"  type="text" />
                <div className={classes.input__delivery}>
                    <div onClick={selected} className={state ? classes.input__delivery__block : [classes.input__delivery__block, classes.disabled].join(' ')}>
                        <input checked={ state ? true : false}   type="radio" placeholder="fvhfghgd" />
                        <span  className={classes.delivery__title}>Самовивіз</span>
                    </div>
                    <div  onClick={selected1} className={state1 ? classes.input__delivery__block1 : [classes.input__delivery__block1, classes.disabled].join(' ')}>
                        <input checked={ state1 ? true : false}  type="radio" />
                        <span  className={classes.delivery__title}>Кур'єром</span>
                    </div>   
                </div>
                <div className={ adress ? classes.adress : classes.adress__none}>
                    <input className={classes.input__pole} placeholder="Район" type="text"/>
                    <input className={classes.input__pole} placeholder="Вулиця"  type="text" />
                    <input className={classes.input__pole} placeholder="Номер дому, квартири" type="text"/>
                    <input className={classes.input__pole} placeholder="Номер під'їзду"  type="text" />
                </div>
                <div>
                    <div className={classes.input__delivery}>
                        <div onClick={selectedTime} className={stateTime ? classes.input__delivery__block : [classes.input__delivery__block, classes.disabled].join(' ')}>
                            <input checked={ stateTime ? true : false}   type="radio" placeholder="fvhfghgd" />
                            <span  className={classes.delivery__title__time}> Найшвидше</span>
                        </div>
                        <div  onClick={selectedTime1} className={stateTime1 ? classes.input__delivery__block1 : [classes.input__delivery__block1, classes.disabled].join(' ')}>
                            <input checked={ stateTime1 ? true : false}  type="radio" />
                            <span  className={classes.delivery__title__time}>Вказати час</span>
                        </div>    
                    </div>
                    <div>
                        <textarea className={classes.textarea} placeholder="Додати побажання"  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInputBlock
// const [active, setActive] = useState(0)
// const handleChange = (e, idx) => {
//     setActive(idx)
// }
// {options.map((opt, idx) => (
//     <div className={classes.editor__item__radio__el}>
//         <input  checked={idx === active ? true : false} value={opt.value} onChange={(e) => handleChange(e, idx)} name={attribute} id={`${attribute}${idx}`} type="radio"/>
//         <label for={`${attribute}${idx}`}>{opt.alias}</label>
//     </div>
// ))}