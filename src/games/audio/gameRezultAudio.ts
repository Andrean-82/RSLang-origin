import { getStatistic, updateStatistic } from '../../api/stat';
import { createElement } from '../../components/createElement';
import { getCurrentUser } from '../../components/loginUtils';
import {
    audioChallenge,
    audioChallengeRezultFalse,
    audioChallengeRezultlearn,
    audioChallengeRezultScore,
    audioChallengeRezultScoreFalse,
    audioChallengeRezultScorePic,
    audioChallengeRezultTrue,
} from '../components-game/constants';
import { menyDiv } from '../components-game/gameMenyDiv';
import { audioStore, NumberAttempt } from '../components-game/interface';

export async function gameRezultAudio() {
    const app = audioChallenge();
    app.innerHTML = '';
    const wrapperScore = (createElement('div', app, ['wrapper_score']).textContent = `YOURE SCORE: ${NumberAttempt.countAnswerScore}`);
    const wrapperRezult = createElement('div', app, ['wrapper_rezult_audio']);
    const oneBlok = createElement('div', wrapperRezult, ['one_rezult']);
    const twoBlok = createElement('div', wrapperRezult, ['two_rezult']);
    const threeBlok = createElement('div', wrapperRezult, ['three_rezult']);
    const menuBlok = createElement('div', wrapperRezult, ['menu_rezult']);
    menyDiv(2, 'div', oneBlok, ['one_rezult_']);
    menyDiv(2, 'div', twoBlok, ['two_rezult_']);
    menyDiv(2, 'div', threeBlok, ['three_rezult_']);
    menyDiv(2, 'div', menuBlok, ['menu_rezult_']);
    const trueAnswer = audioChallengeRezultTrue();
    const falseAnswer = audioChallengeRezultFalse();
    const learnWords = audioChallengeRezultlearn();
    trueAnswer.innerHTML = 'Correct answers';
    falseAnswer.innerHTML = 'Wrong answers';
    learnWords.innerHTML = 'Learn words today';
    const trueScore = audioChallengeRezultScore();
    trueScore.innerHTML = `${NumberAttempt.countTrueAnswer}`;
    const falseScore = audioChallengeRezultScoreFalse();
    falseScore.innerHTML = `${NumberAttempt.countFalseAnswer}`;
    const pic = audioChallengeRezultScorePic();
    const img = createElement('img', pic, ['img_panda_logo'], {
        ['id']: 'img_panda_logo',
        ['src']: '../assets/png/pngwing.jpg',
        ['alt']: 'Logo',
    });
    sessionStorage.clear();
    if (getCurrentUser()) {
        const stat = await getStatistic();
        stat.optional.day.audioChallenge.correctAnswersCount += audioStore.correctAnswers;
        stat.optional.day.audioChallenge.incorrectAnswersCount += audioStore.incorrectAnswers;
        stat.optional.day.audioChallenge.countNewWords += audioStore.newWords;
        if (stat.optional.day.audioChallenge.correctAnswersSeriesLength < audioStore.maxCorrectAnswerStreak) {
            stat.optional.day.audioChallenge.correctAnswersSeriesLength = audioStore.maxCorrectAnswerStreak;
        }
        updateStatistic(stat);
        console.log(audioStore);
    }
}
