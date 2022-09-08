import { NumberAttempt } from '../components-game/interface';
import { sprintGameResult } from './gameSprintResult';

export function wrapperTime(timeAtribut: HTMLElement) {
    let hourMeter = 30;
    return function timeDown() {
        const stopDiv = <HTMLElement>document.querySelector('.blok_for_H3');
        const inter = sessionStorage.getItem('interval');
        const seconds: number = hourMeter % 60;
        timeAtribut.textContent = `${seconds}`;
        hourMeter -= 1;
        if (hourMeter <= 0) {
            clearInterval(`${inter}`);
            sprintGameResult();
        }
        if (NumberAttempt.countWord <= 0) {
            clearInterval(`${inter}`);
        }
    };
}
