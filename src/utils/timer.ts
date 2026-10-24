export const startTimer = () => {
    return Date.now();
};
export const getElapsedTime = (startTime: number) => {
    return Date.now() - startTime;
};