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
import { gameRezultAudio } from './gameRezultAudio';

export function gameAudioEventERR() {
    const app = audioChallenge();
    app.innerHTML = '';
    const wrapperRezult = createElement('div', app, ['wrapper_rezult']);
    const menuBlok = createElement('div', wrapperRezult, ['menu_rezult']);
    menyDiv(2, 'div', menuBlok, ['menu_rezult_']);
    const pic = audioChallengeRezultScorePic();
    const img = createElement('img', pic, ['img_panda_logo'], {
        ['id']: 'img_panda_logo',
        ['src']: '../assets/png/pngwing.jpg',
        ['alt']: 'Logo',
    });
    setTimeout(gameRezultAudio, 2000);
}
