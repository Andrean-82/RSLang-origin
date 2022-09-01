
import { addPageTitle } from '../components/createTitle';
import Page from './page';
class Dictionary extends Page {
    constructor() {
        super('Dictionary');
    }
    openPage(): void {
        const pageName = this.name;
        const pageHtml = `
        <div class="textbookContainer">
          <div class="gamesContainer">
            <div class="gameBtn" data-game="sprint">
              <img class="gameLogo" src="../src/assets/png/sprint.png" data-game="sprint"></img>
              <div data-game="sprint">Sprint</div>
            </div>
            <div class="gameBtn" data-game="challenge">
              <img class="gameLogo" src="../src/assets/png/audio.png" data-game="challenge"></img>
              <div data-game="challenge">Audio Challenge</div>
            </div>
            <img src="../assets/completed.png" class="completedIcon"></img>
          </div>
          <div class="pageSelector">
            <div data-pageNav="prev"><</div>
            <div id="currentPage"></div>
            <div data-pageNav="next">></div>
          </div>
          <div class="contentContainer">
            <div id="content"></div>
            <div class="groupSelector">
              <div class="groupCircle" data-group="0">1</div>
              <div class="groupCircle" data-group="1">2</div>
              <div class="groupCircle" data-group="2">3</div>
              <div class="groupCircle" data-group="3">4</div>
              <div class="groupCircle" data-group="4">5</div>
              <div class="groupCircle" data-group="5">6</div>
            </div>
        </div>
      `;
        this.appContainer.innerHTML = pageHtml;
        addPageTitle(pageName);
    }
}
export default Dictionary;
