import React, { useEffect } from "react"
import classes from "./Choice.module.css"

export default function Choice(props) {  
    const [radioChecked, setRadioChecked] = React.useState(false)
    
    function handleSelect() {        
        props.setUserAnswers(prevAnswers => {
            return prevAnswers.map(prevAnswer => {
                if (prevAnswer.question === props.question) {
                    return {
                        ...prevAnswer,
                        userAnswer: props.answer
                    }
                } else {
                    return prevAnswer
                }
            })
        })        
    }

    const [currentQuestion] = props.userAnswers.filter(ans => ans.question === props.question) 
    useEffect(() => {  
        if (currentQuestion !== undefined) {
            setRadioChecked(currentQuestion.userAnswer === props.answer) 
        }                      
    }
    ,[currentQuestion])   
    
    const labelBackground = (
        !props.isQuizChecked ? (radioChecked && classes.selected) : 
            (radioChecked ? (
                currentQuestion.userAnswer === currentQuestion['correct_answer'] ?
                classes.correct:
                classes.wrong
            ) : '')
    )

    return (
        <>
            <input
                className={`${classes.btn} ${classes['radio-input']}`}
                checked={radioChecked}
                type="radio"
                name={props.name}
                id={props.answer}
                onChange={() => handleSelect()}  
            />
            <label 
                className={`${classes['radio-label']} ${labelBackground}`} 
                htmlFor={props.answer}
            > 
                    {props.answer} 
            </label>
        </>       
    )
}