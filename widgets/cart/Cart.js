import React, { useState, useEffect } from "react";
import classes from './../../styles/widgets/cart/cart-style.module.scss'
import trashSvg from './../../project/image/cart/trash.svg'
import catPng from './../../project/image/cart/cat.png'
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
    setCart,
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
    const free = 500
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

    // const cartItems = React.useRef()

    // React.useEffect(() => {
    //     document.body.addEventListener('click', outsideClick)
    // }, [])

    // const outsideClick = (e) => {
    //     if (!e.path.includes(cartItems.current)) {
    //       setShowCart(false)
    //     }
    // }
  

    const [errorData, setErrorData] = useState({})
    const [succesData, setSuccesData] = useState(false)
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
            localStorage.removeItem('cart')
        }
    } 
    console.log(cart)
    return (
        <div className={showCart ? [classes.cartNone__active, classes.cartNone].join(' ') : classes.cartNone}>
            <div className={classes.cart}>
            <div onClick={closeCart} className={classes.closeCart}>
                <img src={closeCartSvg} alt="" />
            </div>
            <div className={classes.cart__content}>
                <div className={classes.cart__title}>Кошик</div>
                <hr  className={classes.hr} />
                {cart.length === 0 ? 
                <div className={classes.cart__empty}>
                    <div className={classes.cart__empty__title}>Упс... Ваш кошик порожній...</div>
                    <img className={classes.cart__empty__icon} src={catPng} alt="" />
                </div> :
                <div className={classes.cart__items}>
                    <div className={classes.order}>
                        {cart.map((item) => {
                            return (
                            <>
                            <div className={classes.order__block}>
                                <div className={classes.order__size}>
                                    <img className={classes.order__size__img} src={`${NET.WEB_URL}/${item.image}`} alt="" />
                                </div>
                                <div className={classes.order__size3}>
                                    <div className={classes.order__name}>{item.title}
                                        {/* {item.sizeType && item.sizeType.map((size) => {
                                            console.log(size)
                                            return (
                                                <div className={classes.order__type}>{size} см</div>   
                                            )
                                        })} */}
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
                                    {item.activeOption === 1 ? 
                                      <div className={classes.order__price}>{+item.price_two * item.qty}</div> :
                                      <div className={classes.order__price}>{item.price * item.qty}</div>

                                }
                                    

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
                        : <div className={classes.deliveryFree}>До безкоштовної доставки залишилось замовити <strong>{freeD}</strong> грн.</div>
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
                                          <div className={classes.items__count}>40 грн</div>
                                         }
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
                       </div>
                        :
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
                            setCart={setCart}
                         />
                    </div>
                </div>}
            </div>
            </div>
        </div>
    )
}

export default Cart

 
 

 


