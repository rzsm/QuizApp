import React from "react"
import "./Choice.css"

export default function Choice(props) {

   
    return (
        <>
            <input
                className={`btn radio-input ${props.correct && "correct"}`}
                checked={props.checked}
                type="radio"
                name={props.name}
                id={props.answer}
                onChange={props.handleSelect}                
           
            />
            <label 
                className={`radio-label ${props.checked && "selected"}`} 
                htmlFor={props.answer}
            > 
                    {props.answer} 
            </label>
        </>                    
        
    )
}