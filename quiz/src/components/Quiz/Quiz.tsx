import React, { useState } from 'react';
import { resultInitialState } from '../../utils/db';
import AnswersTimer from '../AnswerTimer/AnswerTimer';
import './quiz.scss';

interface QuizProps {
    questions: Array<{ question: string, choices: Array<string>, correctAnswer: string, type: string }>;
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(-1);
    const [answer, setAnswer] = useState(false);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);
    const [inputAnswer, setInputAnswer] = useState('');

    const { question, choices, correctAnswer, type } = questions[currentQuestion];

    const onAnswerClick = (answer: string, index: number) => {
        setAnswerIdx(index);

        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const onClickNext = (finalAnswer: boolean) => {
        setAnswerIdx(-1);
        setShowAnswerTimer(false);
        setResult((prev) => {
            let score;

            finalAnswer === true
                ? score = {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : score = {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1
                }

            return score;
        });

        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

        setTimeout(() => {
            setShowAnswerTimer(true);
        })
    };

    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
    };

    const handleTimeUp = () => {
        setAnswer(false);
        onClickNext(false);
    };

    const handleInputChange = (evt: { target: { value: React.SetStateAction<string>; }; })=> {
        setInputAnswer(evt.target.value);

        if (evt.target.value === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const getAnswerUI = () => {
        if (type === 'FIB') {
            return <input value={inputAnswer} onChange={handleInputChange} />
        }

        return choices.map((answer, index) => (
            <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIdx === index ? 'selected-answer' : undefined}
            >
                {answer}
            </li>
        ))
    };

    return (
        <main className='quiz'>
            {!showResult 
            ? (
            <>
                {showAnswerTimer && <AnswersTimer duration={5} onTimeUp={handleTimeUp} />}
                <span className='active-question-no'>{currentQuestion + 1}</span>
                <span className='total-question'>/{questions.length}</span>
                <h2>{question}</h2>
                <ul>{getAnswerUI()}</ul>

                <footer className='next-question'>
                    <button onClick={() => onClickNext(answer)} disabled={answerIdx === -1 && !inputAnswer}>
                        {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </footer>
            </>
            ) : 
            <section className='result'>
                <h3>Result</h3>
                <p>
                    Total Questions: <span>{questions.length}</span>
                </p>
                <p>
                    Total Score: <span>{result.score}</span>
                </p>
                <p>
                    Correct Answers: <span>{result.correctAnswers}</span>
                </p>
                <p>
                    Wrong Answers: <span>{result.wrongAnswers}</span>
                </p>
                <button onClick={onTryAgain}>
                    Try again
                </button>
            </section>
            }
        </main>
    );
};

export default Quiz;