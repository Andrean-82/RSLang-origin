import { parseJsonFile } from '../../components/parseJson';
import { getWordsinGemeSprint } from './gemeSprintGetWords';

let count = 0;
let i = 0;
const j = 0;
const k = 1;
const arrayNumber = parseJsonFile('arrayNumberaddWord');
const arrayColor: Array<string> = [];
// let colorTarget = 'black';

export const clickButtonNoYes = () => {
    (document.querySelector('.close_btn') as HTMLElement).onclick = async function (event) {
        const button = event.target;
        const score = <HTMLElement>document.getElementById('score_sprint');
        const buttonFalse = <HTMLButtonElement>document.getElementById('button_false');
        const buttonTrue = <HTMLButtonElement>document.getElementById('button_true');
        if (arrayNumber[i][j] != arrayNumber[i][k] && button === buttonFalse) {
            count += 10;
            score.textContent = `${count}`;
            arrayColor.push('white');
            sessionStorage.setItem('count', `${count}`);
            const arrayColorModif = JSON.stringify(arrayColor);
            sessionStorage.setItem('arrayColorModif', arrayColorModif);
            const getmodify = parseJsonFile('modifyArray');
            getWordsinGemeSprint(getmodify);
        }
        if (arrayNumber[i][j] === arrayNumber[i][k] && button === buttonFalse) {
            arrayColor.push('black');
            sessionStorage.setItem('count', `${count}`);
            const arrayColorModif = JSON.stringify(arrayColor);
            sessionStorage.setItem('arrayColorModif', arrayColorModif);
            const getmodify = parseJsonFile('modifyArray');
            getWordsinGemeSprint(getmodify);
        }
        if (arrayNumber[i][j] === arrayNumber[i][k] && button === buttonTrue) {
            count += 10;
            score.textContent = `${count}`;
            arrayColor.push('white');
            const getmodify = parseJsonFile('modifyArray');
            sessionStorage.setItem('count', `${count}`);
            const arrayColorModif = JSON.stringify(arrayColor);
            sessionStorage.setItem('arrayColorModif', arrayColorModif);
            getWordsinGemeSprint(getmodify);
        }
        if (arrayNumber[i][j] != arrayNumber[i][k] && button === buttonTrue) {
            arrayColor.push('black');
            sessionStorage.setItem('count', `${count}`);
            const arrayColorModif = JSON.stringify(arrayColor);
            sessionStorage.setItem('arrayColorModif', arrayColorModif);
            const getmodify = parseJsonFile('modifyArray');
            getWordsinGemeSprint(getmodify);
            sessionStorage.setItem('count', `${count}`);
        }
        i++;
    };
};
