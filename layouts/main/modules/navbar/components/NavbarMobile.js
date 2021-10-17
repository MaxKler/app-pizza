import React, {useState} from "react";
import logoSvg from './../../../../../project/image/layouts/navbar/svg/logo.svg'
import instaMobileSvg from './../../../../../project/image/layouts/navbar/svg/instaMobile.svg'
import faceMobileSvg from './../../../../../project/image/layouts/navbar/svg/faceMobile.svg'
import phoneSvg from './../../../../../project/image/layouts/navbar/svg/phone.svg'
import cartSvg from './../../../../../project/image/layouts/navbar/svg/cart.svg'
import burgerSvg from './../../../../../project/image/layouts/navbar/svg/burger.svg'
import closeSvg from './../../../../../project/image/layouts/navbar/svg/close.svg'
import Link from 'next/link'

const NavbarMobile = ({
    classes,
    watchCart, 
    openMenu, 
    closeMenu, 
    setVisibleMenuBtn
}) => {

    const [visibleMenu, setVisibleMenu] = useState(false)

    const showMenu = () => {
        setVisibleMenu(true)
        closeMenu()
        setVisibleMenuBtn(false)
    }
    const hideMenu = () => {
        setVisibleMenu(false)
        setVisibleMenuBtn(true)
    }
    const HideAndShow = () => {
        setVisibleMenu(false)
        openMenu()
    }
  
    return (
    <div className={classes.navbar__mobile}>
        <div className={classes.navbar__itemsMobile}>
            <div className={classes.navbar__logo}>
               <img className={classes.navbar__logoImg} src={logoSvg} alt="logo" />
            </div>
            <div onClick={watchCart} className={classes.iconBox}>
                <div >
                   <img src={cartSvg} alt="cart" />
                </div>
            </div>
            <div className={classes.menuBtn} onClick={showMenu}>
                <img src={burgerSvg} alt="burg" />
            </div>
        </div>
        <div className={visibleMenu ? [classes.menuActive, classes.menu].join(' ') : classes.menu} >
            <div className={classes.menu__content} >
                <div className={classes.menu__logobar}>
                    <div className={classes.hideMenu} onClick={hideMenu}>
                       <img src={closeSvg} alt="close" />
                    </div>
                    <div className={classes.menu__logo}>
                        <img className={classes.menu__logoImg} src={logoSvg } alt="logo" />
                    </div>
                </div>
                <div className={classes.menuItems}>
                    <div  onClick={HideAndShow} className={classes.menuItem} >Меню</div>
                    <div  className={classes.menuItem} >Доставка</div>
                    <Link href="/blog">
                        <div  className={classes.menuItem} >Блог</div>
                    </Link>
                </div>
                <div>
                    <div className={classes.orderTitle}>Оформити доставку можна за телефоном</div>
                    <div className={classes.contactsMobile}>
                        <img src={phoneSvg} alt="phone" />
                        <a href="tel:+380672522737">
                           <div className={classes.contactsMobile__number}>067-252-27-37</div>
                        </a>
                    </div>     
                    <hr  style={{width: '50%', color: '#666666'}}/>
                    <div className={classes.social}>
                        <img className={classes.social__logo} src={instaMobileSvg} alt="insta" />
                        <img className={classes.social__logo} src={faceMobileSvg} alt="face" />
                    </div>
                </div>
                <div className={classes.workTime}>10:00 - 22:00 без вихідних</div>
            </div>
        </div>
    </div>
    )
} 

export default NavbarMobile