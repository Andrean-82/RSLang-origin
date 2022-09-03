import { gameRezultAudio } from './gameRezultAudio';

let countLifeScore = 5;

export const countLife = () => {
    countLifeScore -= 1;
    if (countLifeScore === 0) {
        gameRezultAudio();
    }
};
