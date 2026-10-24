import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const cubeRootQuestion = (min: number, max: number): Question => {
  // Generate the number whose cube root will be asked
  const num = randomInteger(min, max);

  // Cube the number to create the question
  const question = `∛${num * num * num}`;
  const correctAnswer = num;
  const category = "cubeRoots";

  // Store possible incorrect answers
  const candidates: number[] = [];

  // Generate nearby integers within the configured range
  for (let offset = -5; offset <= 5; offset++) {
    const candidate = num + offset;

    if (candidate >= min && candidate <= max && candidate !== num) {
      candidates.push(candidate);
    }
  }

  // Add a few more nearby answers when valid
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
