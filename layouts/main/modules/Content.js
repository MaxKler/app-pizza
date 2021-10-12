import React from "react";
import classes from './../../../styles/layouts/main/content-style.module.scss'


const Content = ({children, screen}) => {
    return (
        <div className={screen ? classes.contentBlock :  classes.contentOnly}>
            {children}
        </div>
    )
}
export default Content