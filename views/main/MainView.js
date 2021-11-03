import React, {useState} from "react";
import classes from './../../styles/views/main/main-view.module.scss'
import FoodBlock from "../../widgets/foodBlock/FoodBlock";
import DeliveryTerms from "../../widgets/deliveryterms/DeliveryTerms";
import Cart from "../../widgets/cart/Cart";
import NewProducts from "../../widgets/foodBlock/view/NewProducts";


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
    newProducts
}) => {
    
    const [activeSize, setActiveSize] = useState(0)
    
    const onAdd = (food, activeSize) => {
        console.log(food, activeSize)
        const typeSize = [
            {
               id: 0,
               size: food.status_opt_start
            }, 
            {
                id: 1,
                size: food.status_opt_end
            }  
        ]
        console.log(activeSize)
        const exist = cart.find(x => x.id === food.id)
        console.log(exist)
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
    return (
        <div>
            <div className={classes.mainView__title}>У самому серці твого міста!</div>
            <div className={classes.mainView}></div>
            <div className={classes.ttt}>
                <div className={classes.pizzaType}>Новинки</div>
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
                />
            </div>
        </div>
    )
}
export default MainView