// import { generateArray } from '../components-game/gameArrayforGetWord';
import { gameLevel } from '../components-game/gameLevel';

export const clickButtonPlay = () => {
    (document.querySelector('.gamesPageContainer') as HTMLElement).onclick = async function (event) {
        const button = event.target;
        sessionStorage.setItem('buttonChioce', `${button}`);
        const sprint = <HTMLElement>document.querySelector('.sprint');
        const challenge = <HTMLElement>document.querySelector('.challenge');
        if (button === sprint) {
            sessionStorage.setItem('clickPlay', '1');
            gameLevel();
            //generateArray(20);
        }
        if (button === challenge) {
            sessionStorage.setItem('clickPlay', '2');
            gameLevel();
            //generateArray();
        }
    };
};
