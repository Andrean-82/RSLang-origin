import { createElement } from '../../components/createElement';
import { parseJsonFile } from '../../components/parseJson';

export function gameSprintAddAnsver() {
    let allWordAfterGameModif = parseJsonFile('wordForRezult');
    const formRezult2 = <HTMLElement>document.getElementById('form_result_2');
    const tdWrapperAnsver = createElement('div', formRezult2, ['tbody_result'], { ['id']: 'tbody_result' });
    allWordAfterGameModif.forEach((elem: Array<string>) => {
        const wrapperRezult = createElement('div', tdWrapperAnsver, ['wrapper_rezult'], { ['id']: 'wrapper_rezult' });
        const englishWord = createElement('div', wrapperRezult, ['english_word'], { ['id']: 'english_word' });
        englishWord.textContent = elem[0].toUpperCase();
        const single = createElement('td', wrapperRezult, ['single'], { ['id']: 'single' });
        single.textContent = '&';
        const tranclateWord = createElement('div', wrapperRezult, ['translate_word'], { ['id']: 'translate_word' });
        tranclateWord.textContent = elem[1].toUpperCase();
    });
    allWordAfterGameModif = [];
}
