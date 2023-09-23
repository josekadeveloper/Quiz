import { useEffect, useState } from 'react';
import Table from '../Table/Table';
import './result.scss';

interface ResultProps {
    totalQuestions: number;
    result: { score: number, correctAnswers: number, wrongAnswers: number };
    onTryAgain: () => void
}

const Result: React.FC<ResultProps> = ({ totalQuestions, result, onTryAgain }) => {
    const [name, setName] = useState('');
    const [inputText, setInputText] = useState('');
    const [highScores, setHighScores] = useState(Array<{ name: string, score: number }>);
    const [showScores, setShowScores] = useState(false);
    const [nameIsValid, setNameIsValid] = useState(true);
    const [nameIsEmpty, setNameIsEmpty] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('highScores') !== null) {
            setHighScores(JSON.parse(localStorage.getItem('highScores') || '') || []);
        }
    }, []);

    const handleSave = () => {
        const score = {
            name,
            score: result.score
        };

        const newHighScores = [...highScores, score].sort((a, b) => b.score - a.score);
        setHighScores(newHighScores);
        setShowScores(true);
        localStorage.setItem('highScores', JSON.stringify(newHighScores));
    }

    const handleTryAgain = () => {
        setShowScores(false);
        setHighScores([]);
        onTryAgain();
    }

    const checkName = (name: string) => {
        setNameIsEmpty(false);
        if (name.trim() === "") {
            setNameIsEmpty(true);
            setInputText(name);
        } else if (highScores?.filter(score => score.name.toLowerCase() === name.toLowerCase()).length !== 0) {
            setNameIsValid(false);
            setInputText(name);
        } else {
            setInputText(name);
            setName(name);
            setNameIsValid(true);
        }
    }

    return <section className='result'>
        <h3>Result</h3>
        <p>
            Total Questions: <span>{totalQuestions}</span>
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
        <button onClick={handleTryAgain}>
            Try again
        </button>
        {!showScores ? <><h3>
            Enter your name bellow <br /> to save your score!
        </h3>
            <div>
                {!nameIsValid && <p className='wrong-name'>Name is taken!!</p>}
                {nameIsEmpty && <p className='empty-name'>Name is empty, please enter your name!!</p>}
                <input placeholder='Your Name' value={inputText} onChange={(evt) => checkName(evt.target.value)} />
            </div>
            <button onClick={handleSave} disabled={!nameIsValid || nameIsEmpty}>Save</button></> : <>
            <Table highScores={highScores}/>
        </>}
    </section>;
}

export default Result;
