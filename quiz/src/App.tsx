import Quiz from './components/Quiz/Quiz'
import { mockQuizz } from './utils/db'

function App() {
  return (
    <>
      <header>
        <h1>Let's Go to answer differents questions</h1>
      </header>
      <main>
        <section>
          <Quiz questions={mockQuizz.questions} />
        </section>
      </main>
    </>
  )
}

export default App
