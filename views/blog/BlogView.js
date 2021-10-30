import React from "react";
import classes from './../../styles/views/blog/blog-style.module.scss'
import imgPng from './../../project/image/views/blog/img.png'
import imPng from './../../project/image/views/blog/im.png'
import Link from 'next/link'

const BlogNews = ({blogData}) => {
    
    return (
        <div className={classes.blogView}>
        <div className={classes.title}>блог</div>
        <div className={classes.blog}>
            <div className={classes.blog__content}>
                <div className={classes.blog__content__mainCard}>
                   <div style={{backgroundImage: `url(${imgPng})`}} className={classes.blog__mainNew}>
                       {blogData.slice(0, 1).map((elem) => {
                           return (
                                <div className={classes.blog__mainNew__content}>
                                   <div className={classes.blog__mainNew__content__title}>{elem.title}</div>
                                   <div className={classes.blog__mainNew__content__info}>
                                        <div className={classes.blog__mainNew__content__info__desc}>{elem.small_description}</div>
                                        <div className={classes.blog__mainNew__content__info__date}>{elem.date}</div>
                                    </div>
                                </div>
                            )
                        })}
                   </div>
                </div>   
                <div className={classes.blog__content__twoCards}>
                       {blogData.slice(1, 3).map((news) => {
                            return (
                            <div className={classes.blog__twoNews}>
                                <div className={classes.blog__twoNews__content}>
                                    <div className={classes.blog__twoNews__content__imgBlock}>
                                        <img className={classes.blog__twoNews__content__img} src={imPng} alt="" />
                                    </div>
                                    <div className={classes.blog__twoNews__content__block} >
                                        <div className={classes.blog__twoNews__content__block__block}>
                                            <div className={classes.blog__twoNews__content__title}>{news.title}</div>
                                            <div className={classes.blog__twoNews__content__description}>{news.description}</div>
                                        </div>
                                        <div className={classes.blog__twoNews__content__info}>
                                            <div className={classes.blog__twoNews__content__info__desc}>{news.small_description}</div>
                                            <div className={classes.blog__twoNews__content__info__date}>{news.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
    </div>
    )
}

export default BlogNews
