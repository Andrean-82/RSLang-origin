import { createElement } from '../../components/createElement';

export function menyDiv(quantity: number, div_name: keyof HTMLElementTagNameMap, perent: HTMLElement, class_name: string[]) {
    for (let i = 0; i < quantity; i++) {
        createElement(div_name, perent, [class_name + `${i}`]);
    }
}
