export function logo() {
    const body = <HTMLBodyElement>document.querySelector('body');
    const logo = <HTMLElement>document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'it`s good!';
    body.append(logo);
}
