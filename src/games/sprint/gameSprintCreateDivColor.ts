import { createElement } from '../../components/createElement';
export function gameSprintAddColor() {
    const arrayColorModif = sessionStorage.getItem('arrayColorModif');
    const arrayColor: Array<string> = JSON.parse(`${arrayColorModif}`);
    const formRezult2 = <HTMLElement>document.getElementById('form_result_2');
    const tdWrapperTrue = createElement('div', formRezult2, ['td_wrapper_true'], { ['id']: 'td_wrapper_true' });
    console.log(arrayColor);
    arrayColor.forEach((elem: string) => {
        const wrapperRezultTrue = createElement('div', tdWrapperTrue, ['wrapper_rezult_true'], {
            ['id']: 'wrapper_rezult_ansver',
        });
        const colorAnsver = createElement('div', wrapperRezultTrue, ['colore_ansver'], {
            ['id']: 'colore_ansver',
        });
        colorAnsver.style.backgroundColor = elem;
    });
}
