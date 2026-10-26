import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createBalancedOptions } from "../utils/options";

export const additionQuestion = (digits: number): Question => {
  //min and max no for the addition
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  //random no for the question
  const num1 = randomInteger(min, max);
  const num2 = randomInteger(min, max);

  //correct answer
  const correctAnswer = num1 + num2;

  //question
  const question = `${num1} + ${num2}`;

  const category = "addition";

  //candidate for the options
  const candidate1: number[] = [];
  const candidate2: number[] = [];

  for (let offset = -5; offset <= 5; offset++) {
    candidate1.push(offset + correctAnswer);
  }

  for (let offset = -2; offset <= 2; offset++) {
    candidate2.push(offset * 10 + correctAnswer);
  }

  //createOptions helps in suffle the options and select from them
  const options = createBalancedOptions(correctAnswer, candidate1, candidate2);
  return {
    question,
    correctAnswer,
    options,
    category,
  };
};
