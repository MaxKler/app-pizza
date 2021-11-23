import React from 'react'
import classes from './../../styles/widgets/coments/coments-style.module.scss'

import cat from './../../project/image/widgets/coments/cat.png'
import Frame from './../../project/image/widgets/coments/Frame.png'
import phone from './../../project/image/widgets/coments/phone.png'
import instImg from './../../project/image/widgets/coments/instImg.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Coments = () => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                slidesToShow: 5,
                arrows:false
                }
            },
            {
                breakpoint: 1500,
                settings: {
                slidesToShow: 3,
                arrows:false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                arrows:false
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                arrows:false
                }
            },
            {
              breakpoint: 568,
              settings: {
              slidesToShow: 1,
              arrows:false
              }
            },
        ]
      };
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
                    <img className={classes.coments__pidpis__img} src={Frame} alt="" />
                </div>
            </div>
        </div>
        
        <div className={classes.insta}>
        <div className={classes.phone}>
            <img className={classes.phone__img}  src={phone} alt="" />
        </div>
        <Slider {...settings}>
        <div>
            <img className={classes.insta__img} src={instImg} alt="" />
        </div>
        <div>
            <img className={classes.insta__img} src={instImg} alt="" />
        </div>
        <div>
            <img className={classes.insta__img} src={instImg} alt="" />
        </div>
        <div>
            <img className={classes.insta__img} src={instImg} alt="" />
        </div>
        <div>
            <img className={classes.insta__img} src={instImg} alt="" />
        </div>
        <div>
            <img className={classes.insta__img} src={instImg} alt="" />
        </div>
        <div>
            <img className={classes.insta__img} src={instImg} alt="" />
        </div>
         </Slider>
        </div>
      
        
    </div>
    )
}

export default Coments