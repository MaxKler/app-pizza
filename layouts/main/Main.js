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
    showCart,
    setShowCart,
    mainData,
    showButtonCart = false,
    showContent = false
}) => {

    const [visibleMenuBtn, setVisibleMenuBtn] = useState(true)
    

    const closeMenu = () => {
      setScreen(false)
      setVisibleMenuBtn(true)
    }
    const openMenu = () => {
      setScreen(!screen)
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
            showCart={showCart}
            setShowCart={setShowCart}
            showButtonCart={showButtonCart}
            showContent={showContent}
        />
        <div className={classes.content}>
            <Menu  
                closeMenu={closeMenu}
                screen={screen}
                setScreen={setScreen}
                mainData={mainData}
                showContent={showContent}
                setScreen={setScreen}
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