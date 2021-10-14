import React from "react";
import classes from './../../styles/views/main/main-view.module.scss'
// import { foodBlock } from ".?./../data";
import FoodBlock from "../../widgets/foodBlock/FoodBlock";
import DeliveryTerms from "../../widgets/deliveryterms/DeliveryTerms";


const MainView = ({
    mainData,
    screen, 
    setScreen, 
    showCart,
    setShowCart, 
    watchCart,
    onAdd, 
    cart, 
    setCart,
    countProduct, 
    showModal,
    setShowModal
}) => {
    
    return (
        <div>
            <div className={classes.mainView__title}>У самому серці твого міста!</div>
            <div className={classes.mainView}></div>
            <div className={classes.ttt}>
            {mainData && mainData.length && mainData.map((foodBlock, idx) => (
                <FoodBlock  
                    showCart={showCart}
                    setShowCart={setShowCart}
                    screen={screen}
                    setScreen={setScreen}
                    foodBlock={foodBlock}
                    classes={classes} 
                    watchCart={watchCart}
                    cart={cart}
                    setCart={setCart}
                    onAdd={onAdd}
                    countProduct={countProduct}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            ))}
            <DeliveryTerms />
            </div>
        </div>
    )
}
export default MainView