import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const QuestionsBlockItem = ({classes, elem}) => {

    const [visible, setVisible] = useState(false)
    const showAnswer = () => {
        setVisible(!visible)
    }

    return (
        <>
        <div className={classes.questionBlock__block}>
            <div className={classes.questionBlock__block__number}>{elem.id}</div>
            <div className={visible ? [classes.questionBlock__block__question, classes.questionBlock__block__question__active].join(' ') : classes.questionBlock__block__question}>{elem.question}</div>
            <div onClick={showAnswer} className={classes.questionBlock__block__icon}>
                {visible ? 
                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon> :
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>}
            </div>
        </div>
        {visible && <div className={classes.questionBlock__block__answer}>{elem.answer}</div> }
        <hr  />
        </>
    )
}

export default QuestionsBlockItem