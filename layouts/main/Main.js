import React, {useState} from "react";
import Content from "./modules/Content";
import Menu from "./modules/Menu";
import classes from './../../styles/layouts/main/main-layuot.module.scss'
import Navbar from "./modules/navbar/Navbar";

const Main = ({
    children, 
    screen, 
    setScreen, 
    watchCart, 
    cart, 
    totalPrice,
    countProduct,
}) => {

    const [visibleMenuBtn, setVisibleMenuBtn] = useState(true)
    

    const closeMenu = () => {
      setScreen(false)
      setVisibleMenuBtn(true)
    }
    const openMenu = () => {
      setScreen(true)
      setVisibleMenuBtn(false)
    }


    return (
    <div className={classes.container}>
        <Navbar
            openMenu={openMenu}
            closeMenu={closeMenu}
            watchCart={watchCart}
            totalPrice={totalPrice}
            cart={cart}
            countProduct={countProduct}
            visibleMenuBtn={visibleMenuBtn}
            setVisibleMenuBtn={setVisibleMenuBtn}
        />
        <div className={classes.content}>
            <Menu  
                closeMenu={closeMenu}
                screen={screen}
              
            />
            <Content 
                children={children}
                screen={screen}
            />
        </div>
     </div>
    )
}

export default Main