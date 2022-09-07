import { addPageTitle } from '../components/createTitle';
import { clickButtonAudio } from '../games/audio/clickEventListenerAudio';
import { clickButtonSprint } from '../games/sprint/clickEventListenerSprint';
import { clickButtonPlay } from '../games/sprint/index';
import Page from './page';
class Games extends Page {
    constructor() {
        super('Games');
    }
    openPage(): void {
        const pageName = this.name;
        const pageHtml = `
        <div class="gamesPageContainer">
          <div class="gameCard">
            <img src="../assets/png/sprint.png"></img>
            <div><b>Sprint</b></div>
            <div class="gameDescription">
              You have one minute to guess as many words as you can!
            </div>
            <div data-gameType="sprint" class="gameBackBtn sprint">Play</div>
          </div>
  
          <div class="gameCard">
            <img src="../assets/png/audio.png"></img>
            <div><b>Audio Challenge</b></div>
            <div class="gameDescription">
              Listen to words and choose their translation!
            </div>
            <div data-gameType="challenge" class="gameBackBtn challenge">Play</div>
          </div>
        </div>
    `;
        this.appContainer.className = '';
        this.appContainer.removeEventListener('click', clickButtonSprint);
        this.appContainer.removeEventListener('click', clickButtonAudio);
        this.appContainer.innerHTML = pageHtml;
        addPageTitle(pageName);
        clickButtonPlay();
    }
}
export default Games;
