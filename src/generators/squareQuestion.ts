import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";

export const squareQuestion = (min:number,max:number):Question => {
    const num = randomInteger(min,max);
    const question = `${num}²`;
    const correctAnswer = num * num;
    const category = "squares";
    return {
        question,correctAnswer,category
    };
}