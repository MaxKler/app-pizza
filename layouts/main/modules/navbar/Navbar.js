import React, { useState } from "react";
import classes from './../../../../styles/layouts/main/navbar-style.module.scss'

import NavbarDesk from "./components/navbarDesk";
import NavbarMobile from "./components/NavbarMobile";

const Navbar = ({openMenu, closeMenu, watchCart, cart, totalPrice,countProduct}) => {
    const [activeLang, setActiveLang] = useState(0)
    const actLang = {
        color: 'white'
    }
    const langvich = [
        {
            id: 0,
            title: 'UA'
        },
        {
            id: 1,
            title: 'RU'
        }
    ]
    
    return (
        <div className={classes.navbar}>
            <NavbarDesk 
                cart={cart}
                activeLang={activeLang} 
                setActiveLang={setActiveLang}
                actLang={actLang} 
                langvich={langvich} 
                openMenu={openMenu} 
                classes={classes}
                watchCart={watchCart}
                totalPrice={totalPrice}
                countProduct={countProduct}
                
            />
            <NavbarMobile
                activeLang={activeLang} 
                setActiveLang={setActiveLang}
                actLang={actLang} 
                langvich={langvich} 
                classes={classes}
                openMenu={openMenu} 
                closeMenu={closeMenu}
                watchCart={watchCart}
            />
            <div onClick={openMenu} className={classes.mobileMenuBtn} >menu</div>
        </div>
    )
}
export default Navbar


  