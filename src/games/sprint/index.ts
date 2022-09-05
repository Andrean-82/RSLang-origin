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
        }
        if (button === challenge) {
            sessionStorage.setItem('clickPlay', '2');
            gameLevel();
        }
    };
};
