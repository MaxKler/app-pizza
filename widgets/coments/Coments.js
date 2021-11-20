import React from 'react'
import classes from './../../styles/widgets/coments/coments-style.module.scss'

import cat from './../../project/image/widgets/coments/cat.png'
import Frame from './../../project/image/widgets/coments/Frame.png'
import phone from './../../project/image/widgets/coments/phone.png'

const Coments = () => {
    return (
    <div className={classes.coments}>
        <div className={classes.coments__blocks}>
            <div className={classes.coments__blockEmpty}>
            </div>
            <div className={classes.coments__block}>
                <div className={classes.coments__title}>Підписуйтесь на наш</div>
                <div className={classes.coments__title}>Instagram</div>
                <div className={classes.coments__text}>Там ще більше свіжих та соковитих новин.
                    А ще можна зробити замовлення через Direct та отримати <strong>5%</strong> знижки 
                    <span>
                        <img src={cat} alt=" "/>
                    </span>
                </div>
                <div className={classes.coments__pidpis}>
                    <img src={Frame} alt="" />
                </div>
            </div>
        </div>
        <div>
            <img src={phone} alt="" />
        </div>
    </div>
    )
}

export default Coments