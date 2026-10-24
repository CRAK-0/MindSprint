import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const cubeQuestion = (min: number, max: number): Question => {
  // Generate a random number for the cube question
  const num = randomInteger(min, max);

  // Build the question and calculate its correct answer
  const question = `${num}³`;
  const correctAnswer = num * num * num;
  const category = "cubes";

  // Store possible incorrect answers
  const candidates: number[] = [];

  // Generate nearby cubes as plausible distractors
  for (let offset = -5; offset <= 5; offset++) {
    const candidate = num + offset;

    if (candidate >= min && candidate <= max && candidate !== num) {
      candidates.push(candidate * candidate * candidate);
    }
  }

  // Add answers close to the correct result
  for (let offset = -10; offset <= 10; offset++) {
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
