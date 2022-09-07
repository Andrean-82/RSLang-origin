import BookPage from '../components/bookPage';
import { urlAdress } from '../api/fetchquery';
import { addPageTitle } from '../components/createTitle';
import Page from './page';
import { markWordAsDifficult, markWordAsLearned, unmarkWordAsDifficult, unmarkWordAsLearned } from '../api/userWordsApi';
import { isUserLoggedIn } from '../components/loginUtils';
import { gameLevel } from '../games/components-game/gameLevel';

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
        this.clickButtonPlay();
        if (!this.isHandlersInited) {
            this.initHandlers();
        }
    }
    clickButtonPlay() {
        (document.querySelector('.gamesContainer') as HTMLElement).onclick = async function (event) {
            const button = event.target;
            sessionStorage.setItem('buttonChioce', `${button}`);
            const sprint = <HTMLElement>document.querySelector('.sprint');
            const challenge = <HTMLElement>document.querySelector('.challenge');
            console.log(challenge);
            if (button === sprint) {
                sessionStorage.setItem('clickPlay', '1');
                gameLevel();
            }
            if (event.target === challenge) {
                sessionStorage.setItem('clickPlay', '2');
                gameLevel();
            }
        };
    }
    renderPageElements(): void {
        const isHidden = isUserLoggedIn() ? '' : 'hidden';
        const pageHtml = `
    <div class="textbookContainer">
      <div class="gamesContainer">
        <div class="gameBtn" data-game="sprint">
        <img class="gameLogo sprint" src="../assets/png/sprint.png" data-game="sprint"></img>
          <div data-game="sprint">Sprint</div>
        </div>
        <div class="gameBtn" data-game="challenge">
        <img class="gameLogo challenge" src="../assets/png/audio.png" data-game="challenge"></img>
          <div data-game="challenge">Audio</div>
        </div>
        <img src="../assets/png/completed.png" class="completedIcon"></img>
      </div>

      <div class="pageSelector">
        <div data-pageNav="prev"><</div>
        <div id="currentPage">${this.currentPage + 1}</div>
        <div data-pageNav="next">></div>
      </div>

      <div class="contentContainer">
        <div id="content"></div>

        <div class="groupSelector">
        <img class="groupCircle" data-group="0" src="../assets/main_pandas/3.png" width="40" >
        <img class="groupCircle" data-group="1" src="../assets/main_pandas/7.png" width="40" >
        <img class="groupCircle" data-group="2" src="../assets/main_pandas/9.png" width="40" >
        <img class="groupCircle" data-group="3" src="../assets/main_pandas/13.png" width="40" >
        <img class="groupCircle" data-group="4" src="../assets/main_pandas/14.png" width="40" >
        <img class="groupCircle" data-group="5" src="../assets/main_pandas/15.png" width="40" >
      </div>

        <div class="onlyDifficultToggle ${isHidden}">
          <div class="difIcon">
            <span class="material-icons" id="difficultWords">star</span>
          </div>
          <div>Difficult Words Section</div>
        </div>
      </div>

    </div>
  `;
        this.appContainer.innerHTML = pageHtml;
    }

    async renderPageContent(): Promise<void> {
        if (this.isDifficultSectionOpened) {
            new BookPage(0, 0).render(true);
        } else {
            await new BookPage(this.currentGroup, this.currentPage).render();
            this.checkIfPageIsCompleted();
            this.updatePageCounters();
            this.setPageBackground();
        }
    }

    initHandlers(): void {
        document.addEventListener('click', this.scrollPage.bind(this));
        document.addEventListener('click', this.openSelectedGroup.bind(this));
        document.addEventListener('click', this.markUnmarkWordAsDifficult.bind(this));
        document.addEventListener('click', this.markUnmarkWordAsLearnt.bind(this));
        document.addEventListener('click', this.toggleDifficultWordsSection.bind(this));
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

    async markUnmarkWordAsDifficult(event: Event): Promise<void> {
        const element = event.target as HTMLElement;
        const wordCard = element.parentElement?.parentElement?.parentElement;
        const wordId = wordCard?.dataset.wordid;

        if (element.className.includes('difficultIcon') && wordId) {
            if (wordCard.classList.contains('difficult')) {
                await unmarkWordAsDifficult(wordId);
            } else {
                await markWordAsDifficult(wordId);
            }
            this.renderPageContent();
        }
    }

    async markUnmarkWordAsLearnt(event: Event): Promise<void> {
        const element = event.target as HTMLElement;
        const wordCard = element.parentElement?.parentElement?.parentElement;
        const wordId = wordCard?.dataset.wordid;

        if (element.className.includes('learntIcon') && wordId) {
            if (wordCard.classList.contains('learnt')) {
                await unmarkWordAsLearned(wordId);
            } else {
                await markWordAsLearned(wordId);
            }
            this.renderPageContent();
        }
    }

    toggleDifficultWordsSection(event: Event): void {
        const element = event.target as HTMLElement;
        if (element.id === 'difficultWords') {
            if (this.isDifficultSectionOpened) {
                this.isDifficultSectionOpened = false;
                (document.querySelector('.groupSelector') as HTMLElement).classList.remove('disabled');
                (document.querySelector('.pageSelector') as HTMLElement).classList.remove('disabled');
                (document.querySelector('.gamesContainer') as HTMLElement).classList.remove('disabled');
                (document.getElementById('difficultWords') as HTMLElement).style.color = 'black';
                this.renderPageContent();
            } else {
                this.isDifficultSectionOpened = true;
                (document.querySelector('.groupSelector') as HTMLElement).classList.add('disabled');
                (document.querySelector('.pageSelector') as HTMLElement).classList.add('disabled');
                (document.querySelector('.gamesContainer') as HTMLElement).classList.add('disabled');
                (document.getElementById('difficultWords') as HTMLElement).style.color = '#ffbb33';
                new BookPage(0, 0).render(true);
            }
        }
    }

    checkIfPageIsCompleted(): void {
        const wordCards = Array.from(document.getElementsByClassName('wordCard'));
        const cards = wordCards.filter((card) => card.classList.contains('difficult') || card.classList.contains('learnt'));
        if (cards.length === 20 && !this.isDifficultSectionOpened) {
            document.querySelectorAll('.gameBtn').forEach((btn) => btn.classList.add('disabled'));
            (document.querySelector('.completedIcon') as HTMLElement).style.display = 'block';
        } else {
            document.querySelectorAll('.gameBtn').forEach((btn) => btn.classList.remove('disabled'));
            (document.querySelector('.completedIcon') as HTMLElement).style.display = 'none';
        }
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
            case 0:
                container.style.backgroundColor = '#7B7FF1';
                break;
            case 1:
                container.style.backgroundColor = '#7276E0';
                break;
            case 2:
                container.style.backgroundColor = '#6569C7';
                break;
            case 3:
                container.style.backgroundColor = '#5255A1';
                break;
            case 4:
                container.style.backgroundColor = '#313361';
                break;
            case 5:
                container.style.backgroundColor = '#2A1D61';
                break;
            default:
                break;
        }
    }
}

export default Dictionary;
