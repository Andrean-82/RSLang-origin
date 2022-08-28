import { createElement } from '../../components/createElement';

export function sprintGameLevel() {
    const whatLevel = 6;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imgLevelOne = require('../games/pandaLevel.json');
    const body = <HTMLBodyElement>document.querySelector('.body');
    const spanWrapper = createElement('span', body, ['close_btn'], {
        ['id']: 'close_btn',
    });
    for (let i = 0; i < whatLevel; i++) {
        const level = createElement('div', spanWrapper, ['sprint_level'], { ['id']: 'sprint_level' });
        createElement('div', level, [`level_${i}_number`], { ['id']: `level_${i}_number` }).textContent = `${i + 1}`;
        const divImg = createElement('div', level, [`level_${i}_imeg`], { ['id']: `level_${i}_imeg` });
        createElement('img', divImg, [`img_panda_${i}`], {
            ['id']: `img_panda_${i}`,
            ['src']: `${imgLevelOne[i]}`,
            ['alt']: 'panda',
        });
    }
}
