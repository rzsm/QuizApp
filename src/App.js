import React from "react";
import StartPage from "./pages/startPage/StartPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import fetchQuestions from "./services/fetchQuestions";
import "./App.css";

function App() {
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizData, setQuizData] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [newGame, setNewGame] = React.useState(false); 
  

  React.useEffect(() => {
    fetchQuestions().then(data => {
      setQuizData(data.results)
      setIsLoading(false)
    });    
  }, [newGame]);


  return (
    !isLoading &&
    <main>
      {showQuiz ? 
      <QuizPage quizData={quizData} isLoading={isLoading} setShowQuiz={setShowQuiz} setNewGame={setNewGame}/> : 
      <StartPage startQuiz={() => setShowQuiz(true)} />}
    </main>      
  );
}

export default App;
