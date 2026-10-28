import { randomInteger } from "./random";

export const createOptions = (
  correctAnswer: number | string,
  candidates: number[] | string[],
): number[] => {
  const uniqueCandidates = new Set<number>();

  for (const candidate of candidates) {
    if (candidate !== correctAnswer) {
      uniqueCandidates.add(candidate);
    }
  }

  const wrongArray = [...uniqueCandidates];

  // Shuffle the available wrong answers
  for (let i = wrongArray.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);

    [wrongArray[i], wrongArray[j]] = [wrongArray[j], wrongArray[i]];
  }

  const wrongOptions = wrongArray.slice(0, 5);

  // Fill missing wrong answers if there aren't enough candidates
  let offset = 1;

  while (wrongOptions.length < 5) {
    const fallback =
      correctAnswer + (offset % 2 === 0 ? offset / 2 : -Math.ceil(offset / 2));

    if (fallback !== correctAnswer && !wrongOptions.includes(fallback)) {
      wrongOptions.push(fallback);
    }

    offset++;
  }

  const options = [...wrongOptions, correctAnswer];

  // Shuffle all 6 options
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

  // Shuffle the available wrong answers
  for (let i = wrongArray1.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);

    [wrongArray1[i], wrongArray1[j]] = [wrongArray1[j], wrongArray1[i]];
  }
  for (let i = wrongArray2.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);

    [wrongArray2[i], wrongArray2[j]] = [wrongArray2[j], wrongArray2[i]];
  }

  //all wrong option still can contain duplicate options and need to use suffle and also select from that
  const selectedOptions = new Set<number>(wrongArray1.slice(0, 3));

  for (const candidate of wrongArray2) {
    // If already selected, skip it.
    // Otherwise, add it.
    if (!selectedOptions.has(candidate)) selectedOptions.add(candidate);
    // Stop when you have 5 wrong answers.
    if (selectedOptions.size === 5) break;
  }

  //will contain all the non duplicate options
  const wrongOptions = [...selectedOptions];

  // Fill missing wrong answers if there aren't enough candidates
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

  // Shuffle all 6 options
  for (let i = options.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);

    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
};
