import { createElement } from '../../components/createElement';
import { picture } from '../components-game/constants';

export const imagAnswer = (boolenAnswer: string) => {
    const divForPic = picture();
    if (boolenAnswer === 'false') {
        createElement('img', divForPic, ['pic'], { ['scr']: './assets/png/angry-panda.webp', ['alt']: 'Angry panda', ['width']: '100%', ['height']: '100%' });
    }
    if (boolenAnswer === 'true') {
        createElement('img', divForPic, ['pic'], { ['scr']: './assets/png/angry-panda.webp', ['alt']: 'Angry panda', ['width']: '100%', ['height']: '100%' });
    }
};
