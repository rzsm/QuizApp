export default function Choice(props) {
    return (
        <button className={`btn ${props.correct && "correct"}`}>
            {props.answer}
            
        </button>
    )
}