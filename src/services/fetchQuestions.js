export default function fetchQuestions() {
    const API_URL = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple" ;
    
    return (
        fetch(API_URL)
        .then(response => response.json())
    )
}