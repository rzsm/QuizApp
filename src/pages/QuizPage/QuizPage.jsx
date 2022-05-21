import React from "react";
import BodyWrapper from "../../components/UI/BodyWrapper";
import Button from "../../components/UI/Button";
import yellowSpot from '../../assets/startPageYellowSpot.svg'
import blueSpot from '../../assets/startPageBlueSpot.svg'
import MultipleQuestion from "../../components/MultipleQuestion/MultipleQuestion";
import classes from "./QuizPage.module.css"

export default function QuizPage(props) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [answers, setAnswers] = React.useState(props.quizData.map(data => {
    return {
      question : data.question,
      userAnswer : '',
      correct_answer : data.correct_answer
    }
  }))  
  
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

  const handleCheckQuiz = () => setIsChecked(true);
  const handlePlayAgain = () => {
    props.setNewGame(prev => !prev)
    props.setShowQuiz(false)  
  }
  const quizPageButton = (
    !isChecked ? 
      <Button className={classes['check-btn']} onClick={handleCheckQuiz}>Check Answers</Button>
    :
    <div className={classes['play-again-wrapper']}>
      <p className={classes.score}>{`You scored ${score} correct answers`}</p>
      <Button onClick={handlePlayAgain}>play agian</Button>
    </div>
  )

  return (
    <>
      {!props.isLoading && (
        <BodyWrapper>
          <img src={yellowSpot} className={classes['yellow-spot']} />
          <img src={blueSpot} className={classes['blue-spot']} />
          <main className={classes.main}>{questionsElements}</main>          
          {quizPageButton}
        </BodyWrapper>
      )}
    </>
  );
}
