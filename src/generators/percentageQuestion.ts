import type { Question } from "../types/quiz";
import { createOptions } from "../utils/options";
import { randomInteger } from "../utils/random";

type PercentageLevel = "beginner" | "intermediate" | "master";

const percentageCandidates = (
  num1: number,
  num2: number,
  offsets: number[],
): number[] => {
  const candidates: number[] = [];

  for (const offset of offsets) {
    const percent = num1 + offset;

    if (percent > 0) {
      candidates.push(Number(((percent / 100) * num2).toFixed(2)));
    }
  }

  return candidates;
};

export const percentageQuestion = (level: PercentageLevel): Question => {
  switch (level) {
    case "beginner":
      return beginnerLevel();

    case "intermediate":
      return intermediateLevel();

    case "master":
      return masterLevel();
  }
};

const beginnerLevel = (): Question => {
  // Generate beginner question
  const num1 = randomInteger(1, 20) * 5;
  const num2 = randomInteger(1, 100) * 50;

  //correct answer
  const correctAnswer: number = Number(((num1 / 100) * num2).toFixed(2));
  const question: string = `${num1}% of ${num2}`;
  const category = "percentage";

  //candidate for the wrong options
  const candidates = percentageCandidates(num1, num2, [-10, -5, 5, 10]);

  //options
  const options = createOptions(correctAnswer, candidates);
  const difficulty = "beginner";

  return {
    correctAnswer,
    question,
    category,
    options,
    difficulty,
  };
};

const intermediateLevel = (): Question => {
  // Generate intermediate question
  const num1 = randomInteger(1, 20) * 5;
  const num2 = randomInteger(1, 1000) * 10;

  //correct answer
  const correctAnswer: number = Number(((num1 / 100) * num2).toFixed(2));
  const question: string = `${num1}% of ${num2}`;
  const category = "percentage";

  //candidate for the wrong options
  const candidates = percentageCandidates(num1, num2, [-12, -7, -3, 3, 7, 12]);

  //options
  const options = createOptions(correctAnswer, candidates);
  const difficulty = "intermediate";

  return {
    correctAnswer,
    question,
    category,
    options,
    difficulty,
  };
};

const masterLevel = (): Question => {
  // Generate master question
  const num1 = randomInteger(1, 200);
  const num2 = randomInteger(1, 10000);

  //correct answer
  const correctAnswer: number = Number(((num1 / 100) * num2).toFixed(2));
  const question: string = `${num1}% of ${num2}`;
  const category = "percentage";

  //candidate for the wrong options
  const candidates = percentageCandidates(
    num1,
    num2,
    [-25, -15, -8, 8, 15, 25],
  );

  //options
  const options = createOptions(correctAnswer, candidates);
  const difficulty = "master";

  return {
    correctAnswer,
    question,
    category,
    options,
    difficulty,
  };
};
