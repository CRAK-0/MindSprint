import { randomInteger } from "./random";

export const createOptions = (
    correctAnswer: number,
    candidates: number[]
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

        [wrongArray[i], wrongArray[j]] = [
            wrongArray[j],
            wrongArray[i],
        ];
    }

    const wrongOptions = wrongArray.slice(0, 5);

    // Fill missing wrong answers if there aren't enough candidates
    let offset = 1;

    while (wrongOptions.length < 5) {
        const fallback =
            correctAnswer + (offset % 2 === 0 ? offset / 2 : -Math.ceil(offset / 2));

        if (
            fallback !== correctAnswer &&
            !wrongOptions.includes(fallback)
        ) {
            wrongOptions.push(fallback);
        }

        offset++;
    }

    const options = [...wrongOptions, correctAnswer];

    // Shuffle all 6 options
    for (let i = options.length - 1; i > 0; i--) {
        const j = randomInteger(0, i);

        [options[i], options[j]] = [
            options[j],
            options[i],
        ];
    }

    return options;
};