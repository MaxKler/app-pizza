import React from "react";
import FooterView from "./view/FooterView";

const Footer = ({
    watchCart, 
    totalPrice, 
    countProduct, 
    mainData,
    showButtonCart=false,
    showContent=false,
    screen
}) => {
    return (
       <FooterView 
            screen={screen} 
            watchCart={watchCart}
            totalPrice={totalPrice}
            countProduct={countProduct}
            mainData={mainData}
            showButtonCart={showButtonCart}
            showContent={showContent}
       />
    )
}

export default Footer