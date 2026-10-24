import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const tableQuestion = (min: number, max: number): Question => {
  const num1 = randomInteger(min, max);
  const num2 = randomInteger(1, 10);

  const question = `${num1} × ${num2}`;
  const correctAnswer = num1 * num2;
  const category = "tables";

  const candidate1: number[] = [];
  const candidate2: number[] = [];

  for (let offset = -2; offset <= 2; offset++) {
    candidate1.push(num1 + offset);
    candidate2.push(num2 + offset);
  }

  //candidates will have the all the options
  const candidates: number[] = [];

  //Half of the candidate option
  for (let i = 0; i < Math.floor(candidate1.length / 2); i++) {
    for (let j = 0; j < Math.floor(candidate2.length / 2); j++) {
      const candidate = candidate1[i] * candidate2[j];

      if (candidate > 0) {
        candidates.push(candidate);
      }
    }
  }

  // Other half: candidates near the correct answer
  for (const offset of candidate1) {
    const candidate = correctAnswer + offset;

    if (candidate > 0 && candidate !== correctAnswer) {
      candidates.push(candidate);
    }
  }
  const options = createOptions(correctAnswer, candidates);

  return {
    question,
    correctAnswer,
    options,
    category,
  };
};
