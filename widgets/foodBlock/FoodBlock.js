import React, { useEffect, useState} from "react";
import Cart from "../cart/Cart";
import FoodList from "./view/FoodList";
import CartBoxSvg from './ui/cartBox/CartBox.svg'
import MenuHide from "./view/components/MenuHide";
import BurgerMenu from "./ui/burgerMenu/BurgerMenu";
import CartBox from "./ui/cartBox/CartBox";
import upArrowSvg from './ui/upArrow/upArrow.svg'

const FoodBlock = ({
    foodBlock,
    classes, 
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
    idx,
    onAdd,
    onRemove
}) => {



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
            <div key={idx} id={`category${foodBlock.category.id}`}> 
                    <div  className={classes.pizzaType}>{foodBlock.category.title}</div>
                <div className={classes.pizza}>
                  {foodBlock.products.map((food,index) => {
                      let qty = cart.filter(el => el.id === food.id)
                      return (
                          <>{food.status === "new" ? <></> :
                          <>
                          {food.type === "main" &&
                        <div className={ screen ? classes.pizza__card : classes.pizza__cardTwo}>
                            <div className={classes.pizza__block}>
                                <FoodList 
                                    cart={cart}
                                    key={food.id}
                                    classes={classes} 
                                    food={food}
                                    index={index}
                                    onAdd={onAdd}
                                    onRemove={onRemove}
                                    qty={qty.length ? qty[0].qty : 0}
                                />
                            </div>
                        </div>
                  }</>}</>
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
                </div>
            </div>
        </>
    )
}

export default FoodBlock