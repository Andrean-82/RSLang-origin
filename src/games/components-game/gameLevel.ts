import { createElement } from '../../components/createElement';
import { clickButtonAudio } from '../audio/clickEventListenerAudio';
import { clickButtonSprint } from '../sprint/clickEventListenerSprint';

export function gameLevel() {
    const whatLevel = 6;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imgLevelOne = require('../sprint/pandaLevel.json');
    const app = <HTMLElement>document.getElementById('app');
    const container = <HTMLElement>document.querySelector('.content-container');
    const clickPlay = sessionStorage.getItem('clickPlay');
    app.innerHTML = '';
    app.classList.toggle('close_btn');
    if (clickPlay === '1') {
        const forGameSprint = <HTMLElement>document.getElementById('app');
        forGameSprint.classList.toggle('sprint_challenge');
        clickButtonSprint();
    }
    if (clickPlay === '2') {
        const forGameAudio = <HTMLElement>document.getElementById('app');
        forGameAudio.classList.toggle('audio_challenge');
        clickButtonAudio();
    }
    const contBackground = createElement('div', container, ['container_background_image'], {
        ['id']: 'container_background_image',
    });
    contBackground.append(app);
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
