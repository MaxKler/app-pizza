import React from "react";
import classes from './../../../styles/views/blog/news-style.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import imgPng from './../../../project/image/views/blog/img.png'
 
const BlogNew = ({newsItem}) => {
    console.log(newsItem)
    return (
        <div className={classes.new}>
            <div className={classes.new__content}>
                <div className={classes.titleBlock}>
                    <Link href={`/blog`}>
                        <FontAwesomeIcon className={classes.titleBlock__icon} icon={faChevronLeft}></FontAwesomeIcon>
                    </Link>
                    <div className={classes.titleBlock__title}>блог</div>
                </div>
                <div className={classes.newInfo}>
                    <div className={classes.newInfo__info}>
                        <div className={classes.newInfo__info__desc}>{newsItem.small_description}</div>
                        <div className={classes.newInfo__info__date}>{newsItem.date}</div>
                    </div>
                    <div>
                        <img className={classes.newInfo__img} src={imgPng} alt=""/>
                    </div>
                    <div className={classes.newInfo__title}>{newsItem.title}</div>
                    <div className={classes.newInfo__description}>{newsItem.description}</div>
                </div>
                <div className={classes.otherNews}>
                    <div className={classes.otherNews__content}>
                        <div className={classes.otherNews__content__title}>
                           Другие новости
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogNew

