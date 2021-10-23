import React from "react";
import classes from './../../styles/views/blog/blog-style.module.scss'
import imPng from './../../project/image/views/blog/im.png'
import Link from 'next/link'

const BlogView = ({blogData}) => {
    
    return (
        <div className={classes.blogView}>
        <div className={classes.title}>блог</div>
        {blogData.slice(0, 1).map((elem) => {
            return (
                <div className={classes.blog}>
                    <div className={classes.blog__main}>
                        <div className={classes.blog__main__info}>
                            <div className={classes.blog__main__desc}>{elem.small_description}</div>
                            <div className={classes.blog__main__date}>{elem.date}</div>
                        </div>
                        <div className={classes.blog__main__card}>
                            <div className={classes.blog__main__card__img}></div>
                        </div>
                        <div className={classes.blog__main__title}>{elem.title}</div>
                        <Link href={`/post/${elem.id}`}>
                            <div className={classes.blog__main__description}>{elem.description}</div>
                        </Link>
                        <div className={classes.blog__news}>
                            <div className={classes.blog__news__block}>
                                <div className={classes.blog__news__block__title}>Інші новини</div>
                                <div className={classes.news}>
                                {
                                    blogData.slice(1).map((elem) => {
                                        return (
                                            <>
                                                <div className={classes.news__item}>
                                                    <div className={classes.news__img}>
                                                        <img className={classes.news__img__img} src={imPng} alt="" />
                                                    </div>
                                                    <div className={classes.news__title}>{elem.title}</div>
                                                    <div className={classes.news__description}>{elem.description}</div>
                                                    <div className={classes.news__info}>
                                                        <div className={classes.news__info__desc}>{elem.small_description}</div>
                                                        <div className={classes.news__info__date}>{elem.date}</div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default BlogView

{/* <div className={classes.blog__card}>
                        <div className={classes.blog__card__blockBig}>
                            <div className={classes.blockBig}>
                                <div className={classes.blockBig__title}>{elem.title}</div>
                                <div className={classes.blockBig__desc}>{elem.description}</div>
                                <div className={classes.blockBig__info}>
                                    <div className={classes.blockBig__info__desc}>{elem.small_description}</div>
                                    <div className={classes.blockBig__info__date}>{elem.date}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div> */}