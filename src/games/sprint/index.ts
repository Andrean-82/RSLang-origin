import { gameLevel } from '../components-game/gameLevel';
import { NumberAttempt } from '../components-game/interface';

export const clickButtonPlay = () => {
    (document.querySelector('.gamesPageContainer') as HTMLElement).addEventListener('click', (event) => {
        const button = event.target;
        //sessionStorage.setItem('buttonChioce', `${button}`);
        const sprint = <HTMLElement>document.querySelector('.sprint');
        const challenge = <HTMLElement>document.querySelector('.challenge');
        if (button === sprint) {
            NumberAttempt.clickPlay = 1;
            gameLevel();
        }
        if (button === challenge) {
            NumberAttempt.clickPlay = 2;
            gameLevel();
        }
    });
};
