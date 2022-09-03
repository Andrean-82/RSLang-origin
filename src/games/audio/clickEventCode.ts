import { wrapper } from './gameWrapper';

export const keyButton = (one: number, numberArray: Array<number>) => {
    document.addEventListener('keyup', async function (event) {
        if (event.code === 'Space') {
            console.log(`this button 1 ${event.code}`);
            wrapper('false');
        }
        if ('Digit1' && one === numberArray[0]) {
            console.log(one);
            console.log(numberArray[0]);
            wrapper('true');
        } else {
            if (one === numberArray[0] && event.code != 'Digit1') {
                wrapper('false');
            }
        }
        if (one === numberArray[1] && event.code === 'Digit2') {
            wrapper('true');
        } else {
            if (one === numberArray[1] && event.code != 'Digit2') {
                wrapper('false');
            }
        }
        if (one === numberArray[2] && event.code === 'Digit3') {
            wrapper('true');
        } else {
            if (one === numberArray[2] && event.code != 'Digit3') {
                wrapper('false');
            }
        }
        if (one === numberArray[3] && event.code === 'Digit4') {
            wrapper('true');
        } else {
            if (one === numberArray[3] && event.code != 'Digit4') {
                wrapper('false');
            }
        }
        if (one === numberArray[4] && event.code === 'Digit5') {
            wrapper('true');
        } else {
            if (one === numberArray[4] && event.code != 'Digit5') {
                wrapper('false');
            }
        }
        numberArray = [];
    });
};
