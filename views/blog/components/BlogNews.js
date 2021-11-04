import React from "react";
import classes from './../../../styles/views/blog/news-style.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { NET } from "../../../network";
 
const BlogNew = ({newsItem, otherNews}) => {
  
    return (
        <div className={classes.new}>
            <div className={classes.new__content}>
                <Link href={`/blog`}>
                    <div className={classes.titleBlock}>
                        <FontAwesomeIcon className={classes.titleBlock__icon} icon={faChevronLeft}></FontAwesomeIcon>
                        <div className={classes.titleBlock__title}>блог</div>
                    </div>
                </Link>
                <div className={classes.newInfo}>
                    <div className={classes.newInfo__info}>
                        <div className={classes.newInfo__info__desc}>{newsItem.small_description}</div>
                        <div className={classes.newInfo__info__date}>{newsItem.date}</div>
                    </div>
                    <div>
                        <img className={classes.newInfo__img} src={`${NET.WEB_URL}/${newsItem.image}`} alt=""/>
                    </div>
                    <div className={classes.newInfo__title}>{newsItem.title}</div>
                    <div className={classes.newInfo__description}>{newsItem.description}</div>
                </div>
                <div className={classes.otherNews}>
                    <div className={classes.otherNews__content}>
                        <div className={classes.otherNews__content__title}>
                           Другие новости
                        </div>
                        <div className={classes.otherNews__blocks}>
                            {otherNews.map((elem) => {
                                return (
                                    <div className={classes.otherNews__blocks__card}>
                                         <Link href={`/news/${elem.id}`}>
                                        <div className={classes.otherNews__blocks__new}>
                                            <img className={classes.otherNews__blocks__new__img} src={`${NET.WEB_URL}/${elem.image}`} alt="" />
                                            <div className={classes.otherNews__blocks__new__block}>
                                                <div className={classes.otherNews__blocks__new__title}>{elem.title}</div>
                                                <div className={classes.otherNews__blocks__new__desc}>{elem.description}</div>
                                                <div className={classes.otherNews__blocks__new__info}>
                                                    <div className={classes.otherNews__blocks__new__info__desc}>{elem.small_description}</div>
                                                    <div className={classes.otherNews__blocks__new__info__date}>{elem.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogNew

