import type { QuizResult, QuizSession } from "../types/quiz";

export const calculateScore = (session: QuizSession): QuizResult => {
    const correctAnswers = session.answeredQuestions
    .filter((question) => {
        return question.isCorrect === true;
    }).length;
    const wrongAnswers = session.totalQuestions - correctAnswers;
    const accuracy = Number(((correctAnswers/session.totalQuestions) * 100).toFixed(2));
    const firstQuestionTime = session.answeredQuestions[0].timeTaken;
    const totalAnswerTime = session.answeredQuestions
    .reduce((total, question) => {
        // your calculation
        total += question.timeTaken;
        return total;
    }, 0);
    const averageTime = totalAnswerTime/session.totalQuestions;

    const fastestAnswer = session.answeredQuestions.reduce(
    (fastest, question) => {
        // compare fastest with question.timeTaken
        if (question.timeTaken < fastest) {
            return question.timeTaken;
        }

    return fastest;
    },
    firstQuestionTime
);
    const slowestAnswer = session.answeredQuestions.reduce(
    (slowest, question) => {
        // compare fastest with question.timeTaken
        if (question.timeTaken > slowest) {
            return question.timeTaken;
        }

    return slowest;
    },
    firstQuestionTime
);

    return{
        correctAnswers:correctAnswers,
        wrongAnswers:wrongAnswers,
        accuracy:accuracy,
        averageTime:averageTime,
        fastestAnswer:fastestAnswer,
        slowestAnswer:slowestAnswer,
        totalTime:session.totalTime,
    }
};
