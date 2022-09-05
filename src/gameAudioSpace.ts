import { wrapper } from "./games/audio/gameWrapper";

const spaceDiv = <HTMLElement>document.querySelector('.button_if_cant_0');
spaceDiv.addEventListener('click', function (event) {
  wrapper('false');
})
document.addEventListener('keyup', (event: KeyboardEvent) => {
  if (event.code === 'Space') {
    wrapper('false');
  }
});