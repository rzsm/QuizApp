import React from "react";
import StartPage from "./pages/startPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import fetchQuestions from "./services/fetchQuestions";
import "./style/app.css";

function App() {
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizData, setQuizData] = React.useState("");
  

  React.useEffect(() => {
    fetchQuestions().then(data => setQuizData(data.results));    
  }, []);


  return (
    <main>
      {showQuiz ? 
      <QuizPage quizData={quizData} /> : 
      <StartPage startQuiz={() => setShowQuiz(true)} />}
    </main>
  );
}

export default App;
