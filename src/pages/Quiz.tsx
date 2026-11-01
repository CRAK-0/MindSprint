import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import type { QuizConfig } from "../types/quiz";
import { useQuiz } from "../hooks/useQuiz";
import { useTheme } from "../theme/useTheme";

type StateConfig = {
  config: QuizConfig;
  totalQuestions: number;
};

export const Quiz = () => {
  const {
    session,
    isSubmitted,
    isFinished,
    result,
    startQuiz,
    submit,
    selectedAnswer,
  } = useQuiz();

  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as StateConfig | null;
  const { theme } = useTheme();

  const [elapsedTime, setElapsedTime] = useState(0);

  // Question timer
  useEffect(() => {
    if (!session || isSubmitted || isFinished) return;

    const interval = setInterval(() => {
      setElapsedTime(Date.now() - session.questionStartTime);
    }, 100);

    return () => clearInterval(interval);
  }, [session?.questionStartTime, isSubmitted, isFinished]);

  // Reset timer for each question
  useEffect(() => {
    if (!session) return;

    setElapsedTime(0);
  }, [session?.questionStartTime]);

  // Initialize quiz
  useEffect(() => {
    if (!state) return;

    startQuiz(state.config, state.totalQuestions);
  }, []);

  const handleOptionClick = (option: string | number) => {
    submit(option);
  };

  const handleRestart = () => {
    if (!state) {
      navigate("/");
      return;
    }

    startQuiz(state.config, state.totalQuestions);
  };

  const handleQuizDetails = () => {
    navigate("/quiz-details", {
      state: {
        answeredQuestions: session?.answeredQuestions,
      },
    });
  };

  const handleQuizSetup = () => {
    navigate("/");
  };

  const formatTime = (milliseconds: number) => {
    return `${(milliseconds / 1000).toFixed(2)}s`;
  };

  const cardStyle = {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
  };

  const mutedStyle = {
    color: theme.colors.mutedText,
  };

  // No active session
  if (session === null) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center px-5 py-12">
        <section
          className="w-full max-w-lg rounded-2xl p-8 text-center sm:p-12"
          style={cardStyle}
        >
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl font-bold"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.primary,
            }}
          >
            ?
          </div>

          <h1 className="mt-6 text-2xl font-bold sm:text-3xl">
            No active quiz.
          </h1>

          <p className="mt-2 text-sm" style={mutedStyle}>
            Set up a practice session before starting.
          </p>

          <button
            onClick={handleQuizSetup}
            className="mt-7 rounded-xl px-7 py-3 font-semibold transition hover:brightness-110"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            Setup Quiz →
          </button>
        </section>
      </main>
    );
  }

  // Quiz completed
  if (isFinished && result) {
    return (
      <main className="mx-auto w-full max-w-5xl px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        {/* Header */}
        <header className="mb-10 text-center">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: theme.colors.primary }}
          >
            Session completed
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Quiz <span style={{ color: theme.colors.primary }}>complete.</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base" style={mutedStyle}>
            Here's a breakdown of your performance.
          </p>

          {session.endReason === "question-pool-exhausted" && (
            <div
              role="status"
              className="mx-auto mt-6 max-w-xl rounded-xl p-4 text-sm"
              style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                color: theme.colors.mutedText,
              }}
            >
              You've completed all unique questions available for this range.
              Try expanding the range to continue practicing.
            </div>
          )}
        </header>

        {/* Main result */}
        <section
          className="mb-5 rounded-2xl p-6 text-center sm:p-8"
          style={cardStyle}
        >
          <p className="text-sm font-medium" style={mutedStyle}>
            Overall accuracy
          </p>

          <p
            className="mt-3 text-6xl font-bold tracking-tight tabular-nums sm:text-7xl"
            style={{ color: theme.colors.primary }}
          >
            {result.accuracy}%
          </p>

          <div
            className="mx-auto mt-6 h-2 max-w-md overflow-hidden rounded-full"
            style={{ backgroundColor: theme.colors.background }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.max(0, Math.min(100, result.accuracy))}%`,
                backgroundColor: theme.colors.primary,
              }}
            />
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl p-5" style={cardStyle}>
            <p className="text-sm" style={mutedStyle}>
              Correct
            </p>

            <p
              className="mt-3 text-3xl font-bold tabular-nums"
              style={{ color: theme.colors.correct }}
            >
              {result.correctAnswers}
            </p>
          </div>

          <div className="rounded-2xl p-5" style={cardStyle}>
            <p className="text-sm" style={mutedStyle}>
              Wrong
            </p>

            <p
              className="mt-3 text-3xl font-bold tabular-nums"
              style={{ color: theme.colors.wrong }}
            >
              {result.wrongAnswers}
            </p>
          </div>

          <div className="rounded-2xl p-5" style={cardStyle}>
            <p className="text-sm" style={mutedStyle}>
              Average time
            </p>

            <p className="mt-3 text-3xl font-bold tabular-nums">
              {formatTime(result.averageTime)}
            </p>
          </div>

          <div className="rounded-2xl p-5" style={cardStyle}>
            <p className="text-sm" style={mutedStyle}>
              Fastest answer
            </p>

            <p className="mt-3 text-3xl font-bold tabular-nums">
              {formatTime(result.fastestAnswer)}
            </p>
          </div>
        </section>

        {/* Total time */}
        <section
          className="mb-8 flex items-center justify-between rounded-2xl p-5 sm:p-6"
          style={cardStyle}
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={mutedStyle}
            >
              Total session time
            </p>

            <p className="mt-2 text-2xl font-bold tabular-nums">
              {formatTime(result.totalTime)}
            </p>
          </div>

          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.primary,
            }}
          >
            ◷
          </div>
        </section>

        {/* Actions */}
        <section className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-xl px-6 py-4 font-bold transition hover:brightness-110 active:scale-[0.98]"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            Start Again →
          </button>

          <button
            onClick={handleQuizDetails}
            className="flex-1 rounded-xl px-6 py-4 font-semibold transition hover:brightness-110"
            style={{
              backgroundColor: theme.colors.surface,
              color: theme.colors.text,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            Review Answers
          </button>
        </section>
      </main>
    );
  }

  // Active quiz
  const currentQuestion = session.currentQuestion;
  const progress =
    (session.currentQuestionNumber / session.totalQuestions) * 100;

  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-5xl flex-col justify-center px-5 py-10 sm:px-8">
      {/* Quiz header */}
      <header className="mb-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.colors.primary }}
            >
              Math Sprint
            </p>

            <p className="mt-2 text-sm font-medium" style={mutedStyle}>
              Question {session.currentQuestionNumber} of{" "}
              {session.totalQuestions}
            </p>
          </div>

          <div
            className="rounded-xl px-4 py-2.5 text-lg font-bold tabular-nums"
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              color: theme.colors.primary,
            }}
          >
            {(elapsedTime / 1000).toFixed(1)}s
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="h-2 overflow-hidden rounded-full"
          style={{ backgroundColor: theme.colors.surface }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(100, progress)}%`,
              backgroundColor: theme.colors.primary,
            }}
          />
        </div>
      </header>

      {/* Question */}
      <section className="mb-10 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={mutedStyle}
        >
          Solve the following
        </p>

        <h1 className="mt-6 break-words text-5xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {currentQuestion.question}
        </h1>
      </section>

      {/* Answer options */}
      <section className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4">
        {currentQuestion.options.map((option, index) => {
          const isCorrect = option === currentQuestion.correctAnswer;
          const isSelected = option === selectedAnswer;

          const showCorrect = isSubmitted && isCorrect;
          const showWrong = isSubmitted && isSelected && !isCorrect;

          const optionBackground = showCorrect
            ? theme.colors.correctBackground
            : showWrong
              ? theme.colors.wrongBackground
              : theme.colors.surface;

          const optionColor = showCorrect
            ? theme.colors.correct
            : showWrong
              ? theme.colors.wrong
              : theme.colors.text;

          const optionBorder = showCorrect
            ? theme.colors.correct
            : showWrong
              ? theme.colors.wrong
              : theme.colors.border;

          return (
            <button
              key={`${option}-${index}`}
              onClick={() => handleOptionClick(option)}
              disabled={isSubmitted}
              className="group relative flex min-h-20 items-center justify-center rounded-2xl px-4 py-5 text-2xl font-bold tabular-nums transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] disabled:translate-y-0 disabled:cursor-default sm:min-h-24 sm:text-3xl"
              style={{
                backgroundColor: optionBackground,
                color: optionColor,
                border: `1px solid ${optionBorder}`,
              }}
            >
              <span>{option}</span>

              {showCorrect && (
                <span className="absolute right-3 top-3 text-sm">✓</span>
              )}

              {showWrong && (
                <span className="absolute right-3 top-3 text-sm">✕</span>
              )}
            </button>
          );
        })}
      </section>

      {/* Answer feedback */}
      {isSubmitted && (
        <p
          className="mt-6 text-center text-sm font-medium"
          style={{
            color:
              selectedAnswer === currentQuestion.correctAnswer
                ? theme.colors.correct
                : theme.colors.wrong,
          }}
          role="status"
        >
          {selectedAnswer === currentQuestion.correctAnswer
            ? "Correct! Well done."
            : `Not quite. The correct answer is ${currentQuestion.correctAnswer}.`}
        </p>
      )}

      {/* Footer information */}
      <footer
        className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-5 sm:flex-row"
        style={{ borderColor: theme.colors.border }}
      >
        <p className="text-xs" style={mutedStyle}>
          {isSubmitted
            ? "Preparing your next question..."
            : "Choose the correct answer to continue."}
        </p>

        <p className="text-xs font-medium" style={mutedStyle}>
          Stay focused. Keep improving.
        </p>
      </footer>
    </main>
  );
};

export default Quiz;
