import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import type { QuizCategory, QuizConfig } from "../types/quiz";
import { getQuizSetup, saveQuizSetup } from "../utils/configStorage";
import { useTheme } from "../theme/useTheme";

type ValidationError = {
  category: QuizCategory | "totalQuestions" | "categories";
  message: string;
};

const categories: {
  key: QuizCategory;
  title: string;
  description: string;
  symbol: string;
}[] = [
  {
    key: "tables",
    title: "Tables",
    description: "Multiplication tables",
    symbol: "×",
  },
  {
    key: "squares",
    title: "Squares",
    description: "Square calculations",
    symbol: "x²",
  },
  {
    key: "cubes",
    title: "Cubes",
    description: "Cube calculations",
    symbol: "x³",
  },
  {
    key: "squareRoots",
    title: "Square Roots",
    description: "Find square roots",
    symbol: "√",
  },
  {
    key: "cubeRoots",
    title: "Cube Roots",
    description: "Find cube roots",
    symbol: "∛",
  },
  {
    key: "percentage",
    title: "Percentage",
    description: "Percentage calculations",
    symbol: "%",
  },
  {
    key: "ratio",
    title: "Ratio",
    description: "Ratio calculations",
    symbol: "∶",
  },
  {
    key: "fraction",
    title: "Fractions",
    description: "Fraction calculations",
    symbol: "½",
  },
  {
    key: "simplification",
    title: "Simplification",
    description: "BODMAS and mixed calculations",
    symbol: "±",
  },
  {
    key: "addition",
    title: "Addition",
    description: "Addition calculations",
    symbol: "+",
  },
  {
    key: "subtraction",
    title: "Subtraction",
    description: "Subtraction calculations",
    symbol: "−",
  },
  {
    key: "multiplication",
    title: "Multiplication",
    description: "Multiplication calculations",
    symbol: "×",
  },
];

const initialConfig: QuizConfig = {
  tables: { selected: false, min: 1, max: 10 },
  squares: { selected: false, min: 1, max: 100 },
  cubes: { selected: false, min: 1, max: 20 },
  squareRoots: { selected: false, min: 1, max: 100 },
  addition: { selected: false, digits: 2 },
  subtraction: { selected: false, digits: 2 },
  multiplication: { selected: false, min: 1, max: 10 },
  cubeRoots: { selected: false, min: 1, max: 20 },
  percentage: { selected: false, difficulty: "beginner" },
  fraction: { selected: false, difficulty: "beginner" },
  ratio: { selected: false },
  simplification: { selected: false, difficulty: "beginner" },
};

export const QuizSetup = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [config, setConfig] = useState<QuizConfig>(initialConfig);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const selectedCount = categories.filter(
    ({ key }) => config[key].selected,
  ).length;

  useEffect(() => {
    const savedConfig = getQuizSetup();

    if (savedConfig !== null) {
      setConfig((currentConfig) => ({
        ...currentConfig,
        ...savedConfig.config,
      }));

      setTotalQuestions(savedConfig.totalQuestions);
    }
  }, []);

  const validateQuizConfig = (configData: QuizConfig, questions: number) => {
    const validationErrors: ValidationError[] = [];

    const hasSelectedCategory = categories.some(
      ({ key }) => configData[key].selected,
    );

    if (!hasSelectedCategory) {
      validationErrors.push({
        category: "categories",
        message: "Select at least one category to continue.",
      });
    }

    for (const { key } of categories) {
      const category = configData[key];

      if (!category.selected) continue;

      if ("min" in category && "max" in category) {
        if (category.min < 0 || category.max < 0) {
          validationErrors.push({
            category: key,
            message: "Minimum and maximum must be 0 or greater.",
          });
        }

        if (category.min > category.max) {
          validationErrors.push({
            category: key,
            message: "Minimum cannot be greater than maximum.",
          });
        }
      }

      if ("digits" in category) {
        if (!Number.isInteger(category.digits) || category.digits < 1) {
          validationErrors.push({
            category: key,
            message: "Digits must be a positive integer.",
          });
        }
      }
    }

    if (questions <= 0 || !Number.isInteger(questions)) {
      validationErrors.push({
        category: "totalQuestions",
        message: "Enter a valid positive number of questions.",
      });
    }

    setErrors(validationErrors);

    return validationErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [category, field] = e.target.name.split("-") as [
      QuizCategory,
      "selected" | "min" | "max" | "digits",
    ];

    const value =
      field === "selected" ? e.target.checked : Number(e.target.value);

    const updatedConfig = {
      ...config,
      [category]: {
        ...config[category],
        [field]: value,
      },
    };

    setConfig(updatedConfig);
    validateQuizConfig(updatedConfig, totalQuestions);
  };

  const handleQuestionsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);

    setTotalQuestions(newValue);
    validateQuizConfig(config, newValue);
  };

  const handleDifficultyChange = (
    key: QuizCategory,
    difficulty: "beginner" | "intermediate" | "master",
  ) => {
    const updatedConfig = {
      ...config,
      [key]: {
        ...config[key],
        difficulty,
      },
    };

    setConfig(updatedConfig);
    validateQuizConfig(updatedConfig, totalQuestions);
  };

  const getCategoryError = (category: QuizCategory) =>
    errors.find((error) => error.category === category);

  const categorySelectionError = errors.find(
    (error) => error.category === "categories",
  );

  const totalQuestionsError = errors.find(
    (error) => error.category === "totalQuestions",
  );

  const handleSubmit = () => {
    const validationErrors = validateQuizConfig(config, totalQuestions);

    if (validationErrors.length > 0) return;

    saveQuizSetup(config, totalQuestions);

    navigate("/quiz", {
      state: { config, totalQuestions },
    });
  };

  const cardStyle = {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
  };

  const inputStyle = {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    border: `1px solid ${theme.colors.border}`,
  };

  const labelStyle = {
    color: theme.colors.mutedText,
  };

  return (
    <main
      className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 lg:px-10"
      style={{ color: theme.colors.text }}
    >
      {/* Page heading */}
      <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: theme.colors.primary }}
          >
            Configuration
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Set up your{" "}
            <span style={{ color: theme.colors.primary }}>quiz.</span>
          </h1>

          <p
            className="mt-3 max-w-lg text-sm leading-relaxed sm:text-base"
            style={labelStyle}
          >
            Build your practice session. Choose your topics, adjust the
            difficulty and get started.
          </p>
        </div>

        <div
          className="flex w-fit items-center gap-3 rounded-xl px-4 py-3"
          style={cardStyle}
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            {selectedCount}
          </div>

          <div>
            <p className="text-sm font-semibold">Topics selected</p>
            <p className="text-xs" style={labelStyle}>
              Out of {categories.length} available
            </p>
          </div>
        </div>
      </header>

      {/* Category section */}
      <section className="mb-10">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Choose your topics
            </h2>
            <p className="mt-1 text-sm" style={labelStyle}>
              Select one or more categories to practice.
            </p>
          </div>

          <span className="text-xs" style={labelStyle}>
            {selectedCount} selected
          </span>
        </div>

        {categorySelectionError && (
          <div
            className="mb-5 rounded-xl px-4 py-3 text-sm"
            style={{
              backgroundColor: theme.colors.wrongBackground,
              color: theme.colors.wrong,
              border: `1px solid ${theme.colors.wrong}`,
            }}
          >
            {categorySelectionError.message}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ key, title, description, symbol }) => {
            const category = config[key];
            const selected = category.selected;
            const error = getCategoryError(key);

            return (
              <article
                key={key}
                className="rounded-2xl p-5 transition-all duration-200"
                style={{
                  backgroundColor: selected
                    ? theme.colors.card
                    : theme.colors.surface,
                  border: `1px solid ${
                    selected ? theme.colors.primary : theme.colors.border
                  }`,
                  boxShadow: selected
                    ? `0 0 0 1px ${theme.colors.primary}22`
                    : "none",
                }}
              >
                {/* Category selection */}
                <label className="flex cursor-pointer items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold"
                      style={{
                        backgroundColor: selected
                          ? theme.colors.primary
                          : theme.colors.background,
                        color: selected
                          ? theme.colors.background
                          : theme.colors.mutedText,
                      }}
                    >
                      {symbol}
                    </div>

                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-xs" style={labelStyle}>
                        {description}
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    name={`${key}-selected`}
                    checked={selected}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer"
                    style={{ accentColor: theme.colors.primary }}
                  />
                </label>

                {/* Category configuration */}
                {selected && (
                  <div
                    className="mt-5 border-t pt-4"
                    style={{ borderColor: theme.colors.border }}
                  >
                    {"digits" in category ? (
                      <div>
                        <label
                          htmlFor={`${key}-digits`}
                          className="mb-2 block text-xs font-medium"
                          style={labelStyle}
                        >
                          Number of digits
                        </label>

                        <input
                          id={`${key}-digits`}
                          name={`${key}-digits`}
                          type="number"
                          min={1}
                          value={category.digits}
                          onChange={handleChange}
                          className="w-full rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2"
                          style={inputStyle}
                        />
                      </div>
                    ) : "min" in category && "max" in category ? (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor={`${key}-min`}
                            className="mb-2 block text-xs font-medium"
                            style={labelStyle}
                          >
                            Minimum
                          </label>

                          <input
                            id={`${key}-min`}
                            name={`${key}-min`}
                            type="number"
                            min={0}
                            value={category.min}
                            onChange={handleChange}
                            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2"
                            style={inputStyle}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`${key}-max`}
                            className="mb-2 block text-xs font-medium"
                            style={labelStyle}
                          >
                            Maximum
                          </label>

                          <input
                            id={`${key}-max`}
                            name={`${key}-max`}
                            type="number"
                            min={0}
                            value={category.max}
                            onChange={handleChange}
                            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    ) : "difficulty" in category ? (
                      <div>
                        <label
                          htmlFor={`${key}-difficulty`}
                          className="mb-2 block text-xs font-medium"
                          style={labelStyle}
                        >
                          Difficulty
                        </label>

                        <select
                          id={`${key}-difficulty`}
                          value={category.difficulty}
                          onChange={(e) =>
                            handleDifficultyChange(
                              key,
                              e.target.value as
                                | "beginner"
                                | "intermediate"
                                | "master",
                            )
                          }
                          className="w-full rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2"
                          style={inputStyle}
                        >
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="master">Master</option>
                        </select>
                      </div>
                    ) : (
                      <p className="text-xs" style={labelStyle}>
                        No additional configuration required.
                      </p>
                    )}
                  </div>
                )}

                {error && (
                  <p
                    className="mt-3 text-xs"
                    style={{ color: theme.colors.wrong }}
                  >
                    {error.message}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Quiz length */}
      <section className="rounded-2xl p-5 sm:p-7" style={cardStyle}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.colors.primary }}
            >
              Session settings
            </p>

            <h2 className="mt-2 text-xl font-semibold">Number of questions</h2>

            <p className="mt-1 text-sm" style={labelStyle}>
              Decide how many questions you want to solve.
            </p>
          </div>

          <div className="w-full sm:max-w-40">
            <label
              htmlFor="totalQuestions"
              className="mb-2 block text-xs font-medium"
              style={labelStyle}
            >
              Total questions
            </label>

            <input
              id="totalQuestions"
              type="number"
              min={1}
              value={totalQuestions}
              onChange={handleQuestionsChange}
              className="w-full rounded-xl px-4 py-3 text-lg font-semibold outline-none focus:ring-2"
              style={inputStyle}
            />
          </div>
        </div>

        {totalQuestionsError && (
          <p className="mt-3 text-sm" style={{ color: theme.colors.wrong }}>
            {totalQuestionsError.message}
          </p>
        )}
      </section>

      {/* Bottom action */}
      <footer className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs" style={labelStyle}>
          Your configuration will be saved for your next visit.
        </p>

        <button
          onClick={handleSubmit}
          className="w-full rounded-xl px-8 py-4 text-sm font-bold transition-all duration-200 hover:brightness-110 active:scale-[0.98] sm:w-auto"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          }}
        >
          Start Quiz <span className="ml-2">→</span>
        </button>
      </footer>
    </main>
  );
};

export default QuizSetup;
