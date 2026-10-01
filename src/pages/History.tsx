import { useQuizHistory } from "../hooks/useQuizHistory";

export const History = () => {
    const history = useQuizHistory();

    if (history.length === 0) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        No Quiz History
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        Complete a quiz to see your results here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        Quiz History
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        Your previous quiz sessions.
                    </p>
                </div>

                <div className="space-y-4">
                    {history.map((quiz) => (
                        <div
                            key={quiz.id}
                            className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <h2 className="font-semibold">
                                    Quiz Session
                                </h2>

                                <span className="text-sm text-zinc-400">
                                    {new Date(
                                        quiz.timestamp
                                    ).toLocaleString()}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
                                <div>
                                    <p className="text-sm text-zinc-400">
                                        Accuracy
                                    </p>
                                    <p className="mt-1 text-xl font-semibold">
                                        {quiz.accuracy}%
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-zinc-400">
                                        Correct
                                    </p>
                                    <p className="mt-1 text-xl font-semibold">
                                        {quiz.correctAnswers}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-zinc-400">
                                        Wrong
                                    </p>
                                    <p className="mt-1 text-xl font-semibold">
                                        {quiz.wrongAnswers}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-zinc-400">
                                        Average
                                    </p>
                                    <p className="mt-1 text-xl font-semibold">
                                        {quiz.averageTime}ms
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-zinc-400">
                                        Fastest
                                    </p>
                                    <p className="mt-1 text-xl font-semibold">
                                        {quiz.fastestAnswer}ms
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-zinc-400">
                                        Total Time
                                    </p>
                                    <p className="mt-1 text-xl font-semibold">
                                        {quiz.totalTime}ms
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};