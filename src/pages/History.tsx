import { useQuizHistory } from "../hooks/useQuizHistory";
import { useTheme } from "../theme/useTheme";

export const History = () => {
    const history = useQuizHistory();
    const { theme } = useTheme();

    if (history.length === 0) {
        return (
            <div className="mx-auto flex w-full max-w-5xl items-center justify-center py-20">
                <div className="text-center">
                    <h1
                        className="text-3xl font-bold"
                        style={{
                            color: theme.colors.text,
                        }}
                    >
                        No Quiz History
                    </h1>

                    <p
                        className="mt-2"
                        style={{
                            color:
                                theme.colors.mutedText,
                        }}
                    >
                        Complete a quiz to see
                        your results here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-5xl">
            {/* Header */}
            <div className="mb-8">
                <h1
                    className="text-3xl font-bold tracking-tight"
                    style={{
                        color: theme.colors.text,
                    }}
                >
                    Quiz History
                </h1>

                <p
                    className="mt-2"
                    style={{
                        color:
                            theme.colors.mutedText,
                    }}
                >
                    Your previous quiz sessions.
                </p>
            </div>

            {/* History list */}
            <div className="space-y-4">
                {history.map((quiz) => (
                    <div
                        key={quiz.id}
                        className="rounded-2xl p-5 transition-all duration-200"
                        style={{
                            backgroundColor:
                                theme.colors.surface,
                            border: `1px solid ${theme.colors.border}`,
                        }}
                    >
                        {/* Session header */}
                        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h2
                                className="font-semibold"
                                style={{
                                    color:
                                        theme.colors
                                            .text,
                                }}
                            >
                                Quiz Session
                            </h2>

                            <span
                                className="text-sm"
                                style={{
                                    color:
                                        theme.colors
                                            .mutedText,
                                }}
                            >
                                {new Date(
                                    quiz.timestamp
                                ).toLocaleString()}
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
                            <div>
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
                                    className="mt-1 text-xl font-semibold"
                                    style={{
                                        color:
                                            theme.colors
                                                .primary,
                                    }}
                                >
                                    {quiz.accuracy}%
                                </p>
                            </div>

                            <div>
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
                                    className="mt-1 text-xl font-semibold"
                                    style={{
                                        color:
                                            theme.colors
                                                .correct,
                                    }}
                                >
                                    {
                                        quiz.correctAnswers
                                    }
                                </p>
                            </div>

                            <div>
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
                                    className="mt-1 text-xl font-semibold"
                                    style={{
                                        color:
                                            theme.colors
                                                .wrong,
                                    }}
                                >
                                    {quiz.wrongAnswers}
                                </p>
                            </div>

                            <div>
                                <p
                                    className="text-sm"
                                    style={{
                                        color:
                                            theme.colors
                                                .mutedText,
                                    }}
                                >
                                    Average
                                </p>

                                <p
                                    className="mt-1 text-xl font-semibold"
                                    style={{
                                        color:
                                            theme.colors
                                                .text,
                                    }}
                                >
                                    {(quiz.averageTime /1000).toFixed(2)} sec
                                </p>
                            </div>

                            <div>
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
                                    className="mt-1 text-xl font-semibold"
                                    style={{
                                        color:
                                            theme.colors
                                                .text,
                                    }}
                                >
                                    {(quiz.fastestAnswer/1000).toFixed(2)} sec
                                </p>
                            </div>

                            <div>
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
                                    className="mt-1 text-xl font-semibold"
                                    style={{
                                        color:
                                            theme.colors
                                                .text,
                                    }}
                                >
                                    {(quiz.totalTime/1000).toFixed(2)} sec
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};