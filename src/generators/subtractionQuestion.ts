import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createBalancedOptions } from "../utils/options";

export const subtractionQuestion = (digits: number): Question => {
  // Min and max numbers for subtraction
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  // Random numbers for the question
  const num1 = randomInteger(min, max);
  const num2 = randomInteger(min, max);

  // Correct answer
  const correctAnswer = num1 - num2;

  // Question
  const question = `${num1} - ${num2}`;

  const category = "subtraction";

  // Candidates for the options
  const candidate1: number[] = [];
  const candidate2: number[] = [];

  for (let offset = -5; offset <= 5; offset++) {
    candidate1.push(correctAnswer + offset);
  }

  for (let offset = -2; offset <= 2; offset++) {
    candidate2.push(correctAnswer + offset * 10);
  }

  // Create and shuffle the options
  const options = createBalancedOptions(correctAnswer, candidate1, candidate2);

  return {
    question,
    correctAnswer,
    options,
    category,
  };
};
