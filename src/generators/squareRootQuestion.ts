import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const squareRootQuestion = (min: number, max: number): Question => {
  // Generate a random number whose square root will be asked
  const num = randomInteger(min, max);

  // Square the number to create the question
  const question = `√${num * num}`;
  const correctAnswer = num;
  const category = "squareRoots";

  // Store possible incorrect answers
  const candidates: number[] = [];

  // Generate nearby integers within the configured range
  for (let offset = -5; offset <= 5; offset++) {
    const candidate = num + offset;

    if (candidate >= min && candidate <= max && candidate !== num) {
      candidates.push(candidate);
    }
  }

  // Add extra nearby integer distractors
  for (const offset of [-2, -1, 1, 2]) {
    const candidate = correctAnswer + offset;

    if (candidate >= min && candidate <= max) {
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
