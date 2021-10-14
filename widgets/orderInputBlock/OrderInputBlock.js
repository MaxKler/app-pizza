import React, { useState } from "react";
import classes from './../../styles/widgets/inputBlock/inputBlock-style.module.scss'

const OrderInputBlock = ({
    orderData,
    setOrderData,
    errorData
}) => {

    const [adress, setAdress] = useState(false)
    const [time, setTime] = useState(false)
    const adressVisible = () => {
        setAdress(true)
    }
    const adressUnVisible = () => {
        setAdress(false)
    }
    const timeVisible = () => {
        setTime(true)
    }
    const timeUnVisible = () => {
        setTime(false)
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
        timeUnVisible()
    }
    const selectedTime1 = () => {
        setStateTime(false)
        setStateTime1(true)
        timeVisible()
    }

    const makeDataOrderFunc = (e, attr, val) => {
        console.log('sdsd')
        setOrderData({
            ...orderData,
            [attr]: val ? val : e.target.value,
        })
    }

    return (
        <div>
            <div  className={classes.input}>
                <input value={orderData?.name} onChange={(e) => makeDataOrderFunc(e, 'name')} className={classes.input__pole} placeholder="Ваше ім'я" type="text"/>
                {errorData?.name && <div>{errorData['name'][0]}</div>}
                <input onChange={(e) => makeDataOrderFunc(e, 'phone')} className={classes.input__pole} placeholder="Телефон"  type="text" />
                <input onChange={(e) => makeDataOrderFunc(e, 'countPeople')} className={classes.input__pole} placeholder="Кількість персон"  type="text" />
                <div className={classes.input__delivery}>
                    <div onClick={selected} className={state ? classes.input__delivery__block : [classes.input__delivery__block, classes.disabled].join(' ')}>
                        <input className={classes.input__delivery__block__input} onChange={(e) => makeDataOrderFunc(e, 'delivery_status', 'people')} 
                        id="peop"  
                        name="delivery_status" 
                        checked={ state ? true : false}  
                        type="radio" 
                        />
                        <label onClick={() => makeDataOrderFunc(false, 'delivery_status', 'people')} for="peop">
                            <span  className={classes.delivery__title}>Самовивіз</span>
                        </label>
                    </div>
                    <div  onClick={selected1} className={state1 ? classes.input__delivery__block1 : [classes.input__delivery__block1, classes.disabled].join(' ')}>
                        <input className={classes.input__delivery__block__input} onChange={(e) => makeDataOrderFunc(e, 'delivery_status', 'courier')} 
                        id="cur" 
                        name="delivery_status" 
                        checked={ state1 ? true : false}
                        type="radio" 
                        />
                        <label onClick={() => makeDataOrderFunc(false, 'delivery_status', 'courier')}  for="cur">
                             <span  className={classes.delivery__title}>Кур'єром</span>
                        </label>
                    </div>   
                </div>
                <div className={ adress ? classes.adress : classes.adress__none}>
                    <select className={classes.input__pole} onChange={(e) => makeDataOrderFunc(e, 'delivery_district')}>
                    <option className={classes.input__pole}>Оберіть район</option>
                       <option  value="centr">Центральний</option>
                       <option value="leviy"  >Лівобережний</option>
                       <option  value="calmius" >Кальміуський</option>
                       <option  value="primorsk" >Приморський</option>
                    </select>
                    <input onChange={(e) => makeDataOrderFunc(e, 'delivery_street')} className={classes.input__pole} placeholder="Вулиця"  type="text" />
                    <input onChange={(e) => makeDataOrderFunc(e, 'delivery_house')} className={classes.input__pole} placeholder="Номер дому, квартири" type="text"/>
                    <input onChange={(e) => makeDataOrderFunc(e, 'delivery_pidzd')} className={classes.input__pole} placeholder="Номер під'їзду"  type="text" />
                </div>
                <div>
                    <select className={classes.input__pole}>
                       <option className={classes.input__pole}>Оберіть спосіб оплати</option>
                       <option onChange={(e) => makeDataOrderFunc(e, 'pay_status', 'money')} >Готівка</option>
                       <option onChange={(e) => makeDataOrderFunc(e, 'pay_status ', 'terminal')} >Термінал</option>
                       <option onChange={(e) => makeDataOrderFunc(e, 'pay_status ')} >Онлайн оплата</option>
                    </select>
                </div>
                <div>
                    <div className={classes.input__delivery}>
                        <div onClick={selectedTime} className={stateTime ? classes.input__delivery__block : [classes.input__delivery__block, classes.disabled].join(' ')}>
                            <input onChange={(e) => makeDataOrderFunc(e, 'time_status', 'speed')}  checked={ stateTime ? true : false}   type="radio" placeholder="fvhfghgd" />
                            <span  className={classes.delivery__title__time}> Найшвидше</span>
                        </div>
                        <div  onClick={selectedTime1} className={stateTime1 ? classes.input__delivery__block1 : [classes.input__delivery__block1, classes.disabled].join(' ')}>
                            <input  onChange={(e) => makeDataOrderFunc(e, 'time_status', 'real')}  checked={ stateTime1 ? true : false}  type="radio" />
                            <span  className={classes.delivery__title__time}>Вказати час</span>
                        </div>    
                    </div>
                    <div className={time ? classes.time : classes.time__none}>
                        <input onChange={(e) => makeDataOrderFunc(e, 'time_date')} className={classes.input__pole} placeholder="дата" type="text"/>
                        <input onChange={(e) => makeDataOrderFunc(e, 'time_hour')} className={classes.input__pole} placeholder="час"  type="text" />
                    </div>
                    <div>
                        <textarea className={classes.textarea} placeholder="   Додати побажання"  />
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