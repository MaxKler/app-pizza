import React from "react";
import classes from './../../styles/widgets/questions/questions-style.module.scss'

import QuestionsBlockItem from "./component/QuestionBlockItem";
import questionPng from './../../project/image/widgets/questions/quest.png'


const QuestionsBlock = ({dataQuestions}) => {
 
    return (
        <div className={classes.questionBlock}>
             <div className={classes.questionBlock__content}>
                    <div className={classes.questionBlock__title}>Питання та відповіді</div>
                    <div className={classes.questionAnswerBlock}>
                        {dataQuestions.map((elem) => {
                            return (
                            <QuestionsBlockItem  classes={classes} elem={elem}/>
                            )
                        })}
                    </div>
               </div>
               <div className={classes.questionBlock__img}>
                   <img className={classes.questionBlock__img__img} src={questionPng} alt="" />
               </div>
        </div>
    )
}

export default QuestionsBlock