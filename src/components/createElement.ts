export const createElement = (
    elementName: keyof HTMLElementTagNameMap,
    parent?: HTMLElement,
    classNames?: string[],
    attributes?: { [key: string]: string }
): HTMLElement => {
    const tag: HTMLElement = document.createElement(elementName);
    if (classNames) tag.classList.add(...classNames);
    if (attributes) {
        for (const key in attributes) {
            tag.setAttribute(key, attributes[key]);
        }
    }
    if (parent) parent.append(tag);
    return tag;
};
