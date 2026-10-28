import type { Question } from "../types/quiz";
import { createOptions } from "../utils/options";
import { randomInteger } from "../utils/random";

type OperationType =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "square"
  | "cube"
  | "percentage"
  | "fraction";

type Operation = {
  type: OperationType;
  expression: string;
  result: number;
  num1?: number;
  num2?: number;
};

const addition = (): Operation => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);

  return {
    type: "addition",
    expression: `${num1} + ${num2}`,
    result: num1 + num2,
    num1,
    num2,
  };
};

const subtraction = (): Operation => {
  let num1 = randomInteger(1, 100);
  let num2 = randomInteger(1, 100);

  if (num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  return {
    type: "subtraction",
    expression: `${num1} - ${num2}`,
    result: num1 - num2,
    num1,
    num2,
  };
};

const multiplication = (): Operation => {
  const num1 = randomInteger(1, 20);
  const num2 = randomInteger(1, 20);

  return {
    type: "multiplication",
    expression: `${num1} × ${num2}`,
    result: num1 * num2,
    num1,
    num2,
  };
};

const division = (): Operation => {
  const num2 = randomInteger(2, 12);
  const result = randomInteger(2, 20);
  const num1 = num2 * result;

  return {
    type: "division",
    expression: `${num1} ÷ ${num2}`,
    result,
    num1,
    num2,
  };
};

const square = (): Operation => {
  const num1 = randomInteger(2, 20);

  return {
    type: "square",
    expression: `${num1}²`,
    result: num1 * num1,
    num1,
  };
};

const cube = (): Operation => {
  const num1 = randomInteger(2, 10);

  return {
    type: "cube",
    expression: `${num1}³`,
    result: num1 * num1 * num1,
    num1,
  };
};

const percentage = (): Operation => {
  const num1 = randomInteger(1, 10) * 10;
  const num2 = randomInteger(1, 20) * 10;

  return {
    type: "percentage",
    expression: `${num1}% of ${num2}`,
    result: (num1 / 100) * num2,
    num1,
    num2,
  };
};

const fraction = (): Operation => {
  const denominator = randomInteger(2, 10);
  const numerator = randomInteger(1, denominator - 1);
  const base = denominator * randomInteger(2, 20);

  return {
    type: "fraction",
    expression: `${numerator}/${denominator} of ${base}`,
    result: (numerator / denominator) * base,
    num1: numerator,
    num2: denominator,
  };
};

export const simplificationQuestion = (
  difficulty: "beginner" | "intermediate" | "master",
): Question => {
  const operationCount = {
    beginner: 2,
    intermediate: 3,
    master: 4,
  }[difficulty];

  const generators = [
    addition,
    subtraction,
    multiplication,
    division,
    square,
    cube,
    percentage,
    fraction,
  ];

  const operations = Array.from({ length: operationCount }, () => {
    const generator = generators[randomInteger(0, generators.length - 1)];

    return generator();
  });

  let correctAnswer = operations[0].result;
  let question = operations[0].expression;

  for (let i = 1; i < operations.length; i++) {
    const operation = operations[i];
    const operator = Math.random() < 0.5 ? "+" : "-";

    // Preserve grouping when subtracting an addition/subtraction expression.
    const needsParentheses =
      operator === "-" &&
      (operation.type === "addition" || operation.type === "subtraction");

    const expression = needsParentheses
      ? `(${operation.expression})`
      : operation.expression;

    question += ` ${operator} ${expression}`;

    correctAnswer =
      operator === "+"
        ? correctAnswer + operation.result
        : correctAnswer - operation.result;
  }

  correctAnswer = Number(correctAnswer.toFixed(2));

  const candidates = [
    correctAnswer + randomInteger(1, 10),
    correctAnswer - randomInteger(1, 10),
    correctAnswer + randomInteger(11, 20),
    correctAnswer - randomInteger(11, 20),
    correctAnswer * 2,
  ];

  return {
    question: `Simplify: ${question}`,
    correctAnswer,
    options: createOptions(correctAnswer, candidates),
    category: "simplification",
    difficulty,
  };
};
