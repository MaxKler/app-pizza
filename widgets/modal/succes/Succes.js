import React from "react";
import classes from './../../../styles/widgets/succes/succes-style.module.scss'
import succesSvg from './../../../project/image/widgets/succes/succes.svg'
import Link from 'next/link'

const Succes = ({
    showModal, 
    setShowModal,
    setShowCart, 
    succesData,
    setCart
}) => {
  console.log(succesData)
    const closeModal = () => {
        setShowCart(false)
        document.querySelector('html').style.overflow = 'visible'
        setShowModal(false)
        setCart([])
        
    }

    return (
        <div className={ showModal ? [classes.succes__active, classes.succes].join(' ') : classes.succes}>
            <div className={classes.succes__window}>
                <div className={classes.succes__titles}>
                    <div className={classes.succes__title}>Успіх</div>
                    <img src={succesSvg} alt="" />
                </div>
                <div className={classes.succes__text}>Дякуємо за ваш вибір!</div>
                <div className={classes.succes__text}>Замовлення <strong>№ {succesData}</strong> прийнято в обробку</div>
                <div className={classes.succes__text}>Найближчим часом з Вами зв’яжеться менеджер для уточнення Вашого замовлення</div>
                <div onClick={closeModal} className={classes.succes__textSecond}>Замовити ще одну доставку</div>
            </div>
        </div>
    )
}

export default Succes