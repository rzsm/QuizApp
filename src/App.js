import React from "react";
import StartPage from "./pages/startPage/StartPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import "./App.css";
import useHttp from "./hooks/useHttp";

function App() {
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizData, setQuizData] = React.useState("");  
  const [newGame, setNewGame] = React.useState(false); 
  const {loading, error, sendRequest: fetchQuestions} = useHttp()  

  const API_URL = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple" 
  const handleData = data => setQuizData(data.results)

  React.useEffect(() => {
    fetchQuestions({url: API_URL}, handleData)  
  }, [newGame]);

  let content = ''
  
  const pageContentCreator = () => {
    if (error) return <h3> Oops! Something went wrong!, pleade try again</h3>
    if (loading) return content = <h3> Loading ...</h3>
    return (
      <main>
        {showQuiz ? 
        <QuizPage quizData={quizData} isLoading={loading} setShowQuiz={setShowQuiz} setNewGame={setNewGame}/> : 
        <StartPage startQuiz={() => setShowQuiz(true)} />}
      </main>
    )   
  }

  content = pageContentCreator()  

  return content
}

export default App;
