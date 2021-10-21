import React, { useState } from "react";
import cartSvg from './../../../project/image/layouts/navbar/svg/cart.svg'
import perchick from './../../../project/image/views/main/svg/perchick.svg'
import brokkoli from './../../../project/image/views/main/svg/brokkoli.svg'
import heart from './../../../project/image/views/main/svg/heart.svg'
import discount from './../../../project/image/views/main/svg/discount.svg'
import newItem from './../../../project/image/views/main/svg/newItem.svg'
import { NET } from "../../../network";
import AddCart from "./components/AddCart";



const FoodList = ({
    food, 
    classes, 
    index, 
    cart, 
    setCart, 
    onAdd, 
    onRemove, 
    qty
}) => {

    
   const [activeSize, setActiveSize] = useState(0)
  
   const onSelectSize = (index) => {
       setActiveSize(index)
   }
    let im = ''

    if (food.status_eat === 'chill') {
       im = perchick
    } else if (food.status_eat === 'vegan') {
        im = brokkoli
    } else if (food.status_eat === 'favorite') {
        im = heart
    } else {
        im = ''
    }

    let icon = ''

    if (food.status === 'sale') {
        icon = discount
     } else if (food.status === 'new') {
         icon = newItem
     } else {
         icon = ''
     }
     
     const [visiblePopap, setVisiblePopap] = useState(false)

     function changeBackground(e) {
        setVisiblePopap(true)
      }
      function changeBackground1(e) {
        setVisiblePopap(false)
      }

    return (
        <div className={classes.ttt} key={index} >
            <div className={classes.pizza__block__images}>
               <img className={classes.pizzaImage}  src={`${NET.WEB_URL}/${food.image}`} alt='pizza' />
               {icon ? 
               <img className={classes.pizza__block__icon} src={icon} alt="" />
               : 
               <></>
               }
                <div className={visiblePopap ? classes.popap : classes.popapdisable}>#сир Моцарела, #сир Дорблю, 
                  #сир Пармезан, #соус Карбонара, #вершковий соус</div>
                <div className={classes.popapBlock} onMouseEnter={changeBackground} 
                    onMouseLeave={changeBackground1}> 
                    <div className={classes.popapBlock__point}></div> 
                    <div className={classes.popapBlock__point}></div> 
                    <div className={classes.popapBlock__point}></div> 
                </div>
            </div>
            <div className={classes.pizza__block__name}>
                {im ? 
                   <img className={classes.pizza__block__status} src={im} alt="" />
                   :
                   <></>
                }
                {food.title}</div>
                <div className={classes.pizza__block__item}>
                    <div key={food.id} className={classes.pizza__sizeBlock}>
                        {/* {food.sizeType.map((size, index) => {
                            return (
                                <div key={size.size} onClick={() => onSelectSize(index)}
                                    className={activeSize === index ?
                                    classes.pizza__sizeBlock__active 
                                     : classes.pizza__sizeBlock__size}>{size.size} см</div>
                                 )
                             })} */}
                    </div>
                    <div className={classes.pizza__block__items}>
                        <div className={classes.discount}>
                            {food.status === 'sale' ?  
                            <div className={classes.discount__value}>{food.price * 0.2} грн</div> 
                            : <></>}
                        </div>
                        <div className={classes.pizza__block__price}>{food.price}
                            <span className={classes.pizza__block__grn}>грн</span>
                        </div>
                        <div className={classes.pizza__block__weight}>{food.weight} гр</div>
                    </div>
                </div> 
                <div >
                    <AddCart 
                        classes={classes}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        qty={qty}
                        food={food}
                    />
                )} 
                </div>  
        </div>    
    )           
}

export default FoodList
// onClick={() => onAdd(food, activeSize)}

// {cart.map((item) => {
//     return (
//         <div onClick={changeBtn} className={classes.buyBtn}>
//     {cartBtn ? 
//     <div style={{display:'flex'}}>
//         <span onClick={() => onRemove(item)} >-</span>
//         <div >{item.qty}</div>
//         <span onClick={() => onAdd(item)} >+</span>
//     </div> :
//     <div className={classes.buyBtn__add}>Додати до кошика + 1</div>
//     }
//     <div className={classes.buyBtn__cart}>
//         <img className={classes.buyBtnCart} src={cartSvg} alt="cart" />
//     </div>
// </div>  
//     )
// }
// )}