// import { createElement } from '../../components/createElement';
import { picture } from '../components-game/constants';
import { complecteElementAudioWord } from './one';

// (document.querySelector('.audio_challenge') as HTMLElement).onclick = async function (event) {

export const keyButton = (one: number, numberArray: Array<number>) => {
    document.addEventListener('keyup', async function (event) {
        if (one === numberArray[0] && event.code === 'Digit1') {
            console.log('one');
            numberArray = [];
            complecteElementAudioWord();
        } else {
            if (one === numberArray[0] && event.code != 'Digit1') {
                console.log('false');
                numberArray = [];
                complecteElementAudioWord();
            }
        }
        if (one === numberArray[1] && event.code === 'Digit2') {
            console.log('two');
            numberArray = [];
            complecteElementAudioWord();
        } else {
            if (one === numberArray[1] && event.code != 'Digit2') {
                console.log('false');
                numberArray = [];
                complecteElementAudioWord();
            }
        }
        if (one === numberArray[2] && event.code === 'Digit3') {
            console.log('three');
            numberArray = [];
            complecteElementAudioWord();
        } else {
            if (one === numberArray[2] && event.code != 'Digit3') {
                console.log('false');
                numberArray = [];
                complecteElementAudioWord();
            }
        }
        if (one === numberArray[3] && event.code === 'Digit4') {
            console.log('four');
            numberArray = [];
            complecteElementAudioWord();
        } else {
            if (one === numberArray[3] && event.code != 'Digit4') {
                console.log('false');
                numberArray = [];
                complecteElementAudioWord();
            }
        }
        if (one === numberArray[4] && event.code === 'Digit5') {
            console.log('five');
            numberArray = [];
            complecteElementAudioWord();
        } else {
            if (one === numberArray[4] && event.code != 'Digit5') {
                console.log('false');
                numberArray = [];
                complecteElementAudioWord();
            }
        }
        if (event.code == 'Space') {
            const img = picture();
            img.innerHTML = '';
            numberArray = [];
            //img.classList.toggle('errorAnswer');
            complecteElementAudioWord();
        }
    });
};
