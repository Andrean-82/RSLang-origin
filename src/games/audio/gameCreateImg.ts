import { createElement } from '../../components/createElement';
import { wsg } from '../components-game/constants';

export function imagAnswer(boolenAnswer: string) {
    const divForPic = wsg();
    if (boolenAnswer === 'false') {
        divForPic.innerHTML = '';
        const img = createElement('img', divForPic, ['img_panda_audio'], {
            ['id']: 'img_panda_audio',
            ['src']: '/src/assets/png/angry-panda.png',
            ['alt']: 'Angry',
        });
    }
    if (boolenAnswer === 'true') {
        divForPic.innerHTML = '';
        const img = createElement('img', divForPic, ['img_panda_audio'], {
            ['id']: 'img_panda_audio',
            ['src']: '/src/assets/png/free-sticker-panda-7603475.png',
            ['alt']: 'Like',
        });
    }
}
