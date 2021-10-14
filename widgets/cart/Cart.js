import React, { useState } from "react";
import classes from './../../styles/widgets/cart/cart-style.module.scss'
import pizzaSvg from './../../project/image/cart/pizza.svg'
import trashSvg from './../../project/image/cart/trash.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import closeCartSvg from './../../project/image/layouts/navbar/svg/closeMenu.svg'
import OrderInputBlock from "../orderInputBlock/OrderInputBlock";
import {NET} from './../../network'
import Succes from "../modal/succes/Succes";

const Cart = ({
    showCart, 
    setShowCart, 
    cart, 
    onAdd, 
    onRemove, 
    delItem,
    countProduct, 
    showModal,
    setShowModal
}) => {
    const productPrice = cart.reduce((a, c) => a + c.price * c.qty, 0)
    const deliveryPrice = productPrice * 0.1
    const totalPrice = productPrice + deliveryPrice
    const [orderData, setOrderData] = useState({
        delivery_status: 'people',
        time_status: 'speed',
        pay_status: 'money'
    })
    const free = 1000
    let freeD = free - productPrice
     if (freeD <= 0) {
         freeD = 0
     }
    const closeCart = () => {
        setShowCart(false)
        document.querySelector('html').style.overflow = 'visible'
    }

    const [orderMenu, setOrderMenu] = useState(false)

    const showOrder = () => {
        setOrderMenu(true)
    }
    const [errorData, setErrorData] = useState({})
    const [succesData, setSuccesData] = useState()
    const makeOrder = async () => {
        const res = await fetch(`${NET.APP_URL}/order`, {
            method: 'POST',
            body: JSON.stringify({
                ...orderData,
                cart: localStorage.getItem('cart')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if (res.status === 401) {
            setErrorData(data.error)
        } else if (res.status === 201) {
            setShowModal(true)
            setSuccesData(data.data.id)
        }
        console.log(data)
    } 

   


    

    return (
        <div className={showCart ? classes.cart : classes.cartNone}>
            <div onClick={closeCart} className={classes.closeCart}>
                <img src={closeCartSvg} alt="" />
            </div>
            <div className={classes.cart__content}>
                <div className={classes.cart__title}>Кошик</div>
                <hr  className={classes.hr} />
                <div className={classes.cart__items}>
                    <div className={classes.order}>
                        {cart.map((item) => {
                            return (
                            <>
                            <div className={classes.order__block}>
                                <div className={classes.order__size}>
                                    <img src={pizzaSvg} alt="" />
                                </div>
                                <div className={classes.order__size}>
                                    <div className={classes.order__name}>{item.name}
                                        {item.sizeType && item.sizeType.map((size) => {
                                            return (
                                                <div className={classes.order__type}>{size.size} см</div>   
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={classes.order__size1}>
                                    <div className={classes.order__count}>
                                        <span onClick={() => onRemove(item)} className={classes.order__count__addRem}>-</span>
                                        <div className={classes.order__count__count}>{item.qty}</div>
                                        <span onClick={() => onAdd(item)} className={classes.order__count__addRem}>+</span>
                                    </div>
                                </div>
                                <div className={classes.order__size1}>
                                    <div className={classes.order__price}>{item.price * item.qty}</div>
                                </div>
                                <div className={classes.order__size2}>
                                    <img onClick={() => delItem(item.id)} className={classes.trash} src={trashSvg} alt="" />
                                </div>
                            </div>
                            <hr className={classes.hrCenter}/>
                            </>
                            )
                        })}
                        {freeD === 0 ? <div className={classes.deliveryFree}>
                            Вітаємо! У вас безкоштовна доставка
                        </div>
                        : <div className={classes.deliveryFree}>До безкоштовної доставки залишилось замовити {freeD} грн</div>
                        }
                        <div className={classes.deliveryFree}>Відправляючи цю форму, Ви погоджуєтеся з політикою щодо обробки персональних даних.</div>
                    </div>
                    <div className={classes.order__check}>
                        <div className={classes.check}>
                            <div className={classes.check__block}>
                                <div className={classes.check__block__title}>Чек замовлення</div>
                                <div className={classes.check__block__items}>
                                     <div className={classes.items}>
                                         <div className={classes.items__title}>Усьго товарів:</div>
                                         <div className={classes.items__count}>{countProduct}</div>
                                     </div>
                                     <div className={classes.items}>
                                         <div className={classes.items__title}>Сума:</div>
                                         <div className={classes.items__count}>{productPrice.toFixed(2)} грн</div>
                                     </div>
                                     <div className={classes.items}>
                                         <div className={classes.items__title}>Доставка:</div>
                                         {freeD === 0 ? <div className={classes.items__count}>Безкоштовно!</div>
                                          :
                                          <div className={classes.items__count}>{deliveryPrice.toFixed(2)} грн</div>
                                         }
                                         
                                     </div>
                                     <div className={classes.items}>
                                         <div className={classes.items__title}>Кількість персон:</div>
                                         <div className={classes.items__count}>2</div>
                                     </div>
                                </div>
                                <div className={classes.total}>
                                     <div className={classes.total__title}>Разом:</div>
                                     <div className={classes.total__count}>{totalPrice.toFixed(2)} грн</div>
                                </div>
                            </div>
                        </div>
                        {!orderMenu ? 
                        <div onClick={showOrder} className={classes.orderBtn}>
                           <div className={classes.orderBtn__title}>Оформити замовлення</div>
                           <div>
                               <FontAwesomeIcon className={classes.orderBtn__icon} icon={faChevronRight }></FontAwesomeIcon>
                           </div>
                       </div> :
                       <div className={classes.orderData}>
                            <OrderInputBlock 
                                orderData={orderData}
                                setOrderData={setOrderData}
                                errorData={errorData}
                            />
                            <div onClick={makeOrder} className={classes.orderData__orderBtn}>замовити</div>
                       </div>
                        }
                         <Succes
                            showModal={showModal}
                            setShowModal={setShowModal}
                            setShowCart={setShowCart}
                            succesData={succesData}
                         />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

 
 

 


