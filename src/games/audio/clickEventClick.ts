import { buttonCant, buttonFive, buttonFour, buttonOne, buttonThree, buttonTwo, wsg } from '../components-game/constants';
import { wrapper } from './gameWrapper';

export const clickButton = (one: number, numberArray: Array<number>) => {
    const blokOneWord = buttonOne();
    const blokTwoWord = buttonTwo();
    const blokThreeWord = buttonThree();
    const blokFourWord = buttonFour();
    const blokFiveWord = buttonFive();
    const space = buttonCant();
    (document.querySelector('.audio_challenge') as HTMLElement).addEventListener('click', async function (event) {
        const button = event.target;
        {
            if (button === space) {
                console.log(`this button 1 ${button}`);
                console.log(`this space 1 ${space}`);
                wrapper('false');
            }
            if (button === blokOneWord && one === numberArray[0]) {
                wrapper('true');
            } else {
                if (one === numberArray[0] && button != blokOneWord) {
                    wrapper('false');
                }
            }
            if (one === numberArray[1] && button === blokTwoWord) {
                wrapper('true');
            } else {
                if (one === numberArray[1] && button != blokTwoWord) {
                    wrapper('false');
                }
            }
            if (one === numberArray[2] && button === blokThreeWord) {
                wrapper('true');
            } else {
                if (one === numberArray[2] && button != blokThreeWord) {
                    wrapper('false');
                }
            }
            if (one === numberArray[3] && button === blokFourWord) {
                wrapper('true');
            } else {
                if (one === numberArray[3] && button != blokFourWord) {
                    wrapper('false');
                }
            }
            if (one === numberArray[4] && button === blokFiveWord) {
                wrapper('true');
            } else {
                if (one === numberArray[4] && button != blokFiveWord) {
                    wrapper('false');
                }
            }
            numberArray = [];
        }
    });
};
