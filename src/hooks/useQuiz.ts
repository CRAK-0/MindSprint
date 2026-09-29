import { useState } from "react";
import type { QuizConfig, QuizSession } from "../types/quiz";
import { createQuizSession, nextQuestion, submitAnswer } from "../quiz/quizSession";

export const useQuiz = () => {
    const [session, setSession] = useState<QuizSession | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const startQuiz = (
    quizConfig: QuizConfig,
    totalQuestions: number
) => {
    const newSession = createQuizSession(
        quizConfig,
        totalQuestions
    );
    
    setSession(newSession);
    setIsSubmitted(false);
};


    const submit = (userAnswer: number) => {
    const currentSession = session;
    if (currentSession === null) {
    return;
}
    const submittedSession = submitAnswer(currentSession, userAnswer);
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
        startQuiz,
        submit,
        next,
    };
};