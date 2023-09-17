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
      question: "_____ provide a way to pass data from one component to another. Fill in the blank.",
      type: "FIB",
      correctAnswer: "Props",
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
      question: "_____ is used to compile JavaScript code?",
      type: "FIB",
      correctAnswer: "Babel",
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
      question: "_______ is used to update functional component's state?",
      type: "FIB",
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