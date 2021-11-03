import React from "react";
import FoodList from "./FoodList";

const NewProducts = ({
    newProducts,
   
    screen,
    
    classes,
   
    cart,
   
    onAdd,
    onRemove,
    
}) => {
    return (
        <>
        {newProducts.map((food,index) => {
            let qty = cart.filter(el => el.id === food.id)
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
                          onRemove={onRemove}
                          qty={qty.length ? qty[0].qty : 0}
                      />
                  </div>
              </div>
          )
      })}
      </>
    )
}

export default NewProducts