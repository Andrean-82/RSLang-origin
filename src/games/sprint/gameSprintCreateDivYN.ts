import { createElement } from '../../components/createElement';
import { parseJsonFile } from '../../components/parseJson';

export function gameSprintAddYN() {
    const arrayCorrect = parseJsonFile('arrayAnsver');
    const formRezult2 = <HTMLElement>document.getElementById('form_result_2');
    const tdWrapper = createElement('div', formRezult2, ['td_wrapper'], { ['id']: 'td_wrapper' });
    arrayCorrect.forEach((elem: string) => {
        const wrapperRezultAnsver = createElement('div', tdWrapper, ['wrapper_rezult_ansver'], {
            ['id']: 'wrapper_rezult_ansver',
        });
        const correctAnsver = createElement('div', wrapperRezultAnsver, ['correct_ansver'], {
            ['id']: 'correct_ansver',
        });
        correctAnsver.textContent = elem;
    });
}
