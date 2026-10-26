import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const multiplicationQuestion = (min: number, max: number): Question => {
  const num1 = randomInteger(min, max);
  const num2 = randomInteger(min, max);

  const question = `${num1} × ${num2}`;
  const correctAnswer = num1 * num2;
  const category = "multiplication";

  const candidate1: number[] = [];
  const candidate2: number[] = [];

  for (let offset = -2; offset <= 2; offset++) {
    candidate1.push(num1 + offset);
    candidate2.push(num2 + offset);
  }

  const candidates: number[] = [];

  // Candidates from nearby operand combinations
  for (const n1 of candidate1) {
    for (const n2 of candidate2) {
      const candidate = n1 * n2;

      if (candidate > 0 && candidate !== correctAnswer) {
        candidates.push(candidate);
      }
    }
  }

  // Candidates near the correct answer
  for (let offset = -5; offset <= 5; offset++) {
    const candidate = correctAnswer + offset;

    if (candidate > 0 && candidate !== correctAnswer) {
      candidates.push(candidate);
    }
  }

  const options = createOptions(correctAnswer, candidates);

  return { question, correctAnswer, options, category };
};
