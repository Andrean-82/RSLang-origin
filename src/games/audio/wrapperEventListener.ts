import { wrapper } from './gameWrapper';
import { buttonCant, buttonFive, buttonFour, buttonOne, buttonThree, buttonTwo } from '../components-game/constants';

export function wrapperEvent(one: number, numberArray: Array<number>) {
    const blokOneWord = buttonOne();
    const blokTwoWord = buttonTwo();
    const blokThreeWord = buttonThree();
    const blokFourWord = buttonFour();
    const blokFiveWord = buttonFive();
    function clickButton(event: Event) {
        const button = event.target;
        if (one === numberArray[0]) {
            if (button === blokOneWord) {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        if (one === numberArray[1]) {
            if (button === blokTwoWord) {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        if (one === numberArray[2]) {
            if (button === blokThreeWord) {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        if (one === numberArray[3]) {
            if (button === blokFourWord) {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        if (one === numberArray[4]) {
            if (button === blokFiveWord) {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        numberArray = [];
    }
    function keyButton(event: KeyboardEvent) {
        const button = event.code;
        if (one === numberArray[0]) {
            if (button === 'Digit1') {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        if (one === numberArray[1]) {
            if (button === 'Digit2') {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        if (one === numberArray[2]) {
            if (button === 'Digit3') {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        if (one === numberArray[3]) {
            if (button === 'Digit4') {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        if (one === numberArray[4]) {
            if (button === 'Digit5') {
                wrapper('true');
            } else {
                wrapper('false');
            }
        }
        numberArray = [];
    }
    const rout = <HTMLElement>document.querySelector('.audio_challenge');
    rout.addEventListener('click', clickButton);
    document.addEventListener('keyup', keyButton);
}
