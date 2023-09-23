import { useEffect, useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import AnimatedLetters from './components/AnimatedLetters/AnimatedLetters';
import { mockQuizz } from './utils/db';

function App() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const title = ['Q', 'u', 'i', 'z'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000)
  }, [])

  return (
    <>
      <header>
        <h1 className='title'>
          <AnimatedLetters letterClass={letterClass}
            strArray={title}
            idx={11} /></h1>
      </header>
      <Quiz questions={mockQuizz.questions} />
    </>
  )
}

export default App
