import { getWords } from '../../api/fetchquery';
import { parseJsonFile } from '../../components/parseJson';
import { sprintGame } from './gameSprintInterface';
//import { choiceNO } from './gameSprintLogicChose';
//import { choiceNO } from './gameSprintLogicChose';
import { getWordsinGemeSprint, randomPage } from './gemeSprintGetWords';
let count = 0;
let i = 0;
const j = 0;
const k = 1;
// const arrayNumberaddWord = sessionStorage.getItem('arrayNumberaddWord');
// const arrayNumber = JSON.parse(`${arrayNumberaddWord}`);
const arrayNumber = parseJsonFile('arrayNumberaddWord');

const arrayColor: Array<string> = [];
export const clickButton = () => {
    (document.getElementById('close_btn') as HTMLElement).onclick = async function (event) {
        const button = event.target;
        const score = <HTMLElement>document.getElementById('score_sprint');
        const grupeZero = <HTMLButtonElement>document.getElementById('level_0_number');
        const grupeOne = <HTMLButtonElement>document.getElementById('level_1_number');
        const grupeTwo = <HTMLButtonElement>document.getElementById('level_2_number');
        const grupeThree = <HTMLButtonElement>document.getElementById('level_3_number');
        const grupeFour = <HTMLButtonElement>document.getElementById('level_4_number');
        const grupeFive = <HTMLButtonElement>document.getElementById('level_5_number');
        const buttonFalse = <HTMLButtonElement>document.getElementById('button_false');
        const buttonTrue = <HTMLButtonElement>document.getElementById('button_true');
        const page = randomPage();
        //
        if (button === grupeZero) {
            const closeBtn = <HTMLElement>document.getElementById('close_btn');
            const grupe = Number(grupeZero.textContent) - 1;
            closeBtn.innerHTML = '';
            const words = await getWords(grupe, page);
            sprintGame(words.sort(() => Math.random() - 0.5));
            return words;
        }
        if (button === grupeOne) {
            const closeBtn = <HTMLElement>document.getElementById('close_btn');
            const grupe = Number(grupeOne.textContent) - 1;
            closeBtn.innerHTML = '';
            const words = await getWords(grupe, page);
            sprintGame(words.sort(() => Math.random() - 0.5));
            return words;
        }
        if (button === grupeTwo) {
            const closeBtn = <HTMLElement>document.getElementById('close_btn');
            const grupe = Number(grupeTwo.textContent) - 1;
            closeBtn.innerHTML = '';
            const words = await getWords(grupe, page);
            sprintGame(words.sort(() => Math.random() - 0.5));
            return words;
        }
        if (button === grupeThree) {
            const closeBtn = <HTMLElement>document.getElementById('close_btn');
            const grupe = Number(grupeThree.textContent) - 1;
            closeBtn.innerHTML = '';
            const words = await getWords(grupe, page);
            sprintGame(words.sort(() => Math.random() - 0.5));
            return words;
        }
        if (button === grupeFour) {
            const closeBtn = <HTMLElement>document.getElementById('close_btn');
            const grupe = Number(grupeFour.textContent) - 1;
            closeBtn.innerHTML = '';
            const words = await getWords(grupe, page);
            sprintGame(words.sort(() => Math.random() - 0.5));
            return words;
        }
        if (button === grupeFive) {
            const closeBtn = <HTMLElement>document.getElementById('close_btn');
            const grupe = Number(grupeFive.textContent) - 1;
            closeBtn.innerHTML = '';
            const words = await getWords(grupe, page);
            sprintGame(words.sort(() => Math.random() - 0.5));
            return words;
        }
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
