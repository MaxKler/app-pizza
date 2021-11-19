import React from 'react'
import classes from './../../styles/widgets/coments/coments-style.module.scss'

import instPng from './../../project/image/widgets/coments/inst.png'

const Coments = () => {
    return (
       <div className={classes.coments}>
            <div className={classes.coments__block}>
                <img className={classes.coments__img} src={instPng} alt="" />
                <div className={classes.coments__title}>Підписуйтесь на наш канал в Instagram</div>
            </div>
       </div>
    )
}

export default Coments