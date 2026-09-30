import { useState } from "react";
import type { QuizConfig, QuizResult, QuizSession } from "../types/quiz";
import { createQuizSession, nextQuestion, submitAnswer } from "../quiz/quizSession";
import { calculateScore } from "../quiz/scoring";

export const useQuiz = () => {
    const [session, setSession] = useState<QuizSession | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [result, setResult] = useState<QuizResult | null>(null);

    const startQuiz = (
    quizConfig: QuizConfig,
    totalQuestions: number
) => {
    setResult(null);
    const newSession = createQuizSession(
        quizConfig,
        totalQuestions
    );
    
    setSession(newSession);
    setIsSubmitted(false);
    setIsFinished(false);
};


    const submit = (userAnswer: number) => {
    const currentSession = session;
    if (currentSession === null) {
    return;
}
    const submittedSession = submitAnswer(currentSession, userAnswer);

    
    if (submittedSession.answeredQuestions.length === submittedSession.totalQuestions) {
        const quizResult = calculateScore(submittedSession);
        setResult(quizResult);
        setIsFinished(true);
        }

    setSession(submittedSession);
    setIsSubmitted(true);
    };

    

    const next = () => {
    const currentSession = session;

    if (currentSession === null) {
        return;
    }

    const nextSession = nextQuestion(currentSession);

    if (nextSession === null) {
        return;
    }

    setSession(nextSession);
    setIsSubmitted(false);
};
return {
        session,
        isSubmitted,
        isFinished,
        result,
        startQuiz,
        submit,
        next,
    };
};