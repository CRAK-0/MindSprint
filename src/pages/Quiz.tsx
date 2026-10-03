import { useEffect, useState } from "react";
import type { QuizConfig } from "../types/quiz";
import { useQuiz } from "../hooks/useQuiz";
import { useLocation, useNavigate } from "react-router-dom";

type StateConfig = {
    config:QuizConfig,
    totalQuestions: number,
}

export const Quiz = () => {
    const {
        session,
        isSubmitted,
        isFinished,
        result,
        startQuiz,
        submit,
        next,
    } = useQuiz();

    const navigate = useNavigate();
    const location = useLocation();
    
    const state = location.state as StateConfig|null;

    const [answer, setAnswer] = useState("");

    useEffect(() => {
        if(state){
            startQuiz(state.config,state.totalQuestions)
        }
    },[])

    const handleSubmit = () => {
        if (answer.trim() === "") return;

        submit(Number(answer));
        setAnswer("");
    };

    const handleNext = () => {
        next();
        setAnswer("");
    };
    const handleRestart = () => {
        if(state){
        startQuiz(state.config,state.totalQuestions)}
    }

    const handleQuizDetails = () => {
        navigate("/quiz-details", {
            state: {
                answeredQuestions: session?.answeredQuestions,
            },
        });
    };

    const handleQuizSetup = () => {
        navigate("/quizSetup");
    }

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
                                {(result.averageTime)/1000}sec
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
        </div>
    );
};