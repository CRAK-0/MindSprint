import { useEffect, useState } from "react";
import { useQuiz } from "./hooks/useQuiz";
import type { QuizConfig, QuizHistory } from "./types/quiz";

const quizConfig: QuizConfig = {
    tables: {
        selected: true,
        min: 1,
        max: 10,
    },
    squares: {
        selected: true,
        min: 1,
        max: 20,
    },
    cubes: {
        selected: false,
        min: 1,
        max: 10,
    },
    squareRoots: {
        selected: false,
        min: 1,
        max: 20,
    },
    cubeRoots: {
        selected: false,
        min: 1,
        max: 10,
    },
};

function App() {
    const {
        session,
        isSubmitted,
        isFinished,
        result,
        startQuiz,
        submit,
        next,
    } = useQuiz();

    const [answer, setAnswer] = useState("");

    useEffect(() => {
    if (result === null) {
        return;
    }

    // your existing history-saving logic
    
    const stored = localStorage.getItem("quiz");
    
    if (result === null) {
        return;
    }
    
    const newRecord: QuizHistory = {
        ...result,
        id: Date.now(),
        timestamp: Date.now(),
    };
    
    let history: QuizHistory[];
    
    if (stored === null) {
        history = [newRecord];
    } else {
        history = JSON.parse(stored) as QuizHistory[];
    }
    
    const updatedHistory = [...history, newRecord];
    
    localStorage.setItem("quiz", JSON.stringify(updatedHistory));
    
}, [result]);    

    const handleSubmit = () => {
        submit(Number(answer));
    };

    return (
        <div>
            <h1>MindSprint Test</h1>

            {!session && (
                <button onClick={() => startQuiz(quizConfig, 3)}>
                    Start Quiz
                </button>
            )}

            {session && (
                <div>
                    <h2>{session.currentQuestion.question}</h2>

                    <p>
                        Answered: {session.answeredQuestions.length} /{" "}
                        {session.totalQuestions}
                    </p>

                    {!isSubmitted && (
                        <div>
                            <input
                                type="number"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />

                            <button onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    )}

                    {isSubmitted && (
                        <button onClick={next}>
                            Next Question
                        </button>
                    )}
                </div>
            )}
            {isFinished && result && (
    <div>
        <h2>Quiz Finished</h2>

        <p>Correct: {result.correctAnswers}</p>
        <p>Wrong: {result.wrongAnswers}</p>
        <p>Accuracy: {result.accuracy}%</p>
        <p>Average Time: {result.averageTime} ms</p>
        <p>Fastest: {result.fastestAnswer} ms</p>
        <p>Slowest: {result.slowestAnswer} ms</p>
        <p>Total Time: {result.totalTime} ms</p>
        <button onClick={() => startQuiz(quizConfig,3)}>
            Restart Quiz
        </button>
    </div>
)}
        </div>
    );
}

export default App;