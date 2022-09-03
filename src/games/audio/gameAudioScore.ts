export let countAnswerScore = 0;
export let countTrueAnswer = 0;
export let countFalseAnswer = 0;

export const countAnswer = () => {
    countAnswerScore += 10;
    countTrueAnswer += 1;
};

export const countAnswerFalse = () => {
    countFalseAnswer += 1;
};
