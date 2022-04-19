import React from "react";
import Choice from "./Choice";
import './_multipleQuestion.css'

export default function MultipleQuestion(props) {

    
    function setMultipleChoices() {
        const randomOrganizedchoices = [null,null,null,null]
        const corrextAnswerIndex = Math.floor(Math.random()*4);
        randomOrganizedchoices[corrextAnswerIndex] =  {
            answer:props.data.correct_answer,
             correct:true
        }
        let j=0;
        for (let i=0 ; i<4; i++) {
            if (!randomOrganizedchoices[i]) {
                randomOrganizedchoices[i] = {
                    answer:props.data.incorrect_answers[j],
                    correct: false
                };
                j++;
            }
        }

        return randomOrganizedchoices
    }


    
    
    
    const choicesElements = setMultipleChoices().map(each => 
    <Choice answer={each.answer} correct={each.correct} key={each.answer}/>
    )

    return (
        <div>
        <p> {props.data.question} </p>
        {choicesElements}
        </div>
    )
}