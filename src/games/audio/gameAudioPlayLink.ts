import { urlAdress } from '../../api/fetchquery';

export function audioPlayLink(musikLink: string) {
    return new Audio(`${urlAdress}/${musikLink}`).play();
}
