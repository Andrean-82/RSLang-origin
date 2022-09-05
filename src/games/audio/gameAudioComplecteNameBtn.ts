export function nameBtn(ArrayNumber: Array<number>, ArrayName: Array<HTMLElement>) {
    for (let i = 0; i < ArrayNumber.length; i++) {
        ArrayName[i].textContent = `${ArrayNumber[i]}`;
    }
}
