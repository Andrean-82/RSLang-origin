import { urlAdress } from '../../api/fetchquery';

export function audioPlayLink(musikLink: string) {
    // timer.innerHTML = ''
    return new Audio(`${urlAdress}/${musikLink}`).play();
}
