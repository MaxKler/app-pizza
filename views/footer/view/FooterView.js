import React from "react";
import classes from './../../../styles/views/footer/footer-style.module.scss'
import logoSvg from './../../../project/image/views/footer/svg/logo.png'
import masterSvg from './../../../project/image/views/footer/svg/master.svg'
import visaSvg from './../../../project/image/views/footer/svg/visa.svg'
import appleSvg from './../../../project/image/views/footer/svg/apple.svg'
import googleSvg from './../../../project/image/views/footer/svg/google.svg'
import cartSvg from './../../../project/image/layouts/navbar/svg/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {useRouter} from 'next/router'
import Link from 'next/link'

const FooterView = ({
    watchCart, 
    totalPrice, 
    countProduct, 
    mainData,
    showButtonCart,
    showContent,
    screen
}) => {

    const router = useRouter()

    return (
        <>
        <div className={classes.footer}>
            <div  className={classes.footer__items}>
             <div className={classes.contacts}>
                    <div className={classes.logo}>
                       <img className={classes.contacts__logoImg} src={logoSvg} alt="" />
                    </div>
                    <div className={classes.contacts__contacts}>
                        <a href="tel:+380672522737">
                           <div className={classes.contacts__number}>067-257-27-37</div>
                        </a>
                        <div className={classes.contacts__title}>Замовити доставку</div>
                        <div className={classes.contacts__worktime}>10:00 - 22:00 без вихідних</div>
                        <div className={classes.contacts__adress}>Маріуполь, вул. Миру, 71</div>
                        <div className={classes.contacts__name}>(c) CH Aroma Pizza Bar</div>
                    </div >
                </div>
               <div className={classes.pay}>
                    <div className={classes.pay__title}>Оплата та доставка</div>
                    <div  onClick={() => router.push(`/#delivery`)}  className={classes.pay__uslovia}>Умови доставки</div>
                    <a>
                       <div className={classes.pay__politic}>Політика конфіденційності</div>
                    </a>
                    <a>
                        <div className={classes.pay__oferta}>Публічний договір (оферта)</div>
                    </a>
                    <div className={classes.pay__systems}>
                        <div className={classes.pay__systems__img}>
                            <img className={classes.pay__systems__imgI} src={masterSvg} alt="" />
                        </div>
                        <div className={classes.pay__systems__img}>
                            <img className={classes.pay__systems__imgI} src={visaSvg} alt="" />
                        </div>
                        <div className={classes.pay__systems__img}>
                            <img className={classes.pay__systems__imgI} src={appleSvg} alt="" />
                        </div>
                        <div className={classes.pay__systems__img}>
                            <img className={classes.pay__systems__imgI} src={googleSvg} alt="" />
                        </div>
                    </div>
                    <div className={classes.pay__powered}>
                        <div className={classes.pay__poweredBy}>Powered by: </div>
                        <div className={classes.pay__poweredBy2}><Link href="https://t.me/joinchat/Rs1iX46Lw_euN2Ra">MOTICH IT PRO </Link></div>
                        <div className={classes.pay__poweredBy}> & <Link href="https://pr-pro.org/"> PR-PRO</Link></div>
                    </div>
                   
                </div>
                { showContent && <div className={classes.menu}>
                    <div className={classes.menu__title}>Меню</div>
                    <div className={classes.menu__list}>
                        <div className={classes.menu__items}>
                            {mainData.slice(0, 8).map((el) => {
                                return (
                                    <div onClick={() => router.push(`/#category${el.category.id}`)} className={classes.menu__items__item}>{el.category.title}</div>
                                )
                            })}
                        </div>
                        <div className={classes.menu__items}>
                            {mainData.slice(8, 16).map((el) => {
                                return (
                                    <div onClick={() => router.push(`/#category${el.category.id}`)}  className={classes.menu__items__item}>{el.category.title}</div>
                               )
                            })}
                        </div>
                    </div>
                </div>}
               <div className={classes.social}>
                    <div className={classes.social__title}>Ми у соц.мережах</div>
                    <div className={classes.social__icons}>
                        <Link href="https://www.facebook.com/charomapizzabar/">
                            <FontAwesomeIcon className={classes.social__icon} icon={faFacebookF}></FontAwesomeIcon>
                        </Link>    
                        <Link href="https://www.instagram.com/ch_mrpl/">
                            <FontAwesomeIcon className={classes.social__icon} icon={faInstagram}></FontAwesomeIcon>
                        </Link>
                    </div>
                    {showButtonCart &&
                     <div  onClick={watchCart}  className={classes.cart}>
                     <img  className={classes.cart__img} src={cartSvg} alt="cart" />
                     <div className={classes.cart__items}>
                         <div className={classes.cart__title}>Ваше замовлення</div>
                         <div style={{display: 'flex'}}>
                             <div className={classes.cart__count}>{countProduct}</div>
                             <div className={classes.cart__razdel}> || </div>
                             <div className={classes.cart__total}>{totalPrice.toFixed(2)}</div>
                         </div>
                     </div>
                  </div> 

                    }
                </div>
                <div className={classes.by}>  
                    <div className={classes.contacts__name1}>(c) CH Aroma Pizza Bar</div>
                    <div className={classes.by1}>  
                        <div className={classes.pay__poweredBy1}>Powered by: </div>
                        <div className={classes.pay__poweredBy11}><Link href="https://t.me/joinchat/Rs1iX46Lw_euN2Ra">MOTICH IT PRO </Link></div>
                        <div className={classes.pay__poweredBy1}> & <Link href="https://pr-pro.org/">PR-PRO</Link></div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default FooterView
