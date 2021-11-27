import React from "react";
import logoSvg from './../../../../../project/image/layouts/navbar/logo.png'
import cartSvg from './../../../../../project/image/layouts/navbar/svg/cart.svg'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF,  faInstagram } from "@fortawesome/free-brands-svg-icons";
import {useRouter} from 'next/router'

const NavbarDesk = ({
    classes, 
    openMenu, 
    langvich,
    setActiveLang, 
    actLang, 
    activeLang, 
    watchCart, 
    totalPrice, 
    countProduct,
    showButtonCart,
    showContent
}) => {

    const router = useRouter()

    return (
    <div className={classes.navbar__items }>
        <div className={classes.navbar__logo}>
        <Link href="/">
            <img className={classes.navbar__logoImg} src={logoSvg} alt="logo" />
        </Link>
        </div>
        <div className={showButtonCart ?  classes.navbar__items__positions : classes.navbar__items__positionsBlog }>
        { showContent && <div className={classes.navbar__services}>
            <div onClick={openMenu} className={classes.navbar__services__item}>Меню</div>
            <div onClick={() => router.push(`/#delivery`)}  className={classes.navbar__services__item}>Доставка</div>
            <div onClick={() => router.push(`/#blog`)}  className={classes.navbar__services__item}>Блог</div>
            <div className={classes.navbar__services__item}>Контакти</div>
        </div>}
        {!showContent && 
        <Link href="/">
            <div onClick={openMenu} className={classes.navbar__services__itemMain}>Головна</div>
        </Link>}
        <div className={classes.lang}>
            {langvich.map((lang, idx) => {
                return (
                    <div key={lang.id} onClick={() => setActiveLang(idx)} className={classes.lang__item} style={activeLang === lang.id ? actLang : {}}>{lang.title}</div>
                )
            })}
        </div>  
        <div className={classes.social__icons}>
            <Link href="https://www.facebook.com/charomapizzabar/">
                <FontAwesomeIcon className={classes.social__icon} icon={faFacebookF}></FontAwesomeIcon>
            </Link>    
            <Link href="https://www.instagram.com/ch_mrpl/">
               <FontAwesomeIcon className={classes.social__icon} icon={faInstagram}></FontAwesomeIcon>
            </Link>
         </div>
        <div className={classes.phone}>
            <div className={classes.phone__title}>Замовити доставку</div>
            <a href="tel:+380672522737">
               <div className={classes.phone__number}>067-252-27-37</div>
            </a>
        </div>
        </div>
        {showButtonCart &&
        <div  onClick={watchCart}  className={classes.cart}>
            <img className={classes.cartSvg} src={cartSvg} alt="cart" />
            <div className={classes.cart__items}>
                <div className={classes.cart__title}>Ваше замовлення</div>
                <div style={{display: 'flex', alignItems:"center"}}>
                     <div className={classes.cart__count}>{countProduct}</div>
                     <div className={classes.cart__razdel}> || </div>
                     <div className={classes.cart__total}>{totalPrice.toFixed(2)}</div>
                </div>
            </div>
        </div>
        }
    </div>
    )
} 

export default NavbarDesk