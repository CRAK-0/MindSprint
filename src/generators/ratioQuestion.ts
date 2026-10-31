import type { Question } from "../types/quiz";
import { createOptions } from "../utils/options";
import { randomInteger } from "../utils/random";

const gcd = (a: number, b: number): number => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

// Creates six unique string options and excludes equivalent ratios.
const createRatioOptions = (
  correctAnswer: string,
  candidates: string[],
): (string | number)[] => {
  const [correctLeft, correctRight] = correctAnswer.split(":").map(Number);

  const isValidWrongOption = (option: string): boolean => {
    const parts = option.split(":");

    if (parts.length !== 2) return false;

    const [left, right] = parts.map(Number);

    if (
      !Number.isInteger(left) ||
      !Number.isInteger(right) ||
      left <= 0 ||
      right <= 0
    ) {
      return false;
    }

    // Equivalent ratios must not appear as wrong answers.
    return left * correctRight !== right * correctLeft;
  };

  const options = new Set<string>([correctAnswer]);

  for (const candidate of candidates) {
    if (isValidWrongOption(candidate)) {
      options.add(candidate);
    }
  }

  // Add valid alternatives if the initial candidates contain duplicates
  // or equivalent ratios.
  let offset = 1;

  while (options.size < 6) {
    const candidate1 = `${correctLeft + offset}:${correctRight}`;
    const candidate2 = `${correctLeft}:${correctRight + offset}`;
    const candidate3 = `${correctLeft + offset}:${correctRight + offset}`;

    for (const candidate of [candidate1, candidate2, candidate3]) {
      if (isValidWrongOption(candidate)) {
        options.add(candidate);
      }

      if (options.size === 6) break;
    }

    offset++;
  }

  // Shuffle the options.
  const result = [...options];

  for (let i = result.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

export const ratioQuestion = (): Question => {
  // 1. Simplify a ratio.
  const simplifyRatio = (): Question => {
    const num1 = randomInteger(2, 30);
    const num2 = randomInteger(2, 30);

    const divisor = gcd(num1, num2);
    const left = num1 / divisor;
    const right = num2 / divisor;

    const correctAnswer = `${left}:${right}`;

    const wrongOptions = [
      `${left + 1}:${right}`,
      `${left}:${right + 1}`,
      `${left + 2}:${right + 1}`,
      `${left + 1}:${right + 1}`,
      `${right}:${left}`,
      `${left + 2}:${right + 3}`,
    ];

    const options = createRatioOptions(correctAnswer, wrongOptions);

    return {
      question: `Simplify the ratio ${num1}:${num2}.`,
      correctAnswer,
      options,
      category: "ratio",
    };
  };

  // 2. Find a missing quantity from a ratio.
  const missingQuantity = (): Question => {
    const left = randomInteger(1, 12);
    const right = randomInteger(1, 12);
    const multiplier = randomInteger(2, 8);

    const valueA = left * multiplier;
    const correctAnswer = right * multiplier;

    const wrongAnswers = [
      right * (multiplier - 1),
      right * (multiplier + 1),
      right * (multiplier + 2),
      left * multiplier,
      left * (multiplier + 1),
    ].filter((answer) => answer > 0 && answer !== correctAnswer);

    const options = createOptions(correctAnswer, wrongAnswers);

    return {
      question: `If A:B = ${left}:${right} and A = ${valueA}, find B.`,
      correctAnswer,
      options,
      category: "ratio",
    };
  };

  // 3. Divide a total in a given ratio.
  const divideTotal = (): Question => {
    const left = randomInteger(1, 8);
    const right = randomInteger(1, 8);
    const multiplier = randomInteger(2, 8);

    const total = (left + right) * multiplier;
    const correctAnswer = left * multiplier;

    const wrongAnswers = [
      right * multiplier,
      total - correctAnswer + 1,
      correctAnswer + multiplier,
      correctAnswer - multiplier,
      total,
    ].filter((answer) => answer >= 0 && answer !== correctAnswer);

    const options = createOptions(correctAnswer, wrongAnswers);

    return {
      question: `Divide ${total} in the ratio ${left}:${right}. What is the first share?`,
      correctAnswer,
      options,
      category: "ratio",
    };
  };

  // 4. Find the simplified ratio from two quantities.
  const ratioFromQuantities = (): Question => {
    const left = randomInteger(1, 12);
    const right = randomInteger(1, 12);
    const multiplier = randomInteger(2, 6);

    const num1 = left * multiplier;
    const num2 = right * multiplier;

    const divisor = gcd(num1, num2);
    const simplifiedLeft = num1 / divisor;
    const simplifiedRight = num2 / divisor;

    const correctAnswer = `${simplifiedLeft}:${simplifiedRight}`;

    const wrongOptions = [
      `${simplifiedRight}:${simplifiedLeft}`,
      `${simplifiedLeft + 1}:${simplifiedRight}`,
      `${simplifiedLeft}:${simplifiedRight + 1}`,
      `${simplifiedLeft + 1}:${simplifiedRight + 1}`,
      `${simplifiedLeft + 2}:${simplifiedRight + 1}`,
    ];

    const options = createRatioOptions(correctAnswer, wrongOptions);

    return {
      question: `There are ${num1} apples and ${num2} oranges. Find the ratio of apples to oranges in simplest form.`,
      correctAnswer,
      options,
      category: "ratio",
    };
  };

  // 5. Find the original quantity when a ratio changes.
  const changingRatio = (): Question => {
    const left = randomInteger(1, 6);
    const right = randomInteger(left + 1, 8);
    const multiplier = randomInteger(2, 8);
    const added = randomInteger(2, 8);

    const originalA = left * multiplier;
    const originalB = right * multiplier;

    // Adding a number to A changes the ratio.
    const newA = originalA + added;

    const divisor = gcd(newA, originalB);
    const newLeft = newA / divisor;
    const newRight = originalB / divisor;

    const correctAnswer = originalA;

    const wrongAnswers = [
      originalB,
      originalA + added,
      originalA - added,
      left * (multiplier + 1),
      right * multiplier + added,
    ].filter((answer) => answer > 0 && answer !== correctAnswer);

    const options = createOptions(correctAnswer, wrongAnswers);

    return {
      question: `A and B are in the ratio ${left}:${right}. If ${added} is added to A, the new ratio becomes ${newLeft}:${newRight}. Find the original value of A.`,
      correctAnswer,
      options,
      category: "ratio",
    };
  };

  const masterTemplates = [
    simplifyRatio,
    missingQuantity,
    divideTotal,
    ratioFromQuantities,
    changingRatio,
  ];

  const randomIndex = randomInteger(0, masterTemplates.length - 1);

  return masterTemplates[randomIndex]();
};
