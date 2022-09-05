import { createElement } from '../../components/createElement';
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
import { countAnswerScore, countFalseAnswer, countTrueAnswer } from './gameAudioScore';

export function gameRezultAudio() {
    const app = audioChallenge();
    app.innerHTML = '';
    const wrapperScore = (createElement('div', app, ['wrapper_score']).textContent = `YOURE SCORE: ${countAnswerScore}`);
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
    trueScore.innerHTML = `${countTrueAnswer}`;
    const falseScore = audioChallengeRezultScoreFalse();
    falseScore.innerHTML = `${countFalseAnswer}`;
    const pic = audioChallengeRezultScorePic();
    const img = createElement('img', pic, ['img_panda_logo'], {
        ['id']: 'img_panda_logo',
        ['src']: '/src/assets/png/pngwing.jpg',
        ['alt']: 'Logo',
    });
}
