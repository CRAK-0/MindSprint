import { tableQuestion } from "../generators/TableGenerator";
import { squareQuestion } from "../generators/squareQuestion";
import { cubeQuestion } from "../generators/cubeQuestion";
import { squareRootQuestion } from "../generators/squareRootQuestion";
import { cubeRootQuestion } from "../generators/cubeRootQuestion";
import { additionQuestion } from "../generators/additionQuestion";
import { subtractionQuestion } from "../generators/subtractionQuestion";
import { multiplicationQuestion } from "../generators/multiplicationQuestion";
import { percentageQuestion } from "../generators/percentageQuestion";
import { fractionQuestion } from "../generators/fractionQuestion";
import { ratioQuestion } from "../generators/ratioQuestion";
import { simplificationQuestion } from "../generators/simplificationQuestion";

import type { Question, QuizCategory, QuizConfig } from "../types/quiz";
import { throwError } from "../utils/errors";

const rangeGenerators = {
  tables: tableQuestion,
  squares: squareQuestion,
  cubes: cubeQuestion,
  squareRoots: squareRootQuestion,
  cubeRoots: cubeRootQuestion,
  multiplication: multiplicationQuestion,
};

const digitGenerators = {
  addition: additionQuestion,
  subtraction: subtractionQuestion,
};

const difficultyGenerators = {
  percentage: percentageQuestion,
  fraction: fractionQuestion,
  simplification: simplificationQuestion,
};

const basicGenerators = {
  ratio: ratioQuestion,
};

export const quizEngine = (quizConfig: QuizConfig): Question => {
  const categories = Object.keys(quizConfig) as QuizCategory[];

  const selectedCategories = categories.filter(
    (category) => quizConfig[category].selected,
  );

  if (selectedCategories.length === 0) {
    return throwError("Zero Category is selected.");
  }

  const category =
    selectedCategories[Math.floor(Math.random() * selectedCategories.length)];

  const categoryConfig = quizConfig[category];

  if ("difficulty" in categoryConfig) {
    return difficultyGenerators[category as keyof typeof difficultyGenerators](
      categoryConfig.difficulty,
    );
  }

  if ("digits" in categoryConfig) {
    return digitGenerators[category as keyof typeof digitGenerators](
      categoryConfig.digits,
    );
  }

  if ("min" in categoryConfig && "max" in categoryConfig) {
    return rangeGenerators[category as keyof typeof rangeGenerators](
      categoryConfig.min,
      categoryConfig.max,
    );
  }

  return basicGenerators[category as keyof typeof basicGenerators]();
};
