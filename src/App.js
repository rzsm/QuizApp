import React from "react";
import StartPage from "./pages/startPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import fetchQuestions from "./services/fetchQuestions";
import "./style/app.css";

function App() {
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizData, setQuizData] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    fetchQuestions().then((data) => setQuizData(data.results));
    console.log("sideEffect")
  }, []);

  console.log(quizData)
  

  return (
    <main>
      {showQuiz ? 
      <QuizPage quizData={quizData} checkQuiz={() => setIsChecked(true)} isChecked={isChecked}/> : 
      <StartPage startQuiz={() => setShowQuiz(true)} />}
    </main>
  );
}

export default App;
