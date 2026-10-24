import { useEffect, useState } from "react";
import type { QuizHistory } from "../types/quiz";
import { getQuizHistory } from "../utils/history";

export const useQuizHistory = () => {
    const [history, setHistory] = useState<QuizHistory[]>([]);

useEffect(() => {
    const stored = getQuizHistory();

    // handle stored here
    if(stored!==null){
        setHistory(stored)
    }
}, []); 

    return history;
}