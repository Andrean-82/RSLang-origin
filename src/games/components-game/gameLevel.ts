import { createElement } from '../../components/createElement';
import { clickButtonAudio } from '../audio/clickEventListenerAudio';
import { clickButtonSprint } from '../sprint/clickEventListenerSprint';
import { NumberAttempt, Stor } from './interface';

export function gameLevel() {
    Stor.divQuestionWord = [];
    Stor.ansver = [];
    Stor.arrayMod = [];
    Stor.arrayColor = [];
    NumberAttempt.count = 0;
    NumberAttempt.countLifeScore = 5;
    NumberAttempt.countAnswerScore = 0;
    NumberAttempt.countTrueAnswer = 0;
    NumberAttempt.countFalseAnswer = 0;
    const whatLevel = 6;
    console.log(NumberAttempt.clickPlay);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imgLevelOne = require('../sprint/pandaLevel.json');
    const app = <HTMLElement>document.getElementById('app');
    const container = <HTMLElement>document.querySelector('.content-container');
    const clickPlay = sessionStorage.getItem('clickPlay');
    app.innerHTML = '';
    app.className = '';
    app.classList.toggle('close_btn');
    if (NumberAttempt.clickPlay === 1) {
        console.log('TROLOLO_1');
        const forGameSprint = <HTMLElement>document.getElementById('app');
        forGameSprint.classList.toggle('sprint_challenge');
        const sprintGameLest = <HTMLElement>document.querySelector('.sprint_challenge');
        sprintGameLest.addEventListener('click', clickButtonSprint);
        // clickButtonSprint();
    }
    if (NumberAttempt.clickPlay === 2) {
        console.log('lylyly_1');
        const forGameAudio = <HTMLElement>document.getElementById('app');
        forGameAudio.classList.toggle('audio_challenge');
        const audioGameLest = <HTMLElement>document.querySelector('.audio_challenge');
        audioGameLest.addEventListener('click', clickButtonAudio);
    }
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    for (let i = 0; i < whatLevel; i++) {
        const level = createElement('div', app, ['sprint_level'], { ['id']: 'sprint_level' });
        createElement('div', level, [`level_${i}_number`], { ['id']: `level_${i}_number` }).textContent = `${i + 1}`;
        const divImg = createElement('div', level, [`level_${i}_imeg`], { ['id']: `level_${i}_imeg` });
        createElement('img', divImg, [`img_panda_${i}`], {
            ['id']: `img_panda_${i}`,
            ['src']: `${imgLevelOne[i]}`,
            ['alt']: 'panda',
        });
    }
}
