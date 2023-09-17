import React, { useState } from 'react';
import { resultInitialState } from '../../utils/db';
import './quiz.scss'

interface QuizProps {
    questions: Array<{ question: string, choices: Array<string>, correctAnswer: string }>;
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(-1);
    const [answer, setAnswer] = useState(false);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);

    const { question, choices, correctAnswer } = questions[currentQuestion];

    const onAnswerClick = (answer: string, index: number) => {
        setAnswerIdx(index);

        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    const onClickNext = () => {
        setAnswerIdx(-1);
        setResult((prev) => {
            let score;

            answer === true
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
    }

    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
    }

    return (
        <section className='quiz'>
            {!showResult 
            ? (
            <>
                <span className='active-question-no'>{currentQuestion + 1}</span>
                <span className='total-question'>/{questions.length}</span>
                <h2>{question}</h2>
                <ul>
                    {
                        choices.map((answer, index) => (
                            <li
                                onClick={() => onAnswerClick(answer, index)}
                                key={answer}
                                className={answerIdx === index ? 'selected-answer' : undefined}
                            >
                                {answer}
                            </li>
                        ))
                    }
                </ul>

                <footer className='next-question'>
                    <button onClick={onClickNext} disabled={answerIdx === -1}>
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
        </section>
    );
};

export default Quiz;