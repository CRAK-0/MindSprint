import { useLocation, useNavigate } from "react-router-dom";
import type { AnsweredQuestion } from "../types/quiz";

export const QuizDetails = () => {
    const location = useLocation();
    

    const answeredQuestions = location.state?.answeredQuestions;
    
    const navigate = useNavigate();

    const BackToHome = () => {
        navigate("/quiz")
    }


    if (!answeredQuestions?.length) {
        return (
            <div className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-3xl font-bold">
                        Quiz Details
                    </h1>
                    <button onClick={BackToHome}>Back To Home</button>

                    <p className="mt-4 text-zinc-400">
                        No answered questions available.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        Quiz Details
                    </h1>
                    <button onClick={BackToHome}>Back To Home</button>

                    <p className="mt-2 text-zinc-400">
                        Question-by-question breakdown
                    </p>
                </div>

                <div className="space-y-4">
                    {answeredQuestions.map((question:AnsweredQuestion, index:number) => (
                        <div
                            key={index}
                            className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm text-zinc-500">
                                        Question {index + 1}
                                    </p>

                                    <h2 className="mt-1 text-xl font-semibold">
                                        {question.question}
                                    </h2>
                                </div>

                                <span
                                    className={
                                        question.isCorrect
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }
                                >
                                    {question.isCorrect
                                        ? "Correct"
                                        : "Wrong"}
                                </span>
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                <div>
                                    <p className="text-sm text-zinc-500">
                                        Your Answer
                                    </p>
                                    <p className="mt-1 font-medium">
                                        {question.userAnswer}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-zinc-500">
                                        Correct Answer
                                    </p>
                                    <p className="mt-1 font-medium">
                                        {question.correctAnswer}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-zinc-500">
                                        Time
                                    </p>
                                    <p className="mt-1 font-medium">
                                        {(question.timeTaken)/1000} sec
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-zinc-500">
                                        Category
                                    </p>
                                    <p className="mt-1 font-medium">
                                        {question.category}
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
