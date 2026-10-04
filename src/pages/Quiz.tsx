import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import type { QuizConfig } from "../types/quiz";
import { useQuiz } from "../hooks/useQuiz";
import { useTheme } from "../theme/useTheme";

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

    const state =
        location.state as StateConfig | null;

    const { theme } = useTheme();

    const [elapsedTime, setElapsedTime] =
        useState(0);
    useEffect(() => {
        if (!session || isSubmitted) {
            return;
        }

        const interval = setInterval(() => {
            const elapsed =
                Date.now() -
                session.questionStartTime;

            setElapsedTime(elapsed);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [
        session?.questionStartTime,
        isSubmitted,
    ]);

    useEffect(() => {
        if (!session) {
            return;
        }

        setElapsedTime(0);
    }, [session?.questionStartTime]);

    useEffect(() => {
        if (!state) {
            return;
        }

        startQuiz(
            state.config,
            state.totalQuestions
        );
    }, []);

    const handleOptionClick = (
        option: number
    ) => {
        submit(option);
    };

    const handleRestart = () => {
        if (!state) {
            navigate("/");
            return;
        }

        startQuiz(
            state.config,
            state.totalQuestions
        );
    };

    const handleQuizDetails = () => {
        navigate("/quiz-details", {
            state: {
                answeredQuestions:
                    session?.answeredQuestions,
            },
        });
    };

    const handleQuizSetup = () => {
        navigate("/");
    };

    if (isFinished && result) {
        return (
            <div
                className="flex min-h-screen items-center justify-center px-6 py-10"
                style={{
                    backgroundColor:
                        theme.colors.background,
                    color: theme.colors.text,
                }}
            >
                <div className="w-full max-w-xl">
                    <div className="mb-8 text-center">
                        <h1
                            className="text-4xl font-bold tracking-tight"
                            style={{
                                color:
                                    theme.colors.text,
                            }}
                        >
                            Quiz Complete
                        </h1>

                        <p
                            className="mt-2"
                            style={{
                                color:
                                    theme.colors
                                        .mutedText,
                            }}
                        >
                            Here's how you
                            performed.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Accuracy */}
                        <div
                            className="rounded-2xl p-5"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .surface,
                                border: `1px solid ${theme.colors.border}`,
                            }}
                        >
                            <p
                                className="text-sm"
                                style={{
                                    color:
                                        theme.colors
                                            .mutedText,
                                }}
                            >
                                Accuracy
                            </p>

                            <p
                                className="mt-1 text-2xl font-semibold"
                                style={{
                                    color:
                                        theme.colors
                                            .primary,
                                }}
                            >
                                {result.accuracy}%
                            </p>
                        </div>

                        {/* Correct */}
                        <div
                            className="rounded-2xl p-5"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .surface,
                                border: `1px solid ${theme.colors.border}`,
                            }}
                        >
                            <p
                                className="text-sm"
                                style={{
                                    color:
                                        theme.colors
                                            .mutedText,
                                }}
                            >
                                Correct
                            </p>

                            <p
                                className="mt-1 text-2xl font-semibold"
                                style={{
                                    color:
                                        theme.colors
                                            .correct,
                                }}
                            >
                                {
                                    result.correctAnswers
                                }
                            </p>
                        </div>

                        {/* Wrong */}
                        <div
                            className="rounded-2xl p-5"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .surface,
                                border: `1px solid ${theme.colors.border}`,
                            }}
                        >
                            <p
                                className="text-sm"
                                style={{
                                    color:
                                        theme.colors
                                            .mutedText,
                                }}
                            >
                                Wrong
                            </p>

                            <p
                                className="mt-1 text-2xl font-semibold"
                                style={{
                                    color:
                                        theme.colors
                                            .wrong,
                                }}
                            >
                                {
                                    result.wrongAnswers
                                }
                            </p>
                        </div>

                        {/* Average */}
                        <div
                            className="rounded-2xl p-5"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .surface,
                                border: `1px solid ${theme.colors.border}`,
                            }}
                        >
                            <p
                                className="text-sm"
                                style={{
                                    color:
                                        theme.colors
                                            .mutedText,
                                }}
                            >
                                Average Time
                            </p>

                            <p
                                className="mt-1 text-2xl font-semibold"
                                style={{
                                    color:
                                        theme.colors
                                            .text,
                                }}
                            >
                                {(
                                    result.averageTime /
                                    1000
                                ).toFixed(2)}
                                s
                            </p>
                        </div>

                        {/* Fastest */}
                        <div
                            className="rounded-2xl p-5"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .surface,
                                border: `1px solid ${theme.colors.border}`,
                            }}
                        >
                            <p
                                className="text-sm"
                                style={{
                                    color:
                                        theme.colors
                                            .mutedText,
                                }}
                            >
                                Fastest
                            </p>

                            <p
                                className="mt-1 text-2xl font-semibold"
                                style={{
                                    color:
                                        theme.colors
                                            .text,
                                }}
                            >
                                {(
                                    result.fastestAnswer /
                                    1000
                                ).toFixed(2)}
                                s
                            </p>
                        </div>

                        {/* Total */}
                        <div
                            className="rounded-2xl p-5"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .surface,
                                border: `1px solid ${theme.colors.border}`,
                            }}
                        >
                            <p
                                className="text-sm"
                                style={{
                                    color:
                                        theme.colors
                                            .mutedText,
                                }}
                            >
                                Total Time
                            </p>

                            <p
                                className="mt-1 text-2xl font-semibold"
                                style={{
                                    color:
                                        theme.colors
                                            .text,
                                }}
                            >
                                {(
                                    result.totalTime /
                                    1000
                                ).toFixed(2)}
                                s
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 space-y-3">
                        <button
                            onClick={
                                handleRestart
                            }
                            className="w-full rounded-xl px-5 py-3 font-semibold transition-all duration-200 hover:opacity-85"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .primary,
                                color:
                                    theme.colors
                                        .background,
                            }}
                        >
                            Start Again
                        </button>

                        <button
                            onClick={
                                handleQuizDetails
                            }
                            className="w-full rounded-xl px-5 py-3 font-semibold transition-all duration-200 hover:opacity-85"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .surface,
                                color:
                                    theme.colors
                                        .text,
                                border: `1px solid ${theme.colors.border}`,
                            }}
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (session === null) {
        return (
            <div
                className="flex min-h-screen items-center justify-center px-6"
                style={{
                    backgroundColor:
                        theme.colors.background,
                    color: theme.colors.text,
                }}
            >
                <div className="text-center">
                    <h1
                        className="text-2xl font-bold"
                        style={{
                            color:
                                theme.colors.text,
                        }}
                    >
                        No Active Quiz
                    </h1>

                    <p
                        className="mt-2"
                        style={{
                            color:
                                theme.colors
                                    .mutedText,
                        }}
                    >
                        Set up a quiz to start
                        practicing.
                    </p>

                    <button
                        onClick={
                            handleQuizSetup
                        }
                        className="mt-6 rounded-xl px-6 py-3 font-semibold transition-all duration-200 hover:opacity-85"
                        style={{
                            backgroundColor:
                                theme.colors
                                    .primary,
                            color:
                                theme.colors
                                    .background,
                        }}
                    >
                        Setup Quiz
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="flex min-h-screen items-center justify-center px-6"
            style={{
                backgroundColor:
                    theme.colors.background,
                color: theme.colors.text,
            }}
        >
            <div className="w-full max-w-xl">
                {/* Timer */}
                <div className="mb-6 text-center">
                    <p
                        className="text-sm tabular-nums"
                        style={{
                            color:
                                theme.colors
                                    .mutedText,
                        }}
                    >
                        {(
                            elapsedTime / 1000
                        ).toFixed(1)}
                        s
                    </p>
                </div>

                {/* Question information */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <p
                            className="text-sm"
                            style={{
                                color:
                                    theme.colors
                                        .mutedText,
                            }}
                        >
                            Question{" "}
                            {
                                session.currentQuestionNumber
                            }{" "}
                            /{" "}
                            {
                                session.totalQuestions
                            }
                        </p>
                    </div>

                    <h1
                        className="mt-5 text-center text-5xl font-bold tracking-tight"
                        style={{
                            color:
                                theme.colors.text,
                        }}
                    >
                        {
                            session
                                .currentQuestion
                                .question
                        }
                    </h1>
                </div>

                {/* Answer options */}
                <div className="grid grid-cols-2 gap-4">
                    {session.currentQuestion.options.map(
                        (option) => {
                            const isCorrect =
                                option ===
                                session
                                    .currentQuestion
                                    .correctAnswer;

                            const isSelected =
                                option ===
                                selectedAnswer;

                            const showCorrect =
                                isSubmitted &&
                                isCorrect;

                            const showWrong =
                                isSubmitted &&
                                isSelected &&
                                !isCorrect;

                            return (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                disabled={isSubmitted}
                                className="rounded-xl px-5 py-4 text-xl font-semibold transition-all duration-200 disabled:cursor-default"
                                style={{
                                    backgroundColor: showCorrect
                                        ? "rgba(0, 255, 102, 0.15)"
                                        : showWrong
                                        ? "rgba(255, 23, 68, 0.15)"
                                        : theme.colors.surface,
                                
                                    color: showCorrect
                                        ? "#00ff66"
                                        : showWrong
                                        ? "#ff1744"
                                        : theme.colors.text,
                                
                                    border: `1px solid ${
                                        showCorrect
                                            ? "#00ff66"
                                            : showWrong
                                            ? "#ff1744"
                                            : theme.colors.border
                                    }`,
                                }}
                            >
                                {option}
                            </button>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
};