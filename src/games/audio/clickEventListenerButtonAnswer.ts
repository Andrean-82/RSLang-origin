import { buttonCant, buttonOne } from '../components-game/constants';
import { complecteElementAudioWord } from './one';

export const clickButtonAnswer = () => {
    (document.querySelector('.container_background_image') as HTMLElement).onclick = async function (event) {
        const button = event.target;
        const Cant = buttonCant();
        const One = buttonOne();
        if (button === Cant) {
            complecteElementAudioWord();
        }
        if (button === One) {
            complecteElementAudioWord();
        }
    };
};
