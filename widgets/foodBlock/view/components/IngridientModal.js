import React, {useState} from 'react'
import classes from './../../../../styles/views/main/ingridient-modal.module.scss'
import IngrBlock from './IngrBlock'

const IngridientModal = ({
    ingridient, 
    setIngridient, 
    food,
    activeSize,
    onAdd,
    onRemove,
    ingridients,
    cart
}) => {

    const closeModal = () => {
        setIngridient(false)
    }
    let foodPrice = '' 
    if (activeSize === 0 || activeSize === null) { 
        foodPrice = food.price
    } else if (activeSize === 1) {
        foodPrice = Number(food.price_two)
    } else if (activeSize === 2) {
        foodPrice = Number(food.price_three)
    }

    const [ingridientData, setIngridientData] = useState([])

    const addPizza = () => {
        onAdd(food, activeSize, ingridientData)
        setIngridient(false)
        
    }  


    let ingrPrice = 0 
    ingridientData.map((ing) => {
        console.log(ing)
        ingrPrice = ingrPrice + ing.qty * ing.price
        
    })
    console.log(ingrPrice)
    return (
        <div className={ ingridient ? [classes.modal__active, classes.modal].join(' ') : classes.modal}>
            <div className={classes.modal__window}>
                <div className={classes.modal__close} onClick={closeModal}>X</div>
                <div className={classes.modal__title}>Додатки до піци "{food.title}"</div>
                <div className={classes.modal__content}>
                    <div className={classes.modal__content__line}></div>
                    <div className={classes.block}>
                        <div className={classes.block__cat}>
                            <div className={classes.block__names__name}>Інгрідієнт</div>
                            <div className={classes.block__names__name}>Кількість</div>
                            <div className={classes.block__names__name}>Ціна</div>
                        </div>
                        {ingridients.map((elem) => {
                      
                                return (        
                                <IngrBlock 
                                    classes={classes}
                                    elem={elem}
                                    ingridientData={ingridientData}
                                    setIngridientData={setIngridientData}
                                />
                                )
                            })}
                    </div>
                    <div className={classes.modal__content__line}></div>
                </div>
                <div className={classes.total}>
                    <div className={classes.total__pizza}>
                        <div className={classes.total__title}>піца "{food.title}"</div>
                        <div className={classes.total__price}>{foodPrice } грн</div>
                    </div>
                    <div className={classes.total__pizza}>
                        <div className={classes.total__title}>Додатки:</div>
                        <div className={classes.total__price}> {ingrPrice}грн</div>
                    </div>
                    <div className={classes.total__pizza1}>
                        <div className={classes.total__title}>Усього:</div>
                        <div className={classes.total__price}>{foodPrice + ingrPrice} грн</div>
                    </div>
                </div>
                <div className={classes.addBtn} onClick={addPizza}>
                    <div className={classes.addBtn__btn}>Додати піцу до кошика</div>
                </div>
                    
                {/* <div onClick={closeModal} className={classes.continue}>Продовжити покупки</div> */}
            </div>
        </div>
    )
}

export default IngridientModal