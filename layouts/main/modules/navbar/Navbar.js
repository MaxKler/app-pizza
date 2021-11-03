import React, { useState } from "react";
import classes from './../../../../styles/layouts/main/navbar-style.module.scss'

import NavbarDesk from "./components/navbarDesk";
import NavbarMobile from "./components/NavbarMobile";

const Navbar = ({
    openMenu, 
    closeMenu, 
    watchCart, 
    cart, 
    totalPrice,
    countProduct,
    visibleMenuBtn,
    setVisibleMenuBtn,
    setShowCart, 
    showButtonCart,
    showCart, 
    showContent,
    
}) => {
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
                showButtonCart={showButtonCart}
                showContent={showContent}
                
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
                setVisibleMenuBtn={setVisibleMenuBtn}
                setShowCart={setShowCart}
                showButtonCart={showButtonCart}
                showContent={showContent}
               
            />
            {showContent &&
            <div>
           {!showCart && <div onClick={openMenu} className={visibleMenuBtn ? classes.mobileMenuBtn : classes.mobileMenuBtn__none}>menu</div>} 
            </div>
            }
        </div>
    )
}
export default Navbar


  