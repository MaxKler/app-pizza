import React, { useState } from "react";
import classes from './../../styles/widgets/inputBlock/inputBlock-style.module.scss'

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ua from 'date-fns/locale/ru';
registerLocale('ua', ua)
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

import PhoneInput from 'react-phone-input-2'

const OrderInputBlock = ({
    orderData,
    setOrderData,
    errorData
}) => {

    const [adress, setAdress] = useState(true)
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

    const [state, setState] = useState(false)
    const [state1, setState1] = useState(true)

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

    const [phone, setPhone] = useState()

    const makeDataOrderFunc = (e, attr, val) => {
        if (attr === 'phone') {
            setOrderData({
                ...orderData,
                [attr]: val ? val : e,
                
            })
        } else {
            setOrderData({
                ...orderData,
                [attr]: val ? val : e.target.value,
                
            })
        }
        
    }
    

    const [selectedDate, setSelectedDate] = useState(() => {
     
      let dateNow = new Date().toLocaleTimeString().substr(0,2)

        return setHours(setMinutes(new Date(), 0), +dateNow + 1)
    })

    const orderDate = new Date()

    orderDate.setDate(orderDate.getDate() + 7);
 
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
      };
    
   

    return (
        <div>
            <div className={classes.input}>
                <input value={orderData?.name} onChange={(e) => makeDataOrderFunc(e, 'name')} className={classes.input__pole} placeholder="Ваше ім'я" type="text"/>
                {/* {errorData?.name && <div className={classes.errorTitle}>{errorData['name'][0]}</div>} */}
                 <div className={ classes.input__phone}>
                 <PhoneInput 
                   country={'ua'} 
                   value={phone}
                   onChange={(e)=> makeDataOrderFunc(e, 'phone')} 
                   placeholder="Телефон"  
                   />
                 </div>
                {errorData?.phone && <div className={classes.errorTitle}>{errorData['phone'][0]}</div>}

                <input onChange={(e) => makeDataOrderFunc(e, 'countPeople')} className={classes.input__pole} placeholder="Кількість персон"  type="text" />
                {/* {errorData?.countPeople && <div className={classes.errorTitle}>{errorData['countPeople'][0]}</div>} */}

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
                    <select className={orderData.delivery_district === "centr" ||
                    orderData.delivery_district === "leviy" ||
                    orderData.delivery_district === "calmius" || 
                    orderData.delivery_district === "primorsk"
                    ? classes.input__dropdown__opt : classes.input__dropdown} 
                    onChange={(e) => makeDataOrderFunc(e, 'delivery_district')}>
                    <option >Оберіть район</option>
                       <option  value="centr">Центральний</option>
                       <option value="leviy"  >Лівобережний</option>
                       <option  value="calmius" >Кальміуський</option>
                       <option  value="primorsk" >Приморський</option>
                    </select>
                    <input onChange={(e) => makeDataOrderFunc(e, 'delivery_street')} className={classes.input__pole} placeholder="Вулиця"  type="text" />
                    {/* {errorData?.delivery_street && <div className={classes.errorTitle}>{errorData['delivery_street'][0]}</div>} */}

                    <input onChange={(e) => makeDataOrderFunc(e, 'delivery_house')} className={classes.input__pole} placeholder="Номер дому, квартири" type="text"/>
                    {/* {errorData?.delivery_house && <div className={classes.errorTitle}>{errorData['delivery_house'][0]}</div>} */}

                    <input onChange={(e) => makeDataOrderFunc(e, 'delivery_pidzd')} className={classes.input__pole}placeholder="Номер під'їзду"  type="text" />
                    {/* {errorData?.delivery_pidzd && <div className={classes.errorTitle}>{errorData['delivery_pidzd'][0]}</div>} */}

                </div>
                <div>
                    <select className={classes.input__dropdown}>
                       <option >Оберіть спосіб оплати</option>
                       <option onChange={(e) => makeDataOrderFunc(e, 'pay_status', 'money')} >Готівка</option>
                       <option onChange={(e) => makeDataOrderFunc(e, 'pay_status ', 'terminal')} >Термінал</option>
                       <option onChange={(e) => makeDataOrderFunc(e, 'pay_status ')} >Онлайн оплата</option>
                    </select>
                </div>
                <div>
                    <div className={classes.input__delivery}>
                        <div onClick={selectedTime} className={stateTime ? classes.input__delivery__block : [classes.input__delivery__block, classes.disabled].join(' ')}>
                            <input className={classes.input__delivery__block__input} onChange={(e) => makeDataOrderFunc(e, 'time_status', 'speed')}  
                                   checked={ stateTime ? true : false} 
                                   type="radio" 
                                   name="time_status" 
                                   id="now"
                                />
                            <label onClick={() => makeDataOrderFunc(false, 'time_status', 'speed')} for="now">
                                <span  className={classes.delivery__title__time}> Найшвидше</span>
                            </label>      
                        </div>
                        <div  onClick={selectedTime1} className={stateTime1 ? classes.input__delivery__block1 : [classes.input__delivery__block1, classes.disabled].join(' ')}>
                            <input className={classes.input__delivery__block__input} onChange={(e) => makeDataOrderFunc(e, 'time_status', 'real')}  
                            checked={ stateTime1 ? true : false}  
                            type="radio" 
                            name="time_status" 
                            id="tim"
                            />
                            <label onClick={() => makeDataOrderFunc(false, 'time_status', 'real')} for="tim">
                                 <span  className={classes.delivery__title__time}>Вказати час</span>
                            </label> 
                        </div>    
                    </div>
                    <div className={time ? classes.time : classes.time__none}>
                    <DatePicker 
                        selected={selectedDate}
                        onChange={e => {
                            const date = new Date(e)
                            setOrderData({
                                ...orderData, 
                                time_hour: +date.getHours() === 1 ? '' : date.getHours() + '-' + date.getMinutes(),
                                time_date: date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
                            })
                            return setSelectedDate(date)
                        }}
                        dateFormat="dd/MM/yyyy   HH':'mm"
                        timeFormat="HH:mm"
                        minDate={new Date()}
                        maxDate={orderDate}
                        locale={ua}
                        showTimeSelect
                        filterTime={filterPassedTime}
                        minTime={setHours(setMinutes(new Date(), 0), 10)}
                        maxTime={setHours(setMinutes(new Date(), 0), 23)}
                    />
                    {errorData?.time_hour && <div className={classes.errorTitle}>{errorData['time_hour'][0]}</div>}
                    {errorData?.time_date && <div className={classes.errorTitle}>{errorData['time_date'][0]}</div>}
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