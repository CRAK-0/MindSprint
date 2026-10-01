import { useState } from "react";
import type { QuizConfig } from "./types/quiz";
import { useQuiz } from "./hooks/useQuiz";
import { History } from "./pages/History";

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

    const [quizConfig] = useState<QuizConfig>({
        tables: {
            selected: true,
            min: 1,
            max: 10,
        },
        squares: {
            selected: false,
            min: 1,
            max: 100,
        },
        cubes: {
            selected: false,
            min: 1,
            max: 20,
        },
        squareRoots: {
            selected: false,
            min: 1,
            max: 100,
        },
        cubeRoots: {
            selected: false,
            min: 1,
            max: 20,
        },
    });

    const handleStart = () => {
        startQuiz(quizConfig, 3);
    };

    const handleSubmit = () => {
        if (answer.trim() === "") return;

        submit(Number(answer));
        setAnswer("");
    };

    const handleNext = () => {
        next();
        setAnswer("");
    };

    if (isFinished && result) {
        return (
            <div className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
                <div className="mx-auto max-w-xl">
                    <h1 className="mb-8 text-3xl font-bold">
                        Quiz Complete
                    </h1>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-xl bg-zinc-900 p-5">
                            <p className="text-zinc-400">Accuracy</p>
                            <p className="text-2xl font-semibold">
                                {result.accuracy}%
                            </p>
                        </div>

                        <div className="rounded-xl bg-zinc-900 p-5">
                            <p className="text-zinc-400">Correct</p>
                            <p className="text-2xl font-semibold">
                                {result.correctAnswers}
                            </p>
                        </div>

                        <div className="rounded-xl bg-zinc-900 p-5">
                            <p className="text-zinc-400">Wrong</p>
                            <p className="text-2xl font-semibold">
                                {result.wrongAnswers}
                            </p>
                        </div>

                        <div className="rounded-xl bg-zinc-900 p-5">
                            <p className="text-zinc-400">Average Time</p>
                            <p className="text-2xl font-semibold">
                                {result.averageTime}ms
                            </p>
                        </div>

                        <div className="rounded-xl bg-zinc-900 p-5">
                            <p className="text-zinc-400">Fastest</p>
                            <p className="text-2xl font-semibold">
                                {result.fastestAnswer}ms
                            </p>
                        </div>

                        <div className="rounded-xl bg-zinc-900 p-5">
                            <p className="text-zinc-400">Total Time</p>
                            <p className="text-2xl font-semibold">
                                {result.totalTime}ms
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleStart}
                        className="mt-8 w-full rounded-xl bg-white px-5 py-3 font-semibold text-black"
                    >
                        Start Again
                    </button>
                </div>
            </div>
        );
    }

    if (session === null) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100">
                <button
                    onClick={handleStart}
                    className="rounded-xl bg-white px-6 py-3 font-semibold text-black"
                >
                    Start Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100">
            <div className="w-full max-w-xl">
                <div className="mb-8">
                    <p className="text-sm text-zinc-400">
                        Question{" "}
                        {session.answeredQuestions.length + 1} /{" "}
                        {session.totalQuestions}
                    </p>

                    <h1 className="mt-4 text-center text-5xl font-bold">
                        {session.currentQuestion.question}
                    </h1>
                </div>

                <div className="flex flex-col gap-4">
                    <input
                        type="number"
                        value={answer}
                        onChange={(event) => setAnswer(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && !isSubmitted) {
                                handleSubmit();
                            }
                        }}
                        disabled={isSubmitted}
                        autoFocus
                        className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-center text-2xl outline-none"
                    />

                    {!isSubmitted ? (
                        <button
                            onClick={handleSubmit}
                            className="rounded-xl bg-white px-5 py-3 font-semibold text-black"
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="rounded-xl bg-white px-5 py-3 font-semibold text-black"
                        >
                            {session.answeredQuestions.length ===
                            session.totalQuestions
                                ? "View Result"
                                : "Next"}
                        </button>
                    )}
                </div>
            </div>
            <History/>
        </div>
    );
}

export default App;