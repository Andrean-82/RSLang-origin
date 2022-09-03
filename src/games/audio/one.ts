import { getWords } from '../../api/fetchquery';
import { parseJsonFile } from '../../components/parseJson';
import { blokFive, blokFour, blokOne, blokThree, blokTwo } from '../components-game/constants';
import { generateArray } from '../components-game/gameArrayforGetWord';
import { copySorted } from '../components-game/gameSotrArray';
import { randomPage } from '../sprint/gemeSprintGetWords';
import { clickButton } from './clickEventClick';
import { keyButton } from './clickEventCode';
import { audioPlayLink } from './gameAudioPlayLink';
import { gameRezultAudio } from './gameRezultAudio';

export async function complecteElementAudioWord() {
    try {
        const lengthArray = 20;
        const arrayAudioLinks: string[] = [];
        const arrayAudioIndex: number[] = [];
        let numberArray: number[] = [];
        const arrayIndex = generateArray(lengthArray).sort(() => Math.random() - 0.5);
        const one = blokOne();
        const two = blokTwo();
        const three = blokThree();
        const four = blokFour();
        const five = blokFive();
        const arrayHTMLElem = [one, two, three, four, five];
        const page = randomPage();
        const grupe = parseJsonFile('grupe');
        const words = await getWords(grupe, page);
        for (let i = 0; i < arrayIndex.length - 15; i++) {
            arrayHTMLElem[i].innerHTML = words[arrayIndex[i]].wordTranslate;
            arrayAudioIndex.push(arrayIndex[i]);
            arrayAudioLinks.push(words[i].audio);
        }
        numberArray = copySorted(arrayAudioIndex);
        console.log(numberArray);
        const indexForAudio = numberArray[0];
        audioPlayLink(words[indexForAudio].audio);
        clickButton(indexForAudio, arrayAudioIndex);
        keyButton(indexForAudio, arrayAudioIndex);
    } catch {
        console.log('error');
        gameRezultAudio();
    }
}
