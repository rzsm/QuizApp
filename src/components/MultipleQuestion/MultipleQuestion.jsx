import React from "react";
import Choice from "./Choice";
import './_multipleQuestion.css'

export default function MultipleQuestion(props) {
    const [choices, setChoices]= React.useState(() => setMultipleChoices())
    const [userAnswer, setUserAnswer] = React.useState(null)

    const choicesElements = choices.map((oneChoice, index) => 
        <Choice 
            answer={oneChoice.answer} 
            correct={oneChoice.correct}
            key={oneChoice.answer}
            isChecked={props.isChecked}
            name={props.data.correct_answer}
            handleSelect={() => handleSelect(index + 1)}
            checked={index + 1 === userAnswer}
        />
        )

    function handleSelect(answerNumber) {
        setUserAnswer(answerNumber)
    }      
    
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