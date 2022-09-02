import { getWords } from '../../api/fetchquery';
import { audioGame } from '../audio/gameAudioInterface';
import { sprintGame } from '../sprint/gameSprintInterface';
import { randomPage } from '../sprint/gemeSprintGetWords';

export async function complecteElementSprint(Element: HTMLElement) {
    const page = randomPage();
    const closeBtn = <HTMLElement>document.querySelector('.close_btn');
    const grupe = Number(Element.textContent) - 1;
    closeBtn.innerHTML = '';
    const words = await getWords(grupe, page);
    sprintGame(words.sort(() => Math.random() - 0.5));
    return words;
}
export async function complecteElementAudio(Element: HTMLElement) {
    const closeBtn = <HTMLElement>document.querySelector('.close_btn');
    const grupe = Number(Element.textContent) - 1;
    sessionStorage.setItem('grupe', `${grupe}`);
    closeBtn.innerHTML = '';
    audioGame();
    return grupe;
}
