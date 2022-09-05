import { sprintGameResult } from './gameSprintResult';
// export function wrapperTime(hourMeter: number, time: HTMLParagraphElement) {
let hourMeter = 30;
export function wrapperTime(timeAtribut: HTMLElement) {
    return function timeDown() {
        const inter = sessionStorage.getItem('interval');
        const seconds: number = hourMeter % 60;
        timeAtribut.textContent = `${seconds}`;
        hourMeter -= 1;
        if (hourMeter < 0) {
            clearInterval(`${inter}`);
            sprintGameResult();
        }
    };
}
