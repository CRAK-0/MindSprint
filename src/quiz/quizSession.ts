import type { QuizSession, QuizConfig, AnsweredQuestion } from "../types/quiz";
import { getElapsedTime, startTimer } from "../utils/timer";
import { quizEngine } from "./quizEngine";

export const createQuizSession = (quizConfig: QuizConfig, totalQuestions: number):QuizSession => {
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

export const submitAnswer = (session:QuizSession,userAnswer:number):QuizSession => {
    let isCorrect:boolean = false;
    if(session.currentQuestion.correctAnswer === userAnswer){
        isCorrect = true
    }
    const timeTaken = getElapsedTime(session.questionStartTime);
    const answeredQuestion:AnsweredQuestion = {
        question: session.currentQuestion.question,
        correctAnswer: session.currentQuestion.correctAnswer,
        category: session.currentQuestion.category,
        userAnswer,
        timeTaken:timeTaken,
        isCorrect,
    }
    session.answeredQuestions.push(answeredQuestion);

    if(session.answeredQuestions.length === session.totalQuestions){
        session.totalTime = Date.now() - session.quizStartTime;
    }
    return session;
    
}

export const nextQuestion =(session: QuizSession): QuizSession|null => {

    if (session.answeredQuestions.length === session.totalQuestions) {
    return null;
}

    const next = quizEngine(session.quizConfig);

    session.currentQuestion = next;
    session.questionStartTime = startTimer();    

    return session;
}