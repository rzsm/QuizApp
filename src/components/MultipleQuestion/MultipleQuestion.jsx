import React from "react";
import Choice from "./Choice";
import classes from './MultipleQuestion.module.css'

export default function MultipleQuestion(props) {
    const [choices, setChoices]= React.useState(() => setMultipleChoices())    

    const choicesElements = choices.map((oneChoice, index) => 
        <Choice 
            key={oneChoice.answer}
            answer={oneChoice.answer} 
            correct={oneChoice.correct}
            isQuizChecked={props.isChecked}
            name={props.data.correct_answer}            
            userAnswers={props.answers}
            setUserAnswers={props.setAnswers}
            question={props.data.question}
        />
    )

       
    
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
      

    return (
        <div>        
        <fieldset>
            <legend> {props.data.question} </legend>
            {choicesElements}
        </fieldset>
        </div>
    )
}