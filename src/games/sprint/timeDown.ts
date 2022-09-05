import { sprintGameResult } from './gameSprintResult';
// export function wrapperTime(hourMeter: number, time: HTMLParagraphElement) {
let hourMeter = 30;
// const scoreDiv = <HTMLElement>document.querySelector('.form_result_h3');

export function wrapperTime(timeAtribut: HTMLElement) {
    return function timeDown() {
        const scoreDiv = <HTMLElement>document.querySelector('.form_result_h3');
        console.log(scoreDiv);
        const inter = sessionStorage.getItem('interval');
        const seconds: number = hourMeter % 60;
        timeAtribut.textContent = `${seconds}`;
        hourMeter -= 1;
        if (hourMeter < 0) {
            clearInterval(`${inter}`);
            sprintGameResult();
        }
        if (scoreDiv) {
            clearInterval(`${inter}`);
        }
    };
}
