import { createElement } from '../../components/createElement';
import { gameSprintAddAnsver } from './gameSprintCreateDivAnsver';
import { gameSprintAddColor } from './gameSprintCreateDivColor';
import { gameSprintAddYN } from './gameSprintCreateDivYN';

export function sprintGameResult() {
    let count = sessionStorage.getItem('count');
    if (count === null) {
        count = '0';
    }
    const closeBtn = <HTMLElement>document.querySelector('.close_btn');
    closeBtn.innerHTML = '';
    closeBtn.classList.toggle('wrapper_game_sptint_result');
    const blokForH3 = createElement('div', closeBtn, ['blok_for_H3'], { ['id']: 'blok_for_H3' });
    const blokForResult = createElement('div', closeBtn, ['blok_for_result'], { ['id']: 'blok_for_result' });
    const h3 = createElement('h3', blokForH3, ['form_result_h3'], { ['id']: 'form_result_h3' });
    h3.textContent = `YOUR SCORE: ${count}`;
    createElement('div', blokForResult, ['form_result_1'], { ['id']: 'form_result_1' });
    createElement('div', blokForResult, ['form_result_2'], { ['id']: 'form_result_2' });
    gameSprintAddAnsver();
    gameSprintAddYN();
    gameSprintAddColor();
    const formResult3 = createElement('div', blokForResult, ['form_result_3'], { ['id']: 'form_result_3' });
    const houmePage = createElement('div', formResult3, ['houme_btn'], { ['id']: 'houme_btn' });
    createElement('img', houmePage, ['img_houme_page'], {
        ['src']: './assets/png/home.png',
        ['alt']: 'Houme',
    });
    const repetPage = createElement('div', formResult3, ['repeat_btn'], { ['id']: 'repeat_btn' });
    createElement('img', repetPage, ['img_houme_page'], {
        ['src']: './assets/png/repeat.png',
        ['alt']: 'Repeat',
    });
    const rezervePage = createElement('div', formResult3, ['rezerve_btn'], { ['id']: 'rezerve_btn' });
    rezervePage.textContent = 'X';
    sessionStorage.clear();
}
