import BookPage from '../components/bookPage';
import { urlAdress } from '../api/fetchquery';
import { addPageTitle } from '../components/createTitle';
import Page from './page';

class Dictionary extends Page {
  currentPage: number;
  currentGroup: number;
  isDifficultSectionOpened: boolean;
  isPageCompleted: boolean;
  isHandlersInited: boolean;

  constructor() {
    super('Dictionary');
    this.currentPage = 0;
    this.currentGroup = 0;
    this.isDifficultSectionOpened = false;
    this.isPageCompleted = false;
    this.isHandlersInited = false;
  }

  openPage(): void {
    this.renderPageElements();
    this.renderPageContent();
    addPageTitle(this.name);
    if (!this.isHandlersInited) {
      this.initHandlers();
    }
  }

  renderPageElements(): void {
    const isHidden = 'hidden';
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
      </div>

      <div class="pageSelector">
        <div data-pageNav="prev"><</div>
        <div id="currentPage">${this.currentPage + 1}</div>
        <div data-pageNav="next">></div>
      </div>

      <div class="contentContainer">
        <div id="content"></div>

        <div class="groupSelector">
          <img class="groupCircle" data-group="0" src="../src/assets/main_pandas/3.png" width="40" >
          <img class="groupCircle" data-group="1" src="../src/assets/main_pandas/7.png" width="40" >
          <img class="groupCircle" data-group="2" src="../src/assets/main_pandas/9.png" width="40" >
          <img class="groupCircle" data-group="3" src="../src/assets/main_pandas/13.png" width="40" >
          <img class="groupCircle" data-group="4" src="../src/assets/main_pandas/14.png" width="40" >
          <img class="groupCircle" data-group="5" src="../src/assets/main_pandas/15.png" width="40" >
        </div>

        <div class="onlyDifficultToggle ${isHidden}">
          <div class="difIcon">
            <span class="material-icons" id="difficultWords">psychology</span>
          </div>
          <div>Difficult Words Section</div>
        </div>
      </div>

    </div>
  `;
    this.appContainer.innerHTML = pageHtml;
  }

  async renderPageContent(): Promise<void> {
      await new BookPage(this.currentGroup, this.currentPage).render();
      this.updatePageCounters();
      this.setPageBackground();
  }

  initHandlers(): void {
    document.addEventListener('click', this.scrollPage.bind(this));
    document.addEventListener('click', this.openSelectedGroup.bind(this));
    document.addEventListener('click', Dictionary.playCardSound);
    this.isHandlersInited = true;
  }

  scrollPage(event: Event): void {
    const element = event.target as HTMLElement;
    const buttonName = element.dataset.pagenav;

    if (buttonName === 'prev' && this.currentPage > 0) {
      this.currentPage -= 1;
      this.renderPageContent();
    }

    if (buttonName === 'next' && this.currentPage < 29) {
      this.currentPage += 1;
      this.renderPageContent();
    }
  }

  openSelectedGroup(event: Event): void {
    const element = event.target as HTMLElement;
    const groupId = element.dataset.group;

    if (groupId && element.parentElement?.className === 'groupSelector') {
      this.currentGroup = Number(groupId);
      this.currentPage = 0;
      this.renderPageContent();
    }
  }

  updatePageCounters(): void {
    (document.getElementById('currentPage') as HTMLDivElement).innerText = `${this.currentPage + 1}`;
  }

  static playCardSound(event: Event): void {
    const element = event.target as HTMLElement;
    const audio = element.dataset.sound;

    if (audio) {
      new Audio(`${urlAdress}/${audio}`).play();
    }
  }

  setPageBackground(): void {
    const container = document.querySelector('.textbookContainer') as HTMLElement;
    switch (this.currentGroup) {
      case 0: container.style.backgroundColor = '#7B7FF1'; break;
      case 1: container.style.backgroundColor = '#7276E0'; break;
      case 2: container.style.backgroundColor = '#6569C7'; break;
      case 3: container.style.backgroundColor = '#5255A1'; break;
      case 4: container.style.backgroundColor = '#313361'; break;
      case 5: container.style.backgroundColor = '#2A1D61'; break;
      default: break;
    }
  }
}

export default Dictionary;
