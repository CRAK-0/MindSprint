import type { QuizSession, QuizConfig, AnsweredQuestion } from "../types/quiz";
import { getQuestionKey } from "../utils/questionKey";
import { getElapsedTime, startTimer } from "../utils/timer";
import { quizEngine } from "./quizEngine";
import { validateQuizConfig } from "./validation";

export const createQuizSession = (
  quizConfig: QuizConfig,
  totalQuestions: number,
): QuizSession => {
  validateQuizConfig(quizConfig, totalQuestions);
  const question = quizEngine(quizConfig);
  const answeredQuestions: AnsweredQuestion[] = [];
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
    questionStartTime: questionStartTime,
    quizStartTime: quizStartTime,
    currentQuestionNumber: 1,
    endReason: null,
  };
};

export const submitAnswer = (
  session: QuizSession,
  userAnswer: number,
): QuizSession => {
  const isCorrect = session.currentQuestion.correctAnswer === userAnswer;

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
    answeredQuestions: [...session.answeredQuestions, answeredQuestion],
  };

  if (
    updatedSession.answeredQuestions.length === updatedSession.totalQuestions
  ) {
    return finishQuiz(updatedSession);
  }

  return updatedSession;
};

export const nextQuestion = (session: QuizSession): QuizSession | null => {
  if (session.answeredQuestions.length >= session.totalQuestions) {
    return null;
  }

  const usedQuestions = new Set(
    session.answeredQuestions.map((answered) =>
      getQuestionKey({
        question: answered.question,
        correctAnswer: answered.correctAnswer,
        category: answered.category,
        options: [],
      }),
    ),
  );

  // Also protect against the current question being absent
  // from answeredQuestions due to a different call sequence.
  usedQuestions.add(getQuestionKey(session.currentQuestion));

  let next = null;

  for (let attempt = 0; attempt < 50; attempt++) {
    const candidate = quizEngine(session.quizConfig);
    const key = getQuestionKey(candidate);

    if (!usedQuestions.has(key)) {
      next = candidate;
      break;
    }
  }

  if (!next) {
    return finishQuiz(session, "question-pool-exhausted");
  }

  return {
    ...session,
    currentQuestion: next,
    questionStartTime: startTimer(),
  };
};

export const finishQuiz = (
  session: QuizSession,
  endReason: "completed" | "question-pool-exhausted" = "completed",
): QuizSession => {
  return {
    ...session,
    totalTime: Date.now() - session.quizStartTime,
    endReason,
  };
};
