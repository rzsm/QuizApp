import React from "react";
import MultipleQuestion from "../../components/MultipleQuestion";
import Button from "../../components/UI/Button";

export default function QuizPage(props) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [answers, setAnswers] = React.useState(props.quizData.map(data => {
    return {
      question : data.question,
      userAnswer : '',
      correct_answer : data.correct_answer
    }
  }))  

  // console.log(answers)
  
  const questionsElements = props.quizData.map(data => (
      <MultipleQuestion
        data={data}
        key={data.question}
        isChecked={isChecked}
        answers={answers}
        setAnswers={setAnswers}
      />
  ));

  const correctAnswers = answers.filter(answer => answer.userAnswer === answer.correct_answer)
  const score = `${correctAnswers.length}/${props.quizData.length}`
  
  const quizPageButton = !isChecked ? 
                            <Button onClick={() => setIsChecked(true)}>
                            Check Answers
                            </Button>
                          :
                          <>
                            <span>
                              {`You scored ${score} correct answers`}
                            </span>
                            <Button onClick={() => {
                                props.setNewGame(prev => !prev)
                                props.setShowQuiz(false)
                               }
                              }
                            >
                              play agian
                            </Button>
                          </>

  return (
    <>
      {!props.isLoading && (
        <>
          {questionsElements}
          {quizPageButton}
        </>
      )}
    </>
  );
}
