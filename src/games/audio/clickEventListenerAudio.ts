import { grupeFive, grupeFour, grupeOne, grupeThree, grupeTwo, grupeZero } from '../components-game/constants';
import { complecteElementAudio } from '../components-game/gameComplecteForClickLevel';

export const clickButtonAudio = () => {
    (document.getElementById('app') as HTMLElement).addEventListener('click', (event) => {
        //audio_challenge
        const button = event.target;
        const Zero = grupeZero();
        const One = grupeOne();
        const Two = grupeTwo();
        const Three = grupeThree();
        const Four = grupeFour();
        const Five = grupeFive();
        if (button === Zero) {
            complecteElementAudio(Zero);
        }
        if (button === One) {
            complecteElementAudio(One);
        }
        if (button === Two) {
            complecteElementAudio(Two);
        }
        if (button === Three) {
            complecteElementAudio(Three);
        }
        if (button === Four) {
            complecteElementAudio(Four);
        }
        if (button === Five) {
            complecteElementAudio(Five);
        }
    });
};
