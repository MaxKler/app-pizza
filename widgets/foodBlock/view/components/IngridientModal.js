import React from 'react'
import classes from './../../../../styles/views/main/ingridient-modal.module.scss'

const IngridientModal = ({
    ingridient, 
    setIngridient, 
    food,
    activeSize,
    onAdd,
    ingridients
}) => {

    const closeModal = () => {
        setIngridient(false)
    }
    let foodPrice = '' 
    if (activeSize === 0 || activeSize === null) { 
        foodPrice = food.price
    } else if (activeSize === 1) {
        foodPrice = food.price_two
    } else if (activeSize === 2) {
        foodPrice = food.price_three
    }

    const addPizza = () => {
        onAdd(food, activeSize)
    }
    return (
        <div className={ ingridient ? [classes.modal__active, classes.modal].join(' ') : classes.modal}>
            <div className={classes.modal__window}>
                <div className={classes.modal__close} onClick={closeModal}>X</div>
                <div className={classes.modal__title}>Додатки до піци "{food.title}"</div>
                <div className={classes.modal__content}>
                    <div className={classes.modal__content__line}></div>
                    <div className={classes.block}>
                        <div className={classes.block__names}>
                            <div className={classes.block__names__name}>Інгрідієнт</div>
                            <div className={classes.block__names__name}>Кількість</div>
                            <div className={classes.block__names__name}>Ціна</div>
                        </div>
                        {ingridients.map((elem) => {
                                return (
                                    
                                <div className={classes.block__names}>
                            
                                   <div className={classes.block__names__name}>{elem.title}</div>
                                   <div className={classes.block__names__name}>Кількість</div>
                                   <div className={classes.block__names__name}>{elem.price}</div>
                                   </div>
                                )
                            })}
                            
                       
                    </div>
                    <div className={classes.modal__content__line}></div>
                </div>
                <div>
                   <div className={classes.modal__title}>піца "{food.title}"</div>
                   <div className={classes.modal__title}> "{foodPrice}"</div>
                </div>
                <button onClick={addPizza}>Add</button>
                <div onClick={closeModal} className={classes.modal__title}>Продовжити покупки</div>
            </div>
        </div>
    )
}

export default IngridientModal