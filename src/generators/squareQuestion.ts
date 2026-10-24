import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const squareQuestion = (min: number, max: number): Question => {
  // Generate a random number to square
  const num = randomInteger(min, max);

  // Build the question and calculate its correct answer
  const question = `${num}²`;
  const correctAnswer = num * num;
  const category = "squares";

  // Store possible incorrect answers
  const candidates: number[] = [];

  // Generate nearby perfect squares
  for (let offset = -2; offset <= 2; offset++) {
    const candidate = num + offset;

    if (candidate >= min && candidate <= max && candidate !== num) {
      candidates.push(candidate * candidate);
    }
  }

  // Add values close to the correct answer
  for (let offset = -5; offset <= 5; offset++) {
    const candidate = correctAnswer + offset;

    if (candidate > 0 && candidate !== correctAnswer) {
      candidates.push(candidate);
    }
  }

  // Select the final answer options
  const options = createOptions(correctAnswer, candidates);

  return {
    question,
    correctAnswer,
    options,
    category,
  };
};
