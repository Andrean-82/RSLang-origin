import { createElement } from '../../components/createElement';
import { wsg } from '../components-game/constants';

export function imagAnswer(boolenAnswer: string) {
    const divForPic = wsg();
    console.log(divForPic);
    if (boolenAnswer === 'false') {
        divForPic.innerHTML = '';
        console.log('False');
        const img = createElement('img', divForPic, ['img_panda_audio'], {
            ['id']: 'img_panda_audio',
            ['src']: '../assets/png/angry-panda.png',
            ['alt']: 'Angry',
        });
    }
    if (boolenAnswer === 'true') {
        divForPic.innerHTML = '';
        console.log('True');
        const img = createElement('img', divForPic, ['img_panda_audio'], {
            ['id']: 'img_panda_audio',
            ['src']: '../assets/png/free-sticker-panda-7603475.png',
            ['alt']: 'Like',
        });
    }
}
