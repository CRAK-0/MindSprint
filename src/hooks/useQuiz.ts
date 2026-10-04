import { useState } from "react";
import type {
    QuizConfig,
    QuizResult,
    QuizSession,
} from "../types/quiz";
import {
    createQuizSession,
    nextQuestion,
    submitAnswer,
} from "../quiz/quizSession";
import { calculateScore } from "../quiz/scoring";
import { saveQuizHistory } from "../utils/history";

export const useQuiz = () => {
    const [session, setSession] = useState<QuizSession | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [result, setResult] = useState<QuizResult | null>(null);
    const [selectedAnswer, setSelectedAnswer] =
        useState<number | null>(null);

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
        setSelectedAnswer(null);
        setIsSubmitted(false);
        setIsFinished(false);
    };

    const submit = (userAnswer: number) => {
        const currentSession = session;

        if (currentSession === null) {
            return;
        }

        setSelectedAnswer(userAnswer);

        const submittedSession = submitAnswer(
            currentSession,
            userAnswer
        );

        // Update session immediately so feedback is visible
        setSession(submittedSession);
        setIsSubmitted(true);

        // Final question
        if (
            submittedSession.answeredQuestions.length ===
            submittedSession.totalQuestions
        ) {
            const quizResult = calculateScore(submittedSession);

            setTimeout(() => {
                setResult(quizResult);
                saveQuizHistory(quizResult);
                setIsFinished(true);
            }, 1500);

            return;
        }

        // Move to next question after feedback
        setTimeout(() => {
            next(submittedSession);
        }, 1500);
    };

    const next = (currentSession: QuizSession) => {
        const nextSession = nextQuestion(currentSession);

        if (nextSession === null) {
            return;
        }

        nextSession.currentQuestionNumber =
            currentSession.currentQuestionNumber + 1;

        setSession(nextSession);
        setSelectedAnswer(null);
        setIsSubmitted(false);
    };

    return {
        session,
        isSubmitted,
        isFinished,
        result,
        startQuiz,
        submit,
        selectedAnswer,
    };
};