import React from "react";
import classes from './../../../../styles/views/main/food-block.module.scss'
import logoSvg from './../../../../project/image/layouts/navbar/svg/logo.svg'
import instaMobileSvg from './../../../../project/image/layouts/navbar/svg/instaMobile.svg'
import faceMobileSvg from './../../../../project/image/layouts/navbar/svg/faceMobile.svg'
import phoneSvg from './../../../../project/image/layouts/navbar/svg/phone.svg'
import closeSvg from './../../../../project/image/layouts/navbar/svg/close.svg'
import Link from 'next/link'

const MenuHide = ({ visibleMenu, setVisibleMenu, watchCart, screen, setScreen, countProduct, CartBoxSvg}) => {


    const hideMenu = () => {
        setVisibleMenu(false)
    }

    const openMenu = () => {
        setScreen(!screen)
        
    }
    
   
    return (
        <div className={visibleMenu ? [classes.menuActive, classes.menu].join(' ') : classes.menu} >
            <div className={classes.menu__content} >
                <div className={classes.menu__logobar}>
                    <div className={classes.hideMenu} onClick={hideMenu}>
                       <img  src={closeSvg} alt="close" />
                    </div>
                    <div className={classes.menu__logo}>
                        <img className={classes.menu__logoImg} src={logoSvg } alt="logo" />
                    </div>
                </div>
                <div className={classes.menuItems}>
                    <div  onClick={openMenu} className={classes.menuItem} >Меню</div>
                    <div  className={classes.menuItem} >Доставка</div>
                    <Link href="/blog">
                        <div  className={classes.menuItem} >Блог</div>
                    </Link>
                </div>
                <div>
                    <div className={classes.orderTitle}>Оформити доставку можна за телефоном</div>
                    <div className={classes.contactsMobile}>
                        <img className={classes.contactsMobile__img} src={phoneSvg} alt="phone" />
                        <a href="tel:+380672522737">
                            <div className={classes.contactsMobile__number}>067-252-27-37</div>
                        </a>
                    </div>     
                    <hr  style={{width: '50%', color: '#666666'}}/>
                    <div className={classes.social}>
                        <Link href="https://www.instagram.com/ch_mrpl/">   
                            <img className={classes.social__logoI} src={instaMobileSvg} alt="insta" />
                        </Link>    
                        <Link href="https://www.facebook.com/charomapizzabar/">
                             <img className={classes.social__logoF} src={faceMobileSvg} alt="face" />
                         </Link>    
                    </div>
                </div>
                <div onClick={watchCart} className={classes.menuCart}>
                    <img className={classes.hideMenuCart} src={CartBoxSvg} alt="" />
                    <div className={classes.menuCart__item}>{countProduct}</div>
                </div>
                <div className={classes.workTime}>10:00 - 22:00 без вихідних</div>
            </div>
        </div>
    )
} 

export default MenuHide