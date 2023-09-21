import React from 'react';
import './options.scss'

interface OptionsProps {
    startGame: () => void;
    stopGame: () => void;
}

const Options: React.FC<OptionsProps> = ({ startGame, stopGame }) => {
    return (
        <section className='game-options'>
            <button className='start-game' onClick={startGame}>Start Game</button>
            <button className='stop-game' onClick={stopGame}>Stop Game</button>
        </section>
    );
};

export default Options;