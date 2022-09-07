import { createElement } from '../../components/createElement';
import { Stor } from '../components-game/interface';
export function gameSprintAddColor() {
    const formRezult2 = <HTMLElement>document.getElementById('form_result_2');
    const tdWrapperTrue = createElement('div', formRezult2, ['td_wrapper_true'], { ['id']: 'td_wrapper_true' });
    Stor.arrayColor.forEach((elem: string) => {
        const wrapperRezultTrue = createElement('div', tdWrapperTrue, ['wrapper_rezult_true'], {
            ['id']: 'wrapper_rezult_ansver',
        });
        const colorAnsver = createElement('div', wrapperRezultTrue, ['colore_ansver'], {
            ['id']: 'colore_ansver',
        });
        colorAnsver.style.backgroundColor = elem;
    });
}
