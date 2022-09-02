export function wrapperTime(hourMeter: number, time: HTMLElement) {
    const timer = sessionStorage.getItem('interval');
    return function timeDown() {
        const seconds: number = hourMeter % 60;
        time.textContent = `${seconds}`;
        hourMeter -= 1;
        if (hourMeter < 0) {
            clearInterval(`${timer}`);
            //time.style.animation = 'Slip 1s 1s forwards';
        }
    };
}
