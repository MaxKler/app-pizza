import React, {useState} from "react";
import classes from './../../styles/views/main/main-view.module.scss'
import FoodBlock from "../../widgets/foodBlock/FoodBlock";
import DeliveryTerms from "../../widgets/deliveryterms/DeliveryTerms";
import Cart from "../../widgets/cart/Cart";
import NewProducts from "../../widgets/foodBlock/view/NewProducts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import AddToCartModal from "../../widgets/cart/components/AddToCartModal";

import { NET } from "../../network";



const MainView = ({
    mainData,
    screen, 
    setScreen, 
    showCart,
    setShowCart, 
    watchCart,
    cart, 
    setCart,
    countProduct, 
    showModal,
    setShowModal,
    newProducts, 
    addToOrder,
    slider
}) => {

    let settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [addToCartItem, setAddToCartItem] = useState(false)

    const [showAddToCartModal, setShowAddToCartModal] = useState(false)
   
    const clickShowAddToCartModal = () => {
        setShowAddToCartModal(true)
        setTimeout(() => {
            setShowAddToCartModal(false)
        }, 2500)
    }
    
    const onAdd = (food, activeSize) => {

        const typeSize = [
            {
               id: 0,
               size: food.status_opt_start
            }, 
            {
                id: 0,
                size: food.status_opt_medium
             }, 
            {
                id: 1,
                size: food.status_opt_end
            }  
        ]
        const exist = cart.find(x => x.id === food.id)
        setAddToCartItem(food?.title)
        clickShowAddToCartModal()
        if(exist) {
          setCart(cart.map(x => x.id === food.id ? {...exist, qty: exist.qty +1} : x))
        } else {
          setCart([...cart,  {...food, qty: 1, activeOption: activeSize ? activeSize : null}])
        } 
    }
   
    const onRemove = (food) => {
        const exist = cart.find(x => x.id === food.id)
        if (exist.qty === 1) {
           setCart(cart.filter(x => x.id !== food.id))
        } else {
           setCart(cart.map((x) =>
           x.id === food.id ? {...exist, qty: exist.qty - 1} : x))
        }
    }
    
    const delItem = (id) => {
        setCart(cart.filter((elem) => elem.id !== id))
    }

   console.log(slider)
    return (
        <div>
            <div className={classes.mainView__title}>У самому серці твого Маріуполя!</div>
            <Slider {...settings}>
                {slider.map((elem) => {
                    return (
                    // <div style={{backgroundImage: `url(${NET.WEB_URL}/${elem.image})`}} className={classes.mainView}>
                    <div >
                        <div className={classes.mainView} style={{backgroundImage: `url(${NET.WEB_URL}/${elem.image})`}}>
                        </div>
                    </div>
                    
                    )
                })}
                   
            </Slider>
            
           
            <div className={classes.ttt}>
                <div className={classes.pizzaType}>Хіт продажів</div>
                     <NewProducts 
                     showCart={showCart}
                     setShowCart={setShowCart}
                     screen={screen}
                     setScreen={setScreen}
                     newProducts={newProducts}
                     classes={classes} 
                     watchCart={watchCart}
                     cart={cart}
                     setCart={setCart}
                     onAdd={onAdd}
                     onRemove={onRemove}
                     delItem={delItem}
                     countProduct={countProduct}
                     showModal={showModal}
                     setShowModal={setShowModal}
                     />
            <DeliveryTerms screen={screen} />
            {mainData && mainData.length && mainData.map((foodBlock, idx) => (
                <FoodBlock  
                    idx={idx}
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
                    onRemove={onRemove}
                    delItem={delItem}
                    countProduct={countProduct}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            ))}
             <AddToCartModal 
                    addToCartItem={addToCartItem} 
                    showAddToCartModal={showAddToCartModal}
                />
            <Cart
                    showCart={showCart}
                    setShowCart={setShowCart}
                    cart={cart}
                    setCart={setCart}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    delItem={delItem}
                    countProduct={countProduct}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    addToOrder={addToOrder}
                />
            </div>
        </div>
    )
}
export default MainView