import React from "react"
import classes from './../../styles/widgets/deliveryterms/del-terms-style.module.scss'
import chPng from './../../project/image/widgets/delTerms/ch.png'
import delPng from './../../project/image/widgets/delTerms/deliv.png'
import del1Png from './../../project/image/widgets/delTerms/deliv1.png'
import del2Png from './../../project/image/widgets/delTerms/deliv2.png'
import del3Png from './../../project/image/widgets/delTerms/deliv3.png'

const DeliveryTerms = ({screen}) => {
    return (
        <div id={`delivery`} className={classes.delivery}>
            <div className={classes.delivery__firstBlock}>
                <img className={classes.delivery__firstBlock__img} src={chPng} alt="" />
                <div className={classes.delivery__firstBlock__text}>Ми 
                       довіряємо своїм клієнтам, тому розрахунок відбувається
                       при отриманні замовлення, а вже готівкою чи карткою – 
                       обираєте ви. Просто зазначте при оформленні замовлення,
                       що бажаєте розрахуватись з кур’єром карткою, або повідомте 
                       про це оператора по телефону.
                </div>
            </div>
            <div className={classes.delivery__groups}>
                <div className={screen ? classes.delivery__groups__card : classes.delivery__groups__cardTwo}>
                    <div className={classes.delivery__groups__block}>
                        <img className={classes.delivery__groups__img} src={delPng} alt="" />
                        <div className={classes.delivery__groups__text}>Знайдіть страву яку бажаєте замовити</div>
                    </div>
                </div>
                <div className={screen ? classes.delivery__groups__card : classes.delivery__groups__cardTwo}>
                    <div className={classes.delivery__groups__block}>
                        <img className={classes.delivery__groups__img} src={del1Png} alt="" />
                        <div className={classes.delivery__groups__text}>Додайте до кошику усе що бажаєте</div>
                    </div>
                </div>
                <div className={screen ? classes.delivery__groups__card : classes.delivery__groups__cardTwo}>
                    <div className={classes.delivery__groups__block}>
                        <img className={classes.delivery__groups__img} src={del2Png} alt="" />
                        <div className={classes.delivery__groups__text}>Оберіть спосіб оплати замовлення: онлайн чи оплата на місці</div>
                    </div>
                </div>
                <div className={screen ? classes.delivery__groups__card : classes.delivery__groups__cardTwo}>
                    <div className={classes.delivery__groups__block}>
                        <img className={classes.delivery__groups__img} src={del3Png} alt="" />
                        <div className={classes.delivery__groups__text}>Чекайте на своє замовлення або зробіть самовивіз</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryTerms