import type { Question } from "../types/quiz";

export const getQuestionKey = (question: Question): string => {
  if (question.category === "tables") {
    const match = question.question.match(/^\s*(\d+)\s*×\s*(\d+)\s*$/);

    if (match) {
      const a = Number(match[1]);
      const b = Number(match[2]);

      return `tables:${Math.min(a, b)}x${Math.max(a, b)}`;
    }
  }

  return `${question.category}:${question.question.trim()}`;
};
