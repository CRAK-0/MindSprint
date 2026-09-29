import { createQuizSession, submitAnswer, nextQuestion } from "./quiz/quizSession";
import { calculateScore } from "./quiz/scoring";
import type { QuizConfig, QuizSession } from "./types/quiz";
const App = () => {
    const config: QuizConfig = {
    tables: { selected: true, min: 1, max: 10 },
    squares: { selected: true, min: 1, max: 10 },
    cubes: { selected: true, min: 1, max: 10 },
    squareRoots: { selected: true, min: 1, max: 10 },
    cubeRoots: { selected: false, min: 1, max: 10 },
};
const testSession: QuizSession = {
    totalQuestions: 4,

    answeredQuestions: [
        {
            question: "5 × 3",
            correctAnswer: 15,
            category: "tables",
            userAnswer: 15,
            timeTaken: 2000,
            isCorrect: true,
        },
        {
            question: "7²",
            correctAnswer: 49,
            category: "squares",
            userAnswer: 45,
            timeTaken: 3000,
            isCorrect: false,
        },
        {
            question: "4³",
            correctAnswer: 64,
            category: "cubes",
            userAnswer: 64,
            timeTaken: 1500,
            isCorrect: true,
        },
        {
            question: "√81",
            correctAnswer: 9,
            category: "squareRoots",
            userAnswer: 9,
            timeTaken: 4000,
            isCorrect: true,
        },
    ],

    currentQuestion: {
        question: "√81",
        correctAnswer: 9,
        category: "squareRoots",
    },

    totalTime: 12000,

    quizConfig: config,

    quizStartTime: 1000,
    questionStartTime: 9000,
};

const result = calculateScore(testSession);

console.log("Score:", result);
  return (
    <div>
    </div>
  )
}

export default App
