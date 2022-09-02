import { createElement } from '../../components/createElement';
import { menyDiv } from '../components-game/gameMenyDiv';
// import { keyButton } from './clickEventCode';
// import { clickButtonAnswer } from './clickEventListenerButtonAnswer';
import { nameBtn } from './gameAudioComplecteNameBtn';
import { complecteElementAudioWord } from './one';

const arrayButton = [1, 2, 3, 4, 5];
export async function audioGame() {
    //arrayObject: []
    const closeBtn = <HTMLElement>document.querySelector('.close_btn');
    closeBtn.classList.toggle('close_btn_sprint_interfece');
    createElement('div', closeBtn, ['exit_sprint'], {
        ['id']: 'exit_sprint',
        ['onclick']: `this.parentElement.style.display='none'`,
    });
    const blokOne = createElement('div', closeBtn, ['blok_one'], { ['id']: 'blok_one' });
    const blokTwo = createElement('div', closeBtn, ['blok_two'], { ['id']: 'blok_two' });
    const blokThree = createElement('div', closeBtn, ['blok_three'], { ['id']: 'blok_three' });
    const blokOneinOne = createElement('div', blokOne, ['blok_one_in_one'], { ['id']: 'blok_one_in_one' });
    const blokTwoinOne = createElement('div', blokOne, ['blok_two_in_one'], { ['id']: 'blok_two_in_one' });
    const blokThreeinOne = createElement('div', blokOne, ['blok_three_in_one'], { ['id']: 'blok_three_in_one' });
    const blokOneinTwo = createElement('div', blokTwo, ['blok_one_in_two'], { ['id']: 'blok_one_in_two' });
    const blokThreeinTwo = createElement('div', blokTwo, ['blok_three_in_two'], { ['id']: 'blok_three_in_two' });
    const blokTwoinTwo = createElement('div', blokTwo, ['blok_two_in_two'], { ['id']: 'blok_two_in_two' });
    const blokOneinThree = createElement('div', blokThree, ['blok_one_three'], { ['id']: 'blok_one_three' });
    const wrapperStart = createElement('div', blokThreeinTwo, ['wrapper_start_game']);
    menyDiv(2, 'div', blokOneinOne, ['blok_one_']);
    menyDiv(2, 'div', blokTwoinOne, ['blok_two_']);
    menyDiv(2, 'div', blokThreeinOne, ['blok_three_']);
    menyDiv(2, 'div', blokOneinTwo, ['blok_four_']);
    menyDiv(1, 'div', wrapperStart, ['picture_']);
    menyDiv(2, 'div', blokTwoinTwo, ['blok_five_']);
    menyDiv(1, 'div', blokOneinThree, ['button_if_cant_']);
    const oneKey = <HTMLElement>document.querySelector('.blok_one_0');
    const twoKey = <HTMLElement>document.querySelector('.blok_two_0');
    const threeKey = <HTMLElement>document.querySelector('.blok_three_0');
    const fourKey = <HTMLElement>document.querySelector('.blok_four_0');
    const fiveKey = <HTMLElement>document.querySelector('.blok_five_0');
    const dont = <HTMLElement>document.querySelector('.button_if_cant_0');
    dont.textContent = `I DON'T KNOW`;
    const arrayNameButton = [oneKey, twoKey, threeKey, fourKey, fiveKey];
    nameBtn(arrayButton, arrayNameButton);
    complecteElementAudioWord();
    //clickButtonAnswer();
    //keyButton();
    // audioPlayLink('1');
    // const words = sessionStorage.getItem('wordsForAudio') as string;
    // const objWords = JSON.parse(`${words}`);

    // const main = createElement('div', closeBtn, ['main'], { ['id']: 'main_game_sprint' });
    // const mainDiv_1 = createElement('div', main, ['main_div_1'], { ['id']: 'main_div_1' });
    // createElement('img', mainDiv_1, ['img_panda_sprint'], {
    //     ['id']: 'img_panda_sprint',
    //     ['src']: '../assets/png/panda_look.jpg',
    //     ['alt']: 'Panda_look',
    // });
    // const mainDiv_2 = createElement('div', main, ['main_div_2'], { ['id']: 'main_div_2' });
    // createElement('div', mainDiv_2, ['main_div_word_question'], { ['id']: 'main_div_word_question' });
    // createElement('div', mainDiv_2, ['main_div_word_option'], { ['id']: 'main_div_word_option' });
    // const footer = createElement('div', closeBtn, ['footer'], { ['id']: 'footer_game_sprint' });
    // const footerDiv_1 = createElement('div', footer, ['footer_div_1'], { ['id']: 'footer_div_1' });
    // const footerDiv_2 = createElement('div', footer, ['footer_div_2'], { ['id']: 'footer_div_2' });
    // createElement('button', footerDiv_1, ['button_false'], {
    //     ['id']: 'button_false',
    // }).textContent = 'NO';
    // createElement('button', footerDiv_2, ['button_true'], {
    //     ['id']: 'button_true',
    // }).textContent = 'YES';
    // clickButtonNoYes();
    // getWordsinGemeSprint(arrayObject);
}
