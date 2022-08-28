// import { wrapperTime } from './timeDown';
import { generateArray } from './gameSprintArrayforGetWord';
import { sprintGameResult } from './gameSprintResult';

// const time = wrapperTime();
// export const interval = setInterval(time, 1000);
const arrayPosEng = generateArray(); //.sort(() => Math.random() - 0.5);
const arrayPosTranslete = generateArray(); //.sort(() => Math.random() - 0.5);
const arrayMod: Array<[number, number]> = [];
for (let i = 0; i < arrayPosEng.length; i++) {
    arrayMod.push([arrayPosEng[i], arrayPosTranslete[i]]);
}

const arrayNumberaddWord = JSON.stringify(arrayMod);
sessionStorage.setItem('arrayNumberaddWord', arrayNumberaddWord);

export const randomPage = () => {
    const pageRand = 1 + Math.random() * (30 + 1 - 1);
    return Math.floor(pageRand);
};
let count = arrayPosEng.length - 1;
const divQuestionWord: Array<[string, string]> = [];
const ansver: Array<string> = [];
export const getWordsinGemeSprint = async function (words: Array<{ word: string; wordTranslate: string }>) {
    if (count >= 0) {
        const divQuestion = <HTMLElement>document.getElementById('main_div_word_question');
        const divOption = <HTMLElement>document.getElementById('main_div_word_option');
        const wordEng = words[arrayPosEng[count]].word;
        const wordTrans = words[arrayPosTranslete[count]].wordTranslate;
        divQuestionWord.push([wordEng, wordTrans]);
        divQuestion.innerHTML = wordEng;
        divOption.innerHTML = wordTrans;
        if (arrayPosEng[count] === arrayPosTranslete[count]) {
            ansver.push('YES');
        } else {
            ansver.push('NO');
        }
        count--;
        const wordForRezult = JSON.stringify(divQuestionWord);
        sessionStorage.setItem('wordForRezult', wordForRezult);
        const modifyArray = JSON.stringify(words);
        sessionStorage.setItem('modifyArray', modifyArray);
        const arrayAnsver = JSON.stringify(ansver);
        sessionStorage.setItem('arrayAnsver', arrayAnsver);
    } else {
        sprintGameResult();
    }
};
