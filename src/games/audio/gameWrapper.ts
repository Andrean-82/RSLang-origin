import { audioStore, sprintStore } from '../components-game/interface';
import { countLife } from './gameAudioLives';
import { countAnswer, countAnswerFalse } from './gameAudioScore';
import { imagAnswer } from './gameCreateImg';
import { complecteElementAudioWord } from './one';

export function wrapper(trable: string) {
    audioStore.newWords++;
    if (trable === 'false') {
        countLife('false');
        countAnswerFalse();
        complecteElementAudioWord();
        audioStore.incorrectAnswers++;
        audioStore.correctAnswersStreak = 0;
    }
    if (trable === 'true') {
        imagAnswer('true');
        countAnswer();
        complecteElementAudioWord();
        audioStore.correctAnswers++;
        audioStore.correctAnswersStreak++;
        if (audioStore.correctAnswersStreak > audioStore.maxCorrectAnswerStreak) {
            audioStore.maxCorrectAnswerStreak = audioStore.correctAnswersStreak;
        }
    }
}
