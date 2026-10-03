import { useEffect } from "react";
import type { QuizConfig } from "../types/quiz";
import { useQuiz } from "../hooks/useQuiz";
import { useLocation, useNavigate } from "react-router-dom";

type StateConfig = {
    config: QuizConfig;
    totalQuestions: number;
};

export const Quiz = () => {
    const {
        session,
        isSubmitted,
        isFinished,
        result,
        startQuiz,
        submit,
        selectedAnswer,
    } = useQuiz();

    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as StateConfig | null;

    useEffect(() => {
        if (state) {
            startQuiz(state.config, state.totalQuestions);
        }
    }, []);

    const handleOptionClick = (option: number) => {
        submit(option);
    };

    const handleRestart = () => {
        if (state) {
            startQuiz(state.config, state.totalQuestions);
        }
    };

    const handleQuizDetails = () => {
        navigate("/quiz-details", {
            state: {
                answeredQuestions: session?.answeredQuestions,
            },
        });
    };

    const handleQuizSetup = () => {
        navigate("/quizSetup");
    };

    if (isFinished && result) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100">
                <div className="w-full max-w-xl">
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
                                {result.averageTime / 1000}sec
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
                        onClick={handleRestart}
                        className="mt-8 w-full rounded-xl bg-white px-5 py-3 font-semibold text-black"
                    >
                        Start Again
                    </button>

                    <button
                        onClick={handleQuizDetails}
                        className="mt-4 w-full rounded-xl bg-zinc-800 px-5 py-3 font-semibold text-white"
                    >
                        View Details
                    </button>
                </div>
            </div>
        );
    }

    if (session === null) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100">
                <button
                    onClick={handleQuizSetup}
                    className="rounded-xl bg-white px-6 py-3 font-semibold text-black"
                >
                    Setup Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100">
            <div className="w-full max-w-xl">
                <div className="mb-8">
                    <p className="text-sm text-zinc-400">
                        Question {session.answeredQuestions.length + 1} /{" "}
                        {session.totalQuestions}
                    </p>

                    <h1 className="mt-4 text-center text-5xl font-bold">
                        {session.currentQuestion.question}
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {session.currentQuestion.options.map((option) => {
                        const isCorrect =
                            option === session.currentQuestion.correctAnswer;

                        const isSelected =
                            option === selectedAnswer;

                        const showCorrect =
                            isSubmitted && isCorrect;

                        const showWrong =
                            isSubmitted &&
                            isSelected &&
                            !isCorrect;

                        return (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                disabled={isSubmitted}
                                className={`
                                    rounded-xl px-5 py-4 text-xl font-semibold transition
                                    ${
                                        showCorrect
                                            ? "bg-green-600"
                                            : showWrong
                                            ? "bg-red-600"
                                            : "bg-zinc-900"
                                    }
                                `}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
