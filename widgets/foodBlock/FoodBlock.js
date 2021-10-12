import React, { useEffect, useState} from "react";
import Cart from "../cart/Cart";
import FoodList from "./view/FoodList";
import CartBoxSvg from './ui/cartBox/CartBox.svg'
import MenuHide from "./view/components/MenuHide";
import BurgerMenu from "./ui/burgerMenu/BurgerMenu";
import CartBox from "./ui/cartBox/CartBox";
import upArrowSvg from './ui/upArrow/upArrow.svg'

const FoodBlock = ({foodBlock, classes, screen, setScreen, showCart, setShowCart, watchCart, cart, setCart,countProduct,setShowModal}) => {
     console.log(foodBlock)
       
const onAdd = (food, activeSize) => {
    const exist = cart.find(x => x.id === food.id)
    console.log(exist)
    if(exist) {
      setCart(cart.map(x => x.id === food.id ? {...exist, qty: exist.qty +1} : x))
      
    } else {
      setCart([...cart,  {...food, qty: 1, sizeType: food.sizeType.filter(el => el.id === activeSize)}])
      
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

 const [visibleMenu, setVisibleMenu] = useState(false)

    const showMenu = () => {
        setVisibleMenu(true)
    }
  
const [visibleIcon, setVisibleIcons] = useState(false)

function magic() {
    if (window.pageYOffset > 100) {
      setVisibleIcons(true)
    } else { 
    setVisibleIcons(false)
    }
}
const scrolUp = () => {
      window.scrollTo(0,0)
  }
  
  // When scrolling, we run the function
  useEffect(() => {
    window.onscroll = magic
  })


    return (
        <>
            <div >
                <div  >
                    
                            <div className={classes.pizzaType}>{foodBlock.category.title}</div>
                    
                </div>
                <div className={classes.pizza}>
                  {foodBlock.products.map((food,index) => {
                      console.log(food)
                    return (
                    <div className={ screen ? classes.pizza__card : classes.pizza__cardTwo}>
                        <div className={classes.pizza__block}>
                    <FoodList 
                        cart={cart}
                        key={food.id}
                        classes={classes} 
                        food={food}
                        index={index}
                        onAdd={onAdd}
                        products={foodBlock.pizzas}
                    />
                        </div>
                    </div>
                    )
                })}
                <MenuHide 
                    watchCart={watchCart}
                    CartBoxSvg={CartBoxSvg}
                    countProduct={countProduct}
                    screen={screen}
                    setScreen={setScreen}
                    visibleMenu={visibleMenu}
                    setVisibleMenu={setVisibleMenu}
                />
                <div className={visibleIcon ? classes.vis : classes.unvis}>
                <BurgerMenu
                    showMenu={showMenu}
                />
                <CartBox 
                    watchCart={watchCart}
                    countProduct={countProduct}
                />
                </div>
                <div onClick={scrolUp} className={visibleIcon ? [classes.vis, classes.upArrow].join(' ') : classes.unvis}>
                    <img className={classes.upArrowSvg} src={upArrowSvg} alt="" />
                </div>
                 <Cart
                    showCart={showCart}
                    setShowCart={setShowCart}
                    cart={cart}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    delItem={delItem}
                    countProduct={countProduct}
                    setShowModal={setShowModal}
                />
                </div>
            </div>
        </>
    )
}

export default FoodBlock