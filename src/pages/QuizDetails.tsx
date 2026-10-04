import { useLocation, useNavigate } from "react-router-dom";

import type { AnsweredQuestion } from "../types/quiz";
import { useTheme } from "../theme/useTheme";

export const QuizDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { theme } = useTheme();

    const answeredQuestions =
        location.state?.answeredQuestions as
            | AnsweredQuestion[]
            | undefined;

    const backToHome = () => {
        navigate("/");
    };

    if (!answeredQuestions?.length) {
        return (
            <div className="mx-auto w-full max-w-4xl">
                <div
                    className="rounded-2xl p-6"
                    style={{
                        backgroundColor:
                            theme.colors.surface,
                        border: `1px solid ${theme.colors.border}`,
                    }}
                >
                    <h1
                        className="text-3xl font-bold"
                        style={{
                            color: theme.colors.text,
                        }}
                    >
                        Quiz Details
                    </h1>

                    <p
                        className="mt-2"
                        style={{
                            color:
                                theme.colors.mutedText,
                        }}
                    >
                        No answered questions
                        available.
                    </p>

                    <button
                        onClick={backToHome}
                        className="mt-6 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 hover:opacity-80"
                        style={{
                            backgroundColor:
                                theme.colors.primary,
                            color:
                                theme.colors.background,
                        }}
                    >
                        Back To Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-4xl">
            {/* Header */}
            <div className="mb-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1
                            className="text-3xl font-bold tracking-tight"
                            style={{
                                color:
                                    theme.colors.text,
                            }}
                        >
                            Quiz Details
                        </h1>

                        <p
                            className="mt-2"
                            style={{
                                color:
                                    theme.colors
                                        .mutedText,
                            }}
                        >
                            Question-by-question
                            breakdown
                        </p>
                    </div>

                    <button
                        onClick={backToHome}
                        className="rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 hover:opacity-80"
                        style={{
                            backgroundColor:
                                theme.colors.surface,
                            color:
                                theme.colors.text,
                            border: `1px solid ${theme.colors.border}`,
                        }}
                    >
                        Back To Home
                    </button>
                </div>
            </div>

            {/* Questions */}
            <div className="space-y-4">
                {answeredQuestions.map(
                    (question, index) => (
                        <div
                            key={index}
                            className="rounded-2xl p-5"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .surface,
                                border: `1px solid ${theme.colors.border}`,
                            }}
                        >
                            {/* Question header */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p
                                        className="text-sm"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .mutedText,
                                        }}
                                    >
                                        Question{" "}
                                        {index + 1}
                                    </p>

                                    <h2
                                        className="mt-1 text-xl font-semibold"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .text,
                                        }}
                                    >
                                        {
                                            question.question
                                        }
                                    </h2>
                                </div>

                                <span
                                    className="rounded-full px-3 py-1 text-sm font-semibold"
                                    style={{
                                        color:
                                            question.isCorrect
                                                ? theme
                                                      .colors
                                                      .correct
                                                : theme
                                                      .colors
                                                      .wrong,
                                        backgroundColor:
                                            question.isCorrect
                                                ? theme
                                                      .colors
                                                      .correctBackground
                                                : theme
                                                      .colors
                                                      .wrongBackground,
                                    }}
                                >
                                    {question.isCorrect
                                        ? "Correct"
                                        : "Wrong"}
                                </span>
                            </div>

                            {/* Details */}
                            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
                                <div>
                                    <p
                                        className="text-sm"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .mutedText,
                                        }}
                                    >
                                        Your Answer
                                    </p>

                                    <p
                                        className="mt-1 font-medium"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .text,
                                        }}
                                    >
                                        {
                                            question.userAnswer
                                        }
                                    </p>
                                </div>

                                <div>
                                    <p
                                        className="text-sm"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .mutedText,
                                        }}
                                    >
                                        Correct Answer
                                    </p>

                                    <p
                                        className="mt-1 font-medium"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .text,
                                        }}
                                    >
                                        {
                                            question.correctAnswer
                                        }
                                    </p>
                                </div>

                                <div>
                                    <p
                                        className="text-sm"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .mutedText,
                                        }}
                                    >
                                        Time
                                    </p>

                                    <p
                                        className="mt-1 font-medium"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .text,
                                        }}
                                    >
                                        {(
                                            question.timeTaken /
                                            1000
                                        ).toFixed(2)}{" "}
                                        sec
                                    </p>
                                </div>

                                <div>
                                    <p
                                        className="text-sm"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .mutedText,
                                        }}
                                    >
                                        Category
                                    </p>

                                    <p
                                        className="mt-1 font-medium capitalize"
                                        style={{
                                            color:
                                                theme
                                                    .colors
                                                    .text,
                                        }}
                                    >
                                        {
                                            question.category
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};