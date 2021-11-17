import React from 'react'
import classes from './../../../../styles/views/main/ingridient-modal.module.scss'

const IngridientModal = ({ingridient, setIngridient, food}) => {

    const closeModal = () => {
        setIngridient(false)
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IngridientModal