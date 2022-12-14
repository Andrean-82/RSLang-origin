import { grupeFive, grupeFour, grupeOne, grupeThree, grupeTwo, grupeZero } from '../components-game/constants';
import { complecteElementSprint } from '../components-game/gameComplecteForClickLevel';

export const clickButtonSprint = () => {
    (document.querySelector('.sprint_challenge') as HTMLElement).onclick = async function (event) {
        const button = event.target;
        const Zero = grupeZero();
        const One = grupeOne();
        const Two = grupeTwo();
        const Three = grupeThree();
        const Four = grupeFour();
        const Five = grupeFive();
        if (button === Zero) {
            complecteElementSprint(Zero);
        }
        if (button === One) {
            complecteElementSprint(One);
        }
        if (button === Two) {
            complecteElementSprint(Two);
        }
        if (button === Three) {
            complecteElementSprint(Three);
        }
        if (button === Four) {
            complecteElementSprint(Four);
        }
        if (button === Five) {
            complecteElementSprint(Five);
        }
    };
};
