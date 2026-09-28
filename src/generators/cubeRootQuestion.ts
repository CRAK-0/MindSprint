import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";

export const cubeRootQuestion = (min:number,max:number):Question => {
    const num = randomInteger(min,max);
    const question = `∛${num * num * num}`;
    const correctAnswer = num;
    const category = "cubeRoots";
    return {
        question,correctAnswer,category
    };
}