import { parseJsonFile } from '../../components/parseJson';
import { NumberAttempt, sprintStore, Stor } from '../components-game/interface';
import { sprintGameResult } from './gameSprintResult';
import { getWordsinGemeSprint } from './gemeSprintGetWords';

NumberAttempt.count;
let i = 0;
const j = 0;
const k = 1;
const arrayNumber = Stor.arrayMod;

export function clickButtonNoYes(event: Event) {
    if (i >= 19) {
        NumberAttempt.countWord = 19;
        i = 0;
        sprintGameResult();
    }
    const button = event.target;
    const score = <HTMLElement>document.getElementById('score_sprint');
    const buttonFalse = <HTMLButtonElement>document.getElementById('button_false');
    const buttonTrue = <HTMLButtonElement>document.getElementById('button_true');
    sprintStore.newWords++;
    try {
        if (arrayNumber[i][j] != arrayNumber[i][k] && button === buttonFalse) {
            NumberAttempt.count += 10;
            score.textContent = `${NumberAttempt.count}`;
            Stor.arrayColor.push('white');
            const getmodify = parseJsonFile('modifyArray');
            getWordsinGemeSprint(getmodify);
            sprintStore.incorrectAnswers++;
            sprintStore.correctAnswersStreak = 0;
        }
        if (arrayNumber[i][j] === arrayNumber[i][k] && button === buttonFalse) {
            Stor.arrayColor.push('black');
            const getmodify = parseJsonFile('modifyArray');
            getWordsinGemeSprint(getmodify);
            sprintStore.correctAnswers++;
            sprintStore.correctAnswersStreak++;
            if (sprintStore.correctAnswersStreak > sprintStore.maxCorrectAnswerStreak) {
                sprintStore.maxCorrectAnswerStreak = sprintStore.correctAnswersStreak;
            }
        }
        if (arrayNumber[i][j] === arrayNumber[i][k] && button === buttonTrue) {
            NumberAttempt.count += 10;
            score.textContent = `${NumberAttempt.count}`;
            Stor.arrayColor.push('white');
            const getmodify = parseJsonFile('modifyArray');
            getWordsinGemeSprint(getmodify);
            sprintStore.incorrectAnswers++;
            sprintStore.correctAnswersStreak = 0;
        }
        if (arrayNumber[i][j] != arrayNumber[i][k] && button === buttonTrue) {
            Stor.arrayColor.push('black');
            const getmodify = parseJsonFile('modifyArray');
            getWordsinGemeSprint(getmodify);
            sprintStore.correctAnswers++;
            sprintStore.correctAnswersStreak++;
            if (sprintStore.correctAnswersStreak > sprintStore.maxCorrectAnswerStreak) {
                sprintStore.maxCorrectAnswerStreak = sprintStore.correctAnswersStreak;
            }
        }
        i++;
    } catch {
        sprintGameResult();
        i = 0;
    }
    buttonFalse.addEventListener('click', clickButtonNoYes);
    buttonTrue.addEventListener('click', clickButtonNoYes);
}
