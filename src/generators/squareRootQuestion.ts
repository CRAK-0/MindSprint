import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";

export const squareRootQuestion = (min:number,max:number):Question => {
    const num = randomInteger(min,max);
    const question = `√${num * num}`;
    const correctAnswer = num;
    const category = "squareRoots";
    return {
        question,correctAnswer,category
    };
}