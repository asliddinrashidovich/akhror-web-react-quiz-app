import { useState } from "react";
import Result from "./Result";

import toast from "react-hot-toast";

function Test({ questions: { questions, title, color, icon } }) {
    const [answeredQuestions, setAnsweredQuestions] = useState(1);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerStatus, setAnswerStatus] = useState(null);
    const [statusDisabeled, setStatusDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
  
    // console.log(selectedAnswer)

    const handleNextQuestion = () => {
        setQuestionIndex(questionIndex + 1);
        setAnsweredQuestions(answeredQuestions + 1);
        setSelectedAnswer(null);
        setShowNextButton(false);
        setAnswerStatus(null);
        setStatusDisabled(false);
    };

    if(questionIndex == questions.length) {
        toast.success('Successfully toasted!')
        return <Result  
            title={title}
            color={color}
            icon={icon}
            correctAnswerCount={correctAnswerCount}
            questionsLenght={questions.length}/>
    }

    function handleSubmit(e) {
        e.preventDefault()
        

        const correctAnswer = questions[questionIndex].answer;

        if(selectedAnswer == null) {
            alert('please select an answer')
        } else {
            if(selectedAnswer == correctAnswer) {
                setAnswerStatus('correct')
                setCorrectAnswerCount(correctAnswerCount + 1)
            } else {
                setAnswerStatus('incorrect')
            }
       }
       setShowNextButton(true)
       setStatusDisabled(true)
    }
    // console.log(questions[answeredQuestions].options[0])
    return (
    <div className="test-container">
        <div className="test-content">
            <p className="test-description">Question {answeredQuestions} of {questions.length}</p>
            <h2 className="test-title">{questions[questionIndex].question}</h2>
            <div className="test-proccess-container">
                <div className="test-proccess" style={{width: (answeredQuestions / questions.length) * 100 + '%' }}></div>
            </div>
        </div>
        <div className="test-questions">
            <form onSubmit={handleSubmit}>
                <ul className="test-list">
                    {questions[answeredQuestions - 1].options.map((option, index) => {
                        const alphabets =  String.fromCharCode(65 + index)
                        let className = ''
                        if(answerStatus == 'correct' && selectedAnswer == option) {
                            className = 'correct'
                        } else if (answerStatus == 'incorrect') {
                            if(selectedAnswer == option) {
                                className = 'incorrect'
                            } 
                            if(option == questions[questionIndex].answer) {
                                className = 'correct'
                            }
                        }
                        return <li key={option}>
                            <label className={`test-label ${className}`}>
                                <span className="test-letter">{alphabets}</span>
                                <input type="radio" name="foranswer" disabled={statusDisabeled} onChange={() => setSelectedAnswer(option)}/>
                                <span className="test-text">{option}</span>
                                
                                 {/* icon */}
                                <img
                                    className="test-icon-correct"
                                    src="../assets/icon-correct.svg"
                                    alt="icon"
                                    width={40}
                                    height={40}
                                />
                                <img
                                    className="test-icon-incorrect"
                                    src="../assets/icon-incorrect.svg"
                                    alt="icon"
                                    width={40}
                                    height={40}
                                />
                            </label>
                        </li>
                    })}
                </ul>
                {!showNextButton && <button type="submit" className="test-btn btn">Submit Question</button>}
                {showNextButton && <button type="submit" onClick={handleNextQuestion} className="test-btn btn">
                        {answeredQuestions == questions.length ? 'Finish' : "Next Question"}
                    </button>}
            </form>
        </div>
    </div>
  )
}

export default Test