import React, { useState } from "react";
import perchick from './../../../project/image/views/main/svg/perchick.svg'
import brokkoli from './../../../project/image/views/main/svg/brokkoli.svg'
import heart from './../../../project/image/views/main/svg/heart.svg'
import discount from './../../../project/image/views/main/svg/discount.svg'
import newItem from './../../../project/image/views/main/svg/newItem.svg'
import { NET } from "../../../network";
import AddCart from "./components/AddCart";

import checkSvg from './../../../project/image/views/main/svg/checkSvg.svg'
import IngridientModal from "./components/IngridientModal";



const FoodList = ({
    food, 
    classes, 
    index, 
    cart, 
    setCart, 
    onAdd, 
    onRemove, 
    qty,
    ingridients
}) => {

    const typeSize = [
        {
           id: 0,
           size: food.status_opt_start
        }, 
        {
            id: 1,
            size: food.status_opt_medium,
            price: food.price_two - food.price 
        }, 
        {
            id: 2,
            size: food.status_opt_end ,
            price: food.price_three - food.price 
            
        }  
    ]
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
      let priceValue = 0
      if (activeSize === 0 || activeSize === null) {
          priceValue = food?.price
      } else if (activeSize === 1) {
          priceValue = food?.price_two
      } else if (activeSize === 2) {
          priceValue = food?.price_three
      } 

      const [ingridient, setIngridient] = useState(false)

      const showIngridientModal = () => {
          setIngridient(true)
          console.log(activeSize)
      }

    

    return (
        <div  onMouseEnter={changeBackground} 
              onMouseLeave={changeBackground1} className={classes.ttt} key={index} >
            <div className={classes.pizza__block__images}>
               <img className={classes.pizzaImage}  src={`${NET.WEB_URL}/${food.image}`} alt='pizza' />
               {icon ? 
               <img className={classes.pizza__block__icon} src={icon} alt="" />
               : 
               <></>
               }
                <div className={visiblePopap ? classes.popap : classes.popapdisable}>
                   <div className={classes.popap__text}>
                   {food.text}
                   </div>
                </div>
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
                {food.title}
            </div>
            <div className={classes.pizza__block__items}>
                <div className={classes.discount}>
                    {food.status === 'sale' ?  
                        <div className={classes.discount__value}>{priceValue * 1.2} грн</div> 
                        : <></>}
                </div> 
                <div className={classes.pizza__block__price}>{priceValue}
                    <span className={classes.pizza__block__grn}>грн</span>
                </div>
                {food.weight && <div className={classes.pizza__block__weight}>{food.weight} гр</div>}
            </div>
            <div className={classes.pizza__block__itemTwo}>
                    {food.status_opt_start && <div key={food.id} className={classes.pizza__sizeBlock}>
                        {typeSize.map((size, index) => {
                            return (
                                <div key={size.size} onClick={() => onSelectSize(index)}
                                    className={activeSize === index ?
                                    [classes.pizza__sizeBlock__size, classes.pizza__sizeBlock__active].join(' ') 
                                     : classes.pizza__sizeBlock__size}>{size.size}
                                    {size.price &&  <div>
                                       + {size.price} грн
                                    </div> } 
                                </div>
                                 )
                             })}
                    </div>}
            </div> 
           {food.is_pizza === "pizza" &&
            <div onClick={showIngridientModal} className={classes.ingridients}>
                <div className={classes.ingridients__title}>Додати інгрідієнти:</div>
                <div className={classes.ingridients__icon}>
                    <div className={classes.ingridients__icon__div}>
                       <img src={checkSvg} className={classes.ingridients__icon__icon} />
                    </div>
                </div>
            </div>
           } 
            <IngridientModal 
               ingridient={ingridient}
               setIngridient={setIngridient}
               food={food}
               activeSize={activeSize}
               onAdd={onAdd}
               onRemove={onRemove}
               ingridients={ingridients}
               cart={cart}
            />
                <div >
                    <AddCart 
                        classes={classes}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        qty={qty}
                        food={food}
                        activeSize={activeSize}
                    />
                </div>  
        </div>   
    )           
}

export default FoodList
