import { generateArray } from '../components-game/gameArrayforGetWord';
import { NumberAttempt, Stor } from '../components-game/interface';

const lengthArrayIndex = 20;
const arrayPosEng = generateArray(lengthArrayIndex); //.sort(() => Math.random() - 0.5);
const arrayPosTranslete = generateArray(lengthArrayIndex).sort(() => Math.random() - 0.5);

const arrayMod: Array<[number, number]> = [];
const divQuestionWord: Array<[string, string]> = [];
const ansver: Array<string> = [];

for (let i = 0; i < arrayPosEng.length; i++) {
    Stor.arrayMod.push([arrayPosEng[i], arrayPosTranslete[i]]);
}
export const randomPage = () => {
    const pageRand = 1 + Math.random() * (30 + 1 - 1);
    return Math.floor(pageRand);
};
export const getWordsinGemeSprint = async function (words: Array<{ word: string; wordTranslate: string }>) {
    if (NumberAttempt.countWord >= 0) {
        const divQuestion = <HTMLElement>document.getElementById('main_div_word_question');
        const divOption = <HTMLElement>document.getElementById('main_div_word_option');
        const wordEng = words[arrayPosEng[NumberAttempt.countWord]].word;
        const wordTrans = words[arrayPosTranslete[NumberAttempt.countWord]].wordTranslate;
        Stor.divQuestionWord.push([wordEng, wordTrans]);
        divQuestion.innerHTML = wordEng;
        divOption.innerHTML = wordTrans;
        if (arrayPosEng[NumberAttempt.countWord] === arrayPosTranslete[NumberAttempt.countWord]) {
            Stor.ansver.push('YES');
        } else {
            Stor.ansver.push('NO');
        }
        NumberAttempt.countWord--;
        const modifyArray = JSON.stringify(words);
        sessionStorage.setItem('modifyArray', modifyArray);
    }
};
