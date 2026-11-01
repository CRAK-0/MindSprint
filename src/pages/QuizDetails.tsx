import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import type { AnsweredQuestion } from "../types/quiz";
import { useTheme } from "../theme/useTheme";

export const QuizDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const answeredQuestions = location.state?.answeredQuestions as
    | AnsweredQuestion[]
    | undefined;

  const backToHome = () => {
    navigate("/");
  };

  const stats = useMemo(() => {
    if (!answeredQuestions?.length) {
      return {
        total: 0,
        correct: 0,
        incorrect: 0,
        accuracy: 0,
        totalTime: 0,
      };
    }

    const total = answeredQuestions.length;
    const correct = answeredQuestions.filter(
      (question) => question.isCorrect,
    ).length;

    const totalTime = answeredQuestions.reduce(
      (sum, question) => sum + question.timeTaken,
      0,
    );

    return {
      total,
      correct,
      incorrect: total - correct,
      accuracy: Math.round((correct / total) * 100),
      totalTime,
    };
  }, [answeredQuestions]);

  const cardStyle = {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
  };

  const mutedStyle = {
    color: theme.colors.mutedText,
  };

  const formatTime = (milliseconds: number) => {
    const seconds = milliseconds / 1000;

    if (seconds < 60) {
      return `${seconds.toFixed(1)} sec`;
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}m ${remainingSeconds}s`;
  };

  if (!answeredQuestions?.length) {
    return (
      <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8">
        <section
          className="rounded-2xl p-8 text-center sm:p-12"
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
            No quiz data found.
          </h1>

          <p className="mt-2 text-sm" style={mutedStyle}>
            Complete a quiz to see your question-by-question breakdown.
          </p>

          <button
            onClick={backToHome}
            className="mt-7 rounded-xl px-6 py-3 text-sm font-semibold transition hover:brightness-110"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            Back to Home →
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 lg:px-10">
      {/* Header */}
      <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: theme.colors.primary }}
          >
            Performance Review
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Quiz <span style={{ color: theme.colors.primary }}>breakdown.</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base" style={mutedStyle}>
            Review your answers and understand your performance.
          </p>
        </div>

        <button
          onClick={backToHome}
          className="w-fit rounded-xl px-5 py-3 text-sm font-semibold transition hover:brightness-110"
          style={{
            backgroundColor: theme.colors.surface,
            color: theme.colors.text,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          ← Back to Home
        </button>
      </header>

      {/* Performance summary */}
      <section className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {/* Total questions */}
        <div className="rounded-2xl p-5" style={cardStyle}>
          <p className="text-sm" style={mutedStyle}>
            Total Questions
          </p>

          <p className="mt-3 text-3xl font-bold tabular-nums">{stats.total}</p>

          <p className="mt-1 text-xs" style={mutedStyle}>
            Questions attempted
          </p>
        </div>

        {/* Correct */}
        <div className="rounded-2xl p-5" style={cardStyle}>
          <p className="text-sm" style={mutedStyle}>
            Correct Answers
          </p>

          <p
            className="mt-3 text-3xl font-bold tabular-nums"
            style={{ color: theme.colors.correct }}
          >
            {stats.correct}
          </p>

          <p className="mt-1 text-xs" style={mutedStyle}>
            Successfully solved
          </p>
        </div>

        {/* Incorrect */}
        <div className="rounded-2xl p-5" style={cardStyle}>
          <p className="text-sm" style={mutedStyle}>
            Incorrect Answers
          </p>

          <p
            className="mt-3 text-3xl font-bold tabular-nums"
            style={{ color: theme.colors.wrong }}
          >
            {stats.incorrect}
          </p>

          <p className="mt-1 text-xs" style={mutedStyle}>
            Needs more practice
          </p>
        </div>

        {/* Accuracy */}
        <div className="rounded-2xl p-5" style={cardStyle}>
          <p className="text-sm" style={mutedStyle}>
            Accuracy
          </p>

          <p
            className="mt-3 text-3xl font-bold tabular-nums"
            style={{ color: theme.colors.primary }}
          >
            {stats.accuracy}%
          </p>

          <p className="mt-1 text-xs" style={mutedStyle}>
            Overall accuracy
          </p>
        </div>
      </section>

      {/* Time summary */}
      <section
        className="mb-10 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        style={cardStyle}
      >
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={mutedStyle}
          >
            Time spent
          </p>

          <p className="mt-2 text-2xl font-bold tabular-nums">
            {formatTime(stats.totalTime)}
          </p>
        </div>

        <div>
          <p className="text-xs" style={mutedStyle}>
            Average time per question
          </p>

          <p className="mt-2 text-xl font-semibold tabular-nums">
            {formatTime(stats.totalTime / stats.total)}
          </p>
        </div>
      </section>

      {/* Question review */}
      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Question review
            </h2>

            <p className="mt-1 text-sm" style={mutedStyle}>
              Check your answers against the correct solutions.
            </p>
          </div>

          <span className="text-xs" style={mutedStyle}>
            {stats.total} questions
          </span>
        </div>

        <div className="space-y-4">
          {answeredQuestions.map((question, index) => (
            <article
              key={index}
              className="rounded-2xl p-5 sm:p-6"
              style={{
                ...cardStyle,
                borderLeft: `3px solid ${
                  question.isCorrect ? theme.colors.correct : theme.colors.wrong
                }`,
              }}
            >
              {/* Question heading */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.15em]"
                    style={mutedStyle}
                  >
                    Question {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold leading-relaxed sm:text-xl">
                    {question.question}
                  </h3>
                </div>

                <span
                  className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold"
                  style={{
                    color: question.isCorrect
                      ? theme.colors.correct
                      : theme.colors.wrong,
                    backgroundColor: question.isCorrect
                      ? theme.colors.correctBackground
                      : theme.colors.wrongBackground,
                  }}
                >
                  {question.isCorrect ? "✓ Correct" : "✕ Incorrect"}
                </span>
              </div>

              {/* Answer comparison */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: theme.colors.background,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <p className="text-xs font-medium" style={mutedStyle}>
                    Your answer
                  </p>

                  <p
                    className="mt-2 break-words font-semibold"
                    style={{
                      color: question.isCorrect
                        ? theme.colors.correct
                        : theme.colors.wrong,
                    }}
                  >
                    {question.userAnswer}
                  </p>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: theme.colors.background,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <p className="text-xs font-medium" style={mutedStyle}>
                    Correct answer
                  </p>

                  <p
                    className="mt-2 break-words font-semibold"
                    style={{ color: theme.colors.correct }}
                  >
                    {question.correctAnswer}
                  </p>
                </div>
              </div>

              {/* Question metadata */}
              <div
                className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-4"
                style={{ borderColor: theme.colors.border }}
              >
                <div>
                  <p className="text-xs" style={mutedStyle}>
                    Time taken
                  </p>

                  <p className="mt-1 text-sm font-semibold tabular-nums">
                    {formatTime(question.timeTaken)}
                  </p>
                </div>

                <div>
                  <p className="text-xs" style={mutedStyle}>
                    Category
                  </p>

                  <p className="mt-1 text-sm font-semibold capitalize">
                    {question.category}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom action */}
      <footer className="mt-10 flex justify-center">
        <button
          onClick={backToHome}
          className="rounded-xl px-8 py-4 text-sm font-bold transition hover:brightness-110 active:scale-[0.98]"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          }}
        >
          Back to Home →
        </button>
      </footer>
    </main>
  );
};

export default QuizDetails;
