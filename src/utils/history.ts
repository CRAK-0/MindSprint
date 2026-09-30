import type { QuizHistory, QuizResult } from "../types/quiz";

export const saveQuizHistory = (result:QuizResult) => {
    const stored = getQuizHistory();
        
        const newRecord: QuizHistory = {
            ...result,
            id: Date.now(),
            timestamp: Date.now(),
        };
        
        let history: QuizHistory[];
        
        if (stored === null) {
            history = [newRecord];
        } else {
            history = JSON.parse(stored) as QuizHistory[];
        }
        
        const updatedHistory = [...history, newRecord];
        
        localStorage.setItem("quiz", JSON.stringify(updatedHistory));
}
export const getQuizHistory = ():string|null => {
    return localStorage.getItem("quiz");
    
}
export const clearQuizHistory = () => {
    localStorage.removeItem("quiz");
}