import { useQuizHistory } from "../hooks/useQuizHistory";
import { useTheme } from "../theme/useTheme";

const formatSeconds = (milliseconds: number) => {
  return `${(milliseconds / 1000).toFixed(2)} sec`;
};

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const History = () => {
  const history = useQuizHistory();
  const { theme } = useTheme();

  const { colors } = theme;

  const stats = [
    {
      label: "Accuracy",
      value: (quiz: (typeof history)[number]) => `${quiz.accuracy}%`,
      color: colors.primary,
    },
    {
      label: "Correct",
      value: (quiz: (typeof history)[number]) => quiz.correctAnswers,
      color: colors.correct,
    },
    {
      label: "Wrong",
      value: (quiz: (typeof history)[number]) => quiz.wrongAnswers,
      color: colors.wrong,
    },
    {
      label: "Average",
      value: (quiz: (typeof history)[number]) =>
        formatSeconds(quiz.averageTime),
      color: colors.text,
    },
    {
      label: "Fastest",
      value: (quiz: (typeof history)[number]) =>
        formatSeconds(quiz.fastestAnswer),
      color: colors.text,
    },
    {
      label: "Total Time",
      value: (quiz: (typeof history)[number]) => formatSeconds(quiz.totalTime),
      color: colors.text,
    },
  ];

  if (history.length === 0) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-5">
        <div
          className="w-full max-w-md rounded-3xl border p-10 text-center"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
          }}
        >
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{
              backgroundColor: colors.primary + "18",
              color: colors.primary,
            }}
          >
            <span aria-hidden="true">◷</span>
          </div>

          <h1
            className="text-2xl font-bold tracking-tight"
            style={{ color: colors.text }}
          >
            No quiz history yet
          </h1>

          <p
            className="mt-3 text-sm leading-6"
            style={{ color: colors.mutedText }}
          >
            Your completed quiz sessions will appear here. Start practicing and
            come back to track your progress.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:py-14">
      {/* Page heading */}
      <header className="mb-10">
        <div
          className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: colors.primary }}
        >
          Your progress
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: colors.text }}
            >
              Quiz History
            </h1>

            <p
              className="mt-3 text-sm sm:text-base"
              style={{ color: colors.mutedText }}
            >
              Review your previous sessions and track your improvement over
              time.
            </p>
          </div>

          <div
            className="w-fit rounded-xl border px-4 py-3"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            <p
              className="text-xs font-medium"
              style={{ color: colors.mutedText }}
            >
              Total sessions
            </p>

            <p
              className="mt-1 text-2xl font-bold tabular-nums"
              style={{ color: colors.primary }}
            >
              {history.length}
            </p>
          </div>
        </div>
      </header>

      {/* History sessions */}
      <section className="space-y-5">
        {history.map((quiz, index) => (
          <article
            key={quiz.id}
            className="overflow-hidden rounded-2xl border transition-colors duration-200"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            {/* Session header */}
            <div
              className="flex flex-col gap-3 border-b px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              style={{ borderColor: colors.border }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
                  style={{
                    backgroundColor: colors.primary + "18",
                    color: colors.primary,
                  }}
                >
                  {history.length - index}
                </div>

                <div>
                  <h2 className="font-semibold" style={{ color: colors.text }}>
                    Quiz Session
                  </h2>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: colors.mutedText }}
                  >
                    {formatDate(quiz.timestamp)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-medium"
                  style={{ color: colors.mutedText }}
                >
                  Accuracy
                </span>

                <span
                  className="rounded-lg px-3 py-1.5 text-sm font-bold tabular-nums"
                  style={{
                    backgroundColor: colors.primary + "18",
                    color: colors.primary,
                  }}
                >
                  {quiz.accuracy}%
                </span>
              </div>
            </div>

            {/* Accuracy bar */}
            <div
              className="h-1.5 w-full"
              style={{ backgroundColor: colors.border }}
            >
              <div
                className="h-full rounded-r-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, Math.max(0, quiz.accuracy))}%`,
                  backgroundColor: colors.primary,
                }}
              />
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-y-7 px-5 py-7 sm:grid-cols-3 lg:grid-cols-6 lg:px-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-xs font-medium sm:text-sm"
                    style={{ color: colors.mutedText }}
                  >
                    {stat.label}
                  </p>

                  <p
                    className="mt-2 text-xl font-bold tabular-nums sm:text-2xl"
                    style={{ color: stat.color }}
                  >
                    {stat.value(quiz)}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Footer note */}
      <p
        className="mt-8 text-center text-xs"
        style={{ color: colors.mutedText }}
      >
        Keep practicing. Every session is another step forward.
      </p>
    </main>
  );
};
