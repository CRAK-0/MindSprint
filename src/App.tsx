import { useState } from "react";
import { useQuiz } from "./hooks/useQuiz";
import type { QuizConfig } from "./types/quiz";

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
        startQuiz,
        submit,
        next,
    } = useQuiz();

    const [answer, setAnswer] = useState("");

    const handleSubmit = () => {
        submit(Number(answer));
    };

    return (
        <div>
            <h1>MindSprint Test</h1>

            {!session && (
                <button onClick={() => startQuiz(quizConfig, 5)}>
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
        </div>
    );
}

export default App;