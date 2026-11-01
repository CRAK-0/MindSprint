import { randomInteger } from "./random";

export const createOptions = <T extends number | string>(
  correctAnswer: T,
  candidates: T[],
): T[] => {
  const uniqueCandidates = new Set<T>();

  for (const candidate of candidates) {
    if (candidate !== correctAnswer) {
      uniqueCandidates.add(candidate);
    }
  }

  const wrongArray = [...uniqueCandidates];

  // Shuffle wrong answers
  for (let i = wrongArray.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);
    [wrongArray[i], wrongArray[j]] = [wrongArray[j], wrongArray[i]];
  }

  const wrongOptions = wrongArray.slice(0, 5);

  // Numeric fallback
  if (typeof correctAnswer === "number") {
    let offset = 1;

    while (wrongOptions.length < 5) {
      const fallback: number =
        correctAnswer +
        (offset % 2 === 0 ? offset / 2 : -Math.ceil(offset / 2));

      if (!wrongOptions.includes(fallback as T) && fallback !== correctAnswer) {
        wrongOptions.push(fallback as T);
      }

      offset++;
    }
  }

  // String answers must have enough candidates supplied
  if (wrongOptions.length < 5) {
    throw new Error("Not enough unique candidates to generate quiz options.");
  }

  const options: T[] = [...wrongOptions, correctAnswer];

  // Shuffle all options
  for (let i = options.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
};

export const createBalancedOptions = (
  correctAnswer: number,
  candidate1: number[],
  candidate2: number[],
): number[] => {
  const uniqueCandidates1 = new Set<number>();
  const uniqueCandidates2 = new Set<number>();

  for (const candidate of candidate1) {
    if (candidate !== correctAnswer) {
      uniqueCandidates1.add(candidate);
    }
  }

  for (const candidate of candidate2) {
    if (candidate !== correctAnswer) {
      uniqueCandidates2.add(candidate);
    }
  }

  const wrongArray1 = [...uniqueCandidates1];
  const wrongArray2 = [...uniqueCandidates2];

  // Shuffle both candidate arrays
  for (let i = wrongArray1.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);
    [wrongArray1[i], wrongArray1[j]] = [wrongArray1[j], wrongArray1[i]];
  }

  for (let i = wrongArray2.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);
    [wrongArray2[i], wrongArray2[j]] = [wrongArray2[j], wrongArray2[i]];
  }

  const selectedOptions = new Set<number>(wrongArray1.slice(0, 3));

  for (const candidate of wrongArray2) {
    if (!selectedOptions.has(candidate)) {
      selectedOptions.add(candidate);
    }

    if (selectedOptions.size === 5) break;
  }

  const wrongOptions = [...selectedOptions];

  let offset = 1;

  while (wrongOptions.length < 5) {
    const fallback =
      correctAnswer + (offset % 2 === 0 ? offset / 2 : -Math.ceil(offset / 2));

    if (
      fallback !== correctAnswer &&
      !wrongOptions.includes(fallback) &&
      fallback > 0
    ) {
      wrongOptions.push(fallback);
    }

    offset++;
  }

  const options = [...wrongOptions, correctAnswer];

  // Shuffle all options
  for (let i = options.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
};
