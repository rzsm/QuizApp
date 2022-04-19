import React from "react";
import MultipleQuestion from "../../components/MultipleQuestion";


export default function QuizPage(props) {
  let questionsElements;

  if (props.quizData) {
    questionsElements = props.quizData.map((data) => (
      <MultipleQuestion data={data} key={data.question} isChecked={props.isChecked}/>
    ));
  }

  return (
    <>
      {props.quizData && (
        <>
          {questionsElements}
          <button className="btn" onClick={props.checkQuiz}>
            Check Answers
          </button>
        </>
      )}
    </>
  );
}
