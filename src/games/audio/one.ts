import { getWords } from '../../api/fetchquery';
import { parseJsonFile } from '../../components/parseJson';
import { blokFive, blokFour, blokOne, blokThree, blokTwo } from '../components-game/constants';
import { generateArray } from '../components-game/gameArrayforGetWord';
import { copySorted } from '../components-game/gameSotrArray';
import { randomPage } from '../sprint/gemeSprintGetWords';
import { keyButton } from './clickEventCode';
// import { wrapperTime } from '../components-game/timeDown';
import { audioPlayLink } from './gameAudioPlayLink';

export async function complecteElementAudioWord() {
    // const timer = picture();
    const lengthArray = 20;
    const arrayAudioLinks: string[] = [];
    const arrayAudioIndex: number[] = [];
    let numberArray: number[] = [];
    // const time = wrapperTime(3, timer);
    // const interval = setInterval(time, 1000);
    // sessionStorage.setItem('interval', `${interval}`);
    const one = blokOne();
    const two = blokTwo();
    const three = blokThree();
    const four = blokFour();
    const five = blokFive();
    const arrayHTMLElem = [one, two, three, four, five];
    const page = randomPage();
    const grupe = parseJsonFile('grupe');
    const words = await getWords(grupe, page);
    const arrayIndex = generateArray(lengthArray).sort(() => Math.random() - 0.5);
    for (let i = 0; i < arrayIndex.length - 15; i++) {
        arrayHTMLElem[i].innerHTML = words[arrayIndex[i]].wordTranslate;
        arrayAudioIndex.push(arrayIndex[i]);
        arrayAudioLinks.push(words[i].audio);
    }
    numberArray = copySorted(arrayAudioIndex);
    const indexForAudio = numberArray[0];
    audioPlayLink(words[indexForAudio].audio);
    keyButton(indexForAudio, arrayAudioIndex);
}
