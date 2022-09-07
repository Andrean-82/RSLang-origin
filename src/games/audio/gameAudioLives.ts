import { NumberAttempt } from '../components-game/interface';
import { imagAnswer } from './gameCreateImg';
import { gameRezultAudio } from './gameRezultAudio';

// export let countLifeScore = 5;
NumberAttempt.countLifeScore;

export const countLife = (trable: string) => {
    console.log(`After : ${NumberAttempt.countLifeScore}`);
    NumberAttempt.countLifeScore -= 1;
    console.log(`Before : ${NumberAttempt.countLifeScore}`);
    if (NumberAttempt.countLifeScore > 0) {
        if (trable === 'false') {
            imagAnswer('false');
        }
    }
    if (NumberAttempt.countLifeScore === 0) {
        gameRezultAudio();
    }
};
