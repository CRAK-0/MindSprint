import type { Question } from "../types/quiz";
import { createOptions } from "../utils/options";
import { randomInteger } from "../utils/random";

type PercentageLevel = "beginner" | "intermediate" | "master";

export const fractionQuestion = (level: PercentageLevel) => {
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
  const category = "fraction";
  const fractions = [
    { numerator: 1, denominator: 2 },
    { numerator: 1, denominator: 3 },
    { numerator: 2, denominator: 3 },
    { numerator: 1, denominator: 4 },
    { numerator: 3, denominator: 4 },
    { numerator: 1, denominator: 5 },
    { numerator: 2, denominator: 5 },
    { numerator: 3, denominator: 5 },
    { numerator: 1, denominator: 8 },
    { numerator: 3, denominator: 8 },
  ];

  const randomFractionNo = randomInteger(0, fractions.length - 1);
  const randomFraction = fractions[randomFractionNo];

  const dividend = randomInteger(10, 100) * randomFraction.denominator;

  const correctAnswer =
    (dividend / randomFraction.denominator) * randomFraction.numerator;

  const question = `${randomFraction.numerator}/${randomFraction.denominator} × ${dividend}`;
  //options

  const candidates = new Set<number>();

  for (let offset = -5; offset <= 5; offset++) {
    candidates.add(correctAnswer + offset);
  }

  for (let offset = -20; offset <= 20; offset += 10) {
    candidates.add(correctAnswer + offset);
  }

  const options = createOptions(
    correctAnswer,
    [...candidates].filter(
      (candidate) => candidate > 0 && candidate !== correctAnswer,
    ),
  );

  return {
    question,
    correctAnswer,
    options,
    category,
    difficulty: "beginner",
  };
};

const intermediateLevel = (): Question => {
  const category = "fraction";
  const fractions = [
    { numerator: 1, denominator: 2 },
    { numerator: 1, denominator: 3 },
    { numerator: 2, denominator: 3 },
    { numerator: 1, denominator: 4 },
    { numerator: 3, denominator: 4 },
    { numerator: 1, denominator: 5 },
    { numerator: 2, denominator: 5 },
    { numerator: 3, denominator: 5 },
    { numerator: 4, denominator: 5 },
    { numerator: 1, denominator: 6 },
    { numerator: 5, denominator: 6 },
    { numerator: 1, denominator: 7 },
    { numerator: 1, denominator: 8 },
    { numerator: 3, denominator: 8 },
    { numerator: 5, denominator: 8 },
    { numerator: 7, denominator: 8 },
    { numerator: 1, denominator: 10 },
    { numerator: 2, denominator: 10 },
    { numerator: 3, denominator: 10 },
    { numerator: 4, denominator: 10 },
    { numerator: 6, denominator: 10 },
    { numerator: 7, denominator: 10 },
    { numerator: 9, denominator: 10 },
    { numerator: 1, denominator: 11 },
    { numerator: 1, denominator: 15 },
    { numerator: 1, denominator: 20 },
    { numerator: 1, denominator: 25 },
  ];

  const randomFractionNo = randomInteger(0, fractions.length - 1);
  const randomFraction = fractions[randomFractionNo];

  const result = randomInteger(10, 100) * randomFraction.numerator;

  const correctAnswer =
    (result * randomFraction.denominator) / randomFraction.numerator;

  const question = `${randomFraction.numerator}/${randomFraction.denominator} of a number is ${result}. Find the number.`;
  //options

  const candidates = new Set<number>();

  for (let offset = -5; offset <= 5; offset++) {
    candidates.add(correctAnswer + offset);
  }

  for (let offset = -20; offset <= 20; offset += 10) {
    candidates.add(correctAnswer + offset);
  }

  const options = createOptions(
    correctAnswer,
    [...candidates].filter(
      (candidate) => candidate > 0 && candidate !== correctAnswer,
    ),
  );

  return {
    question,
    correctAnswer,
    options,
    category,
    difficulty: "intermediate",
  };
};
const masterLevel = () => {
  const category = "fraction";
  const fractions = [
    { numerator: 1, denominator: 2 },
    { numerator: 1, denominator: 3 },
    { numerator: 2, denominator: 3 },
    { numerator: 1, denominator: 4 },
    { numerator: 3, denominator: 4 },
    { numerator: 1, denominator: 5 },
    { numerator: 2, denominator: 5 },
    { numerator: 3, denominator: 5 },
    { numerator: 4, denominator: 5 },
    { numerator: 1, denominator: 6 },
    { numerator: 5, denominator: 6 },
    { numerator: 1, denominator: 7 },
    { numerator: 1, denominator: 8 },
    { numerator: 3, denominator: 8 },
    { numerator: 5, denominator: 8 },
    { numerator: 7, denominator: 8 },
    { numerator: 1, denominator: 10 },
    { numerator: 2, denominator: 10 },
    { numerator: 3, denominator: 10 },
    { numerator: 4, denominator: 10 },
    { numerator: 6, denominator: 10 },
    { numerator: 7, denominator: 10 },
    { numerator: 9, denominator: 10 },
    { numerator: 1, denominator: 11 },
    { numerator: 1, denominator: 15 },
    { numerator: 1, denominator: 20 },
    { numerator: 1, denominator: 25 },
  ];

  const fractionDifference = (): Question => {
    let first = fractions[randomInteger(0, fractions.length - 1)];
    let second = fractions[randomInteger(0, fractions.length - 1)];

    while (
      first.numerator / first.denominator <=
      second.numerator / second.denominator
    ) {
      first = fractions[randomInteger(0, fractions.length - 1)];
      second = fractions[randomInteger(0, fractions.length - 1)];
    }

    //correct answer
    const differenceNumerator =
      first.numerator * second.denominator -
      first.denominator * second.numerator;

    const differenceDenominator = first.denominator * second.denominator;

    const multiplier = randomInteger(10, 100);
    const knownDifference = differenceNumerator * multiplier;
    const correctAnswer = multiplier * differenceDenominator;

    //question
    const question = `${first.numerator}/${first.denominator} of a number is ${knownDifference} more than ${second.numerator}/${second.denominator} of the same number. Find the number.`;

    //options
    const candidates = new Set<number>();

    for (let offset = -5; offset <= 5; offset++) {
      candidates.add(correctAnswer + offset * 10);
    }

    for (let offset = -3; offset <= 3; offset++) {
      candidates.add(correctAnswer + offset * 100);
    }

    const options = createOptions(
      correctAnswer,
      [...candidates].filter(
        (candidate) => candidate > 0 && candidate !== correctAnswer,
      ),
    );

    return {
      category,
      question,
      correctAnswer,
      difficulty: "master",
      options,
    };
  };

  const fractionChange = (): Question => {
    const fraction = fractions[randomInteger(0, fractions.length - 1)];

    // Correct answer
    const multiplier = randomInteger(10, 100);
    const correctAnswer = multiplier * fraction.denominator;
    const fractionAmount = multiplier * fraction.numerator;

    const knownAmount = randomInteger(10, 100) * 10;
    const finalAmount = fractionAmount + knownAmount;

    // Question
    const question = `If ${fraction.numerator}/${fraction.denominator} of a number is increased by ${knownAmount}, the result is ${finalAmount}. Find the number.`;

    // Options
    const candidates = new Set<number>();

    for (let offset = -5; offset <= 5; offset++) {
      candidates.add(correctAnswer + offset * 10);
    }

    for (let offset = -3; offset <= 3; offset++) {
      candidates.add(correctAnswer + offset * 100);
    }

    const options = createOptions(
      correctAnswer,
      [...candidates].filter(
        (candidate) => candidate > 0 && candidate !== correctAnswer,
      ),
    );

    return {
      category,
      question,
      correctAnswer,
      difficulty: "master",
      options,
    };
  };

  const remainingQuantity = (): Question => {
    const fraction = fractions[randomInteger(0, fractions.length - 1)];

    // Correct answer
    const multiplier = randomInteger(10, 100);
    const correctAnswer = multiplier * fraction.denominator;

    const fractionAmount = multiplier * fraction.numerator;
    const remainingAmount = correctAnswer - fractionAmount;

    // Question
    const question = `A person spends ${fraction.numerator}/${fraction.denominator} of their money and has ₹${remainingAmount} remaining. How much money did they originally have?`;

    // Options
    const candidates = new Set<number>();

    for (let offset = -5; offset <= 5; offset++) {
      candidates.add(correctAnswer + offset * 10);
    }

    for (let offset = -3; offset <= 3; offset++) {
      candidates.add(correctAnswer + offset * 100);
    }

    const options = createOptions(
      correctAnswer,
      [...candidates].filter(
        (candidate) => candidate > 0 && candidate !== correctAnswer,
      ),
    );

    return {
      category,
      question,
      correctAnswer,
      difficulty: "master",
      options,
    };
  };

  const successiveFractions = (): Question => {
    const first = fractions[randomInteger(0, fractions.length - 1)];
    const second = fractions[randomInteger(0, fractions.length - 1)];

    // Correct answer
    const multiplier = randomInteger(10, 100);

    const correctAnswer = multiplier * first.denominator * second.denominator;

    const finalAmount = multiplier * first.numerator * second.numerator;

    // Question
    const question = `First, ${first.numerator}/${first.denominator} of a number is calculated. Then, ${second.numerator}/${second.denominator} of that result is taken. If the final result is ${finalAmount}, find the original number.`;

    // Options
    const candidates = new Set<number>();

    for (let offset = -5; offset <= 5; offset++) {
      candidates.add(correctAnswer + offset * 10);
    }

    for (let offset = -3; offset <= 3; offset++) {
      candidates.add(correctAnswer + offset * 100);
    }

    const options = createOptions(
      correctAnswer,
      [...candidates].filter(
        (candidate) => candidate > 0 && candidate !== correctAnswer,
      ),
    );

    return {
      category,
      question,
      correctAnswer,
      difficulty: "master",
      options,
    };
  };

  const fractionComparison = (): Question => {
    const first = fractions[randomInteger(0, fractions.length - 1)];
    const second = fractions[randomInteger(0, fractions.length - 1)];

    // Correct answer
    const multiplier = randomInteger(10, 100);

    const knownNumber = multiplier * first.denominator * second.numerator;

    const correctAnswer = multiplier * first.numerator * second.denominator;

    // Question
    const question = `${first.numerator}/${first.denominator} of number A equals ${second.numerator}/${second.denominator} of number B. If number A is ${knownNumber}, find number B.`;

    // Options
    const candidates = new Set<number>();

    for (let offset = -5; offset <= 5; offset++) {
      candidates.add(correctAnswer + offset * 10);
    }

    for (let offset = -3; offset <= 3; offset++) {
      candidates.add(correctAnswer + offset * 100);
    }

    const options = createOptions(
      correctAnswer,
      [...candidates].filter(
        (candidate) => candidate > 0 && candidate !== correctAnswer,
      ),
    );

    return {
      category,
      question,
      correctAnswer,
      difficulty: "master",
      options,
    };
  };

  const masterTemplates = [
    fractionDifference,
    fractionChange,
    remainingQuantity,
    successiveFractions,
    fractionComparison,
  ];

  const randomIndex = randomInteger(0, masterTemplates.length - 1);

  return masterTemplates[randomIndex]();
};
