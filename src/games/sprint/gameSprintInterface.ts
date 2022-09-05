import { createElement } from '../../components/createElement';
import { wrapperTime } from './timeDown';
import { clickButtonNoYes } from './clickEventListnerNoYes';
import { getWordsinGemeSprint } from './gemeSprintGetWords';

export async function sprintGame(arrayObject: []) {
    const closeBtn = <HTMLElement>document.querySelector('.close_btn');
    closeBtn.classList.toggle('close_btn_sprint_interfece');
    const header = createElement('div', closeBtn, ['header_game_sprint'], { ['id']: 'header_game_sprint' });
    const headerDiv_1 = createElement('div', header, ['header_div_1'], { ['id']: 'header_div_1' });
    const pForTime = createElement('p', headerDiv_1, ['hour_meter'], { ['id']: 'hour_meter' });
    const headerDiv_2 = createElement('div', header, ['header_div_2'], { ['id']: 'header_div_1' });
    createElement('div', headerDiv_2, ['score_sprint_text'], { ['id']: 'score_sprint_text' }).textContent = 'SCORE:';
    createElement('div', headerDiv_2, ['score_sprint'], { ['id']: 'score_sprint' }).textContent = '0'; //const scoreSprint =
    createElement('div', closeBtn, ['exit_sprint'], {
        ['id']: 'exit_sprint',
        ['onclick']: `this.parentElement.style.display='none'`,
    });
    const main = createElement('div', closeBtn, ['main'], { ['id']: 'main_game_sprint' });
    const mainDiv_1 = createElement('div', main, ['main_div_1'], { ['id']: 'main_div_1' });
    createElement('img', mainDiv_1, ['img_panda_sprint'], {
        ['id']: 'img_panda_sprint',
        ['src']: '../assets/png/panda_look.jpg',
        ['alt']: 'Panda_look',
    });
    const mainDiv_2 = createElement('div', main, ['main_div_2'], { ['id']: 'main_div_2' });
    createElement('div', mainDiv_2, ['main_div_word_question'], { ['id']: 'main_div_word_question' });
    createElement('div', mainDiv_2, ['main_div_word_option'], { ['id']: 'main_div_word_option' });
    const footer = createElement('div', closeBtn, ['footer'], { ['id']: 'footer_game_sprint' });
    const footerDiv_1 = createElement('div', footer, ['footer_div_1'], { ['id']: 'footer_div_1' });
    const footerDiv_2 = createElement('div', footer, ['footer_div_2'], { ['id']: 'footer_div_2' });
    createElement('button', footerDiv_1, ['button_false'], {
        ['id']: 'button_false',
    }).textContent = 'NO';
    createElement('button', footerDiv_2, ['button_true'], {
        ['id']: 'button_true',
    }).textContent = 'YES';
    clickButtonNoYes();
    const times = wrapperTime(pForTime);
    const interval = setInterval(times, 1000);
    sessionStorage.setItem('interval', `${interval}`);
    getWordsinGemeSprint(arrayObject);
}
