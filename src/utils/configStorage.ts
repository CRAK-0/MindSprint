import type { QuizConfig } from "../types/quiz";

type getSetup = {
    config:QuizConfig,
    totalQuestions:number,
}

export const saveQuizSetup = (config:QuizConfig,totalQuestions:number) => {
    const data = JSON.stringify({config:config,totalQuestions:totalQuestions});
    localStorage.setItem("quizSetup",data);
};
export const getQuizSetup = ():getSetup|null => {
    const savedConfig = localStorage.getItem("quizSetup");

    if(savedConfig!== null){
        return JSON.parse(savedConfig);
    }
    return null;
};
