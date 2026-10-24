import { throwError } from "./errors";

export const randomInteger = (min: number, max: number) => {

    if(min>max){
        throwError("Minimum cannot be greater than maximum");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
};