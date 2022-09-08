import { NumberAttempt } from '../components-game/interface';

NumberAttempt.countAnswerScore = 0;
NumberAttempt.countTrueAnswer = 0;
NumberAttempt.countFalseAnswer = 0;

export const countAnswer = () => {
    NumberAttempt.countAnswerScore += 10;
    NumberAttempt.countTrueAnswer += 1;
};

export const countAnswerFalse = () => {
    NumberAttempt.countFalseAnswer += 1;
    return NumberAttempt.countFalseAnswer;
};
