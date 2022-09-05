import { imagAnswer } from './gameCreateImg';
import { gameRezultAudio } from './gameRezultAudio';

export let countLifeScore = 5;

export const countLife = (trable: string) => {
    countLifeScore -= 1;
    if (countLifeScore > 0) {
        if (trable === 'false') {
            imagAnswer('false');
        }
    }
    if (countLifeScore === 0) {
        gameRezultAudio();
    }
};
