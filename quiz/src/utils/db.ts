export const mockQuizz = {
  questions: [
    {
      question:
        "Which of the following is NOT a benefit of using React.js?",
      choices: [
        "Fast performance",
        "Code reusability",
        "Server-side rendering",
        "Virtual DOM",
      ],
      type: "MCQs",
      correctAnswer: "Server-side rendering",
    },
    {
      question: "What is the primary purpose of the Virtual DOM in React.js?",
      choices: [
        "To render components on the server",
        "To create a physical representation of the DOM",
        "To increase performance by minimizing DOM updates",
        "To replace the Original DOM",
      ],
      type: "MCQs",
      correctAnswer: "To increase performance by minimizing DOM updates",
    },
    {
      question: "Which type of framework is ReactJS primarily known as?",
      choices: [
        "Backend framework",
        "User Interface framework",
        "Database framework",
        "Both a and b",
      ],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },
    {
      question: "How can data be passed to components from outside in React?",
      choices: [
        "Using Render with arguments",
        "Using setState method",
        "Using PropTypes",
        "Using props",
      ],
      type: "MCQs",
      correctAnswer: "Using props",
    },
    {
      question: "In which programming language is React.js primarily written?",
      choices: [
        "Python",
        "Java",
        "JavaScript",
        "Both b and c",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },
    {
      question: "What is the role of Babel in a React.js application?",
      choices: [
        "To interpret JavaScript code",
        "To transpile JavaScript code",
        "To compile JavaScript code",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To compile JavaScript code",
    },
    {
      question: "Which React method is used to update functional component's state?",
      choices: [
        "ComponentDidUpdate",
        "ComponentWillMount",
        "ComponentDidMount",
        "setState",
      ],
      type: "MCQs",
      correctAnswer: "setState",
    },
    {
      question: "What is the purpose of the PropTypes library in React?",
      choices: [
        "To define the type of data for components' props",
        "To handle HTTP requests in React",
        "To validate CSS styles",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To define the type of data for components' props",
    },
    {
      question: "Which of the following is a valid way to create a React component?",
      choices: [
        "Using the class keyword",
        "Using HTML tags",
        "Using for loops",
        "Using while loops",
      ],
      type: "MCQs",
      correctAnswer: "Using the class keyword",
    },
    {
      question: "What is the primary purpose of the React.js library?",
      choices: [
        "To create server-side applications",
        "To manage databases",
        "To build user interfaces",
        "To write backend code",
      ],
      type: "MCQs",
      correctAnswer: "To build user interfaces",
    }
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0
}