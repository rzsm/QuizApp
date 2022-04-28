import React from "react";
import MultipleQuestion from "../../components/MultipleQuestion";

export default function QuizPage(props) {
  const [isChecked, setIsChecked] = React.useState(false);

  let questionsElements;

  if (props.quizData) {
    questionsElements = props.quizData.map(data => (
      <MultipleQuestion data={data} key={data.question} isChecked={props.isChecked}/>
    ));
  }

  return (
    <>
      {props.quizData && (
        <>
          {questionsElements}
          <button className="btn" onClick={() => setIsChecked(true)}>
            Check Answers
          </button>
        </>
      )}
    </>
  );
}
