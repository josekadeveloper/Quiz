import { useEffect, useState, useRef } from 'react';
import './answerTimer.scss';

interface AnswersTimerProps {
    duration: number;
    onTimeUp: () => void
}

const AnswersTimer: React.FC<AnswersTimerProps> = ({ duration, onTimeUp }) => {
    const [counter, setCounter] = useState(0);
    const [progressLoaded, setProgressLoaded] = useState(0);
    const intervalRef = useRef(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((cur) => cur + 1);
        }, 100);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        setProgressLoaded(100 * (counter / duration));

        if (counter >= duration) {
            clearInterval(intervalRef.current);
            onTimeUp();
        }
    }, [counter]);

    return <section className='answer-timer'>
        <div 
        style={{
            width: `${progressLoaded}%`,
            backgroundColor: `${
                progressLoaded < 50
                    ? 'lightgreen'
                    : progressLoaded < 70
                    ? 'orange'
                    : 'red'

            }`
        }}
        className='progress'></div>
    </section>;
}

export default AnswersTimer;