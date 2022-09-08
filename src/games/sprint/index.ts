import { gameLevel } from '../components-game/gameLevel';
import { audioStore, NumberAttempt, sprintStore } from '../components-game/interface';

export const clickButtonPlay = () => {
    (document.querySelector('.gamesPageContainer') as HTMLElement).addEventListener('click', (event) => {
        const button = event.target;
        //sessionStorage.setItem('buttonChioce', ${button});
        const sprint = <HTMLElement>document.querySelector('.sprint');
        const challenge = <HTMLElement>document.querySelector('.challenge');
        if (button === sprint) {
            NumberAttempt.clickPlay = 1;
            sprintStore.newWords = 0;
            sprintStore.correctAnswersStreak = 0;
            sprintStore.incorrectAnswers = 0;
            sprintStore.correctAnswers = 0;
            sprintStore.maxCorrectAnswerStreak = 0;
            gameLevel();
        }
        if (button === challenge) {
            NumberAttempt.clickPlay = 2;
            audioStore.newWords = 0;
            audioStore.correctAnswersStreak = 0;
            audioStore.incorrectAnswers = 0;
            audioStore.correctAnswers = 0;
            audioStore.maxCorrectAnswerStreak = 0;
            gameLevel();
        }
    });
};
