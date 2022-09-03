import { countLife } from './gameAudioLives';
import { countAnswer, countAnswerFalse } from './gameAudioScore';
import { imagAnswer } from './gameCreateImg';
import { complecteElementAudioWord } from './one';

export function wrapper(trable: string) {
    if (trable === 'false') {
        imagAnswer('false');
        countLife();
        countAnswerFalse();
        complecteElementAudioWord();
    }
    if (trable === 'true') {
        imagAnswer('true');
        countAnswer();
        complecteElementAudioWord();
    }
}
