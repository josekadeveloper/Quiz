import React, { useState } from 'react';
import { resultInitialState } from '../../utils/db';
import AnswersTimer from '../AnswerTimer/AnswerTimer';
import Result from '../Result/Result';
import Options from '../Options/Options';
import './quiz.scss';

interface QuizProps {
    questions: Array<{ question: string, choices?: Array<string>, correctAnswer: string, type: string }>;
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(-1);
    const [answer, setAnswer] = useState(false);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(false);
    const [inputAnswer, setInputAnswer] = useState('');
    const [pauseGame, setPauseGame] = useState(true);

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
        setInputAnswer('');
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

    const handleInputChange = (evt: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputAnswer(evt.target.value);

        if (evt.target.value === correctAnswer) {
            setAnswer(true);
            setResult((prev) => {
                const score = {
                        ...prev,
                        score: prev.score + 5,
                        correctAnswers: prev.correctAnswers + 1,
                    }
    
                return score;
            });
        } else {
            setAnswer(false);
        }
    };

    const getAnswerUI = () => {
        if (type === 'FIB') {
            return <input value={inputAnswer} onChange={handleInputChange} disabled={pauseGame} />
        }

        return choices?.map((answer, index) => (
            <li
                onClick={() => !pauseGame && onAnswerClick(answer, index)}
                key={answer}
                className={answerIdx === index ? 'selected-answer' : undefined}
            >
                {answer}
            </li>
        ))
    };

    // Function to start the game
    const startGame = () => {
        setShowAnswerTimer(true);
        setPauseGame(false);
    }

    // Function to stop the game
    const stopGame = () => {
        setShowAnswerTimer(false);
        setPauseGame(true);
    }

    return (
        <main className='quiz'>
            {!showResult
                ? (
                    <>
                        {showAnswerTimer && <AnswersTimer duration={40} onTimeUp={handleTimeUp} />}
                        <Options startGame={startGame} stopGame={stopGame} />
                        <span className='active-question-no'>{currentQuestion + 1}</span>
                        <span className='total-question'>/{questions.length}</span>
                        <h2>{question}</h2>
                        <ul>{getAnswerUI()}</ul>

                        <footer className='next-question'>
                            <button onClick={() => onClickNext(answer)} disabled={answerIdx === -1 && !inputAnswer && pauseGame}>
                                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                            </button>
                        </footer>
                    </>
                ) : <Result totalQuestions={questions.length} result={result} onTryAgain={onTryAgain} />
            }
        </main>
    );
};

export default Quiz;