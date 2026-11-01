import type { QuizCategory, QuizConfig } from "../types/quiz";
import { throwError } from "../utils/errors";

export const validateQuizConfig = (
  quizConfig: QuizConfig,
  totalQuestions: number,
) => {
  const categories = Object.keys(quizConfig) as QuizCategory[];

  const selectedCategories = categories.filter(
    (category) => quizConfig[category].selected,
  );

  if (selectedCategories.length === 0) {
    throwError("At least one category must be selected.");
  }

  selectedCategories.forEach((category) => {
    const config = quizConfig[category];

    // Categories with minimum and maximum values
    if ("min" in config && config.min > config.max) {
      throwError("Minimum cannot be greater than maximum.");
    }

    // Categories with digit configuration
    if ("digits" in config) {
      if (!Number.isInteger(config.digits) || config.digits < 1) {
        throwError("Digit count must be a positive integer.");
      }
    }
  });

  if (totalQuestions <= 0 || !Number.isInteger(totalQuestions)) {
    throwError("Number of questions is invalid.");
  }
};
