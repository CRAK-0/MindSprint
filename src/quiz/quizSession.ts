import type { QuizSession, QuizConfig, AnsweredQuestion } from "../types/quiz";
import { getElapsedTime, startTimer } from "../utils/timer";
import { quizEngine } from "./quizEngine";
import { validateQuizConfig } from "./validation";

export const createQuizSession = (quizConfig: QuizConfig, totalQuestions: number):QuizSession => {
    validateQuizConfig(quizConfig,totalQuestions);
    const question  = quizEngine(quizConfig);
    const answeredQuestions:AnsweredQuestion[] = [];
    const currentQuestion = question;
    const totalTime = 0;
    const quizStartTime = startTimer();
    const questionStartTime = quizStartTime;

    return {
    totalQuestions,
    answeredQuestions,
    currentQuestion,
    totalTime,
    quizConfig,
    questionStartTime:questionStartTime,
    quizStartTime:quizStartTime
};
}

export const submitAnswer = (
    session: QuizSession,
    userAnswer: number
): QuizSession => {
    const isCorrect =
        session.currentQuestion.correctAnswer === userAnswer;

    const timeTaken = getElapsedTime(session.questionStartTime);

    const answeredQuestion: AnsweredQuestion = {
        question: session.currentQuestion.question,
        correctAnswer: session.currentQuestion.correctAnswer,
        category: session.currentQuestion.category,
        userAnswer,
        timeTaken,
        isCorrect,
    };

    const updatedSession: QuizSession = {
        ...session,
        answeredQuestions: [
            ...session.answeredQuestions,
            answeredQuestion,
        ],
    };

    if (updatedSession.answeredQuestions.length === updatedSession.totalQuestions) {
        return finishQuiz(updatedSession);
    }

    return updatedSession;
};

export const nextQuestion =(session: QuizSession): QuizSession|null => {

    if (session.answeredQuestions.length === session.totalQuestions) {
    return null;
}

    const next = quizEngine(session.quizConfig);

    const updatedSession:QuizSession = {
        ...session,
        currentQuestion : next,
        questionStartTime : startTimer(),
    }


    return updatedSession;
}

export const finishQuiz = (session: QuizSession): QuizSession => {
    const totalTime = Date.now() - session.quizStartTime;
    session.totalTime = totalTime;
    return session;
};