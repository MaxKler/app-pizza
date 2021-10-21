import React from "react";
import FooterView from "./view/FooterView";

const Footer = ({watchCart, totalPrice, countProduct, mainData}) => {
    return (
       <FooterView 
            watchCart={watchCart}
            totalPrice={totalPrice}
            countProduct={countProduct}
            mainData={mainData}
       />
    )
}

export default Footer