import React, { useState } from "react";
import classes from './../../../styles/layouts/main/menu-style.module.scss'
import searchSvg from './../../../project/image/layouts/menu/search.svg'
import closeMenuSvg from './../../../project/image/layouts/navbar/svg/closeMenu.svg'
import phoneSvg from './../../../project/image/layouts/navbar/svg/phone.svg'

const Menu = ({closeMenu, screen, mainData}) => {
   


    return (
        <div className={screen ? classes.menu : [classes.menu, classes.menuClose].join(' ')}>
            <div className={classes.menuCloseBtn} onClick={closeMenu}>
                <img src={closeMenuSvg} alt="close" />
            </div>
            <div className={classes.menuTitle}>Меню</div>
            <div className={screen ? classes.menuBlock : classes.menuBlockClose}>
                <div className={classes.menuSearchBlock}>
                    <img className={classes.menuSearch} src={searchSvg} alt="search" />
                    <input  className={classes.menuInput} placeholder="    пошук" />
                </div>
                <div>
                    {mainData.map((elem) => {
                        return (
                            <div key={elem.title} className={classes.menuItem}>{elem.category.title}</div>
                        )
                    })}
                </div>
            </div>
            <div className={classes.contacts}>
                <hr  style={{width: '50%', color: '#666666'}}/>
                <div className={classes.contacts__contacts}>
                    <img className={classes.contacts__contacts__phone} src={phoneSvg} alt="phone" />
                    <a href="tel:+380672522737">
                       <div className={classes.contacts__number}>067-252-27-37</div>
                    </a>
                </div>
                <div className={classes.contacts__workTime}>10:00 - 22:00 без вихідних</div>
            </div>
        </div>
    )
}
export default Menu