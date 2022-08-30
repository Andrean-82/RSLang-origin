import { openForm } from '../autorization/autorizationWindow';
import { addPageTitle } from '../components/createTitle';
import Page from './page';

openForm();
// changeOnSignInForm();

class Main extends Page {
    constructor() {
        super('Main');
    }

    openPage(): void {
        const pageHtml = `
      <div class="mainPageContainer">
        <h1>Welcome to RS Lang </h1>  
        <img src="/assets/png/panda_main.png" alt="logo" width="160">
        <div class="tittle_text">
          Learn more than 3500 new English words with <b>Panda</b>! <BR/>
        <br/>
          Track your progress <b>every day</b>!
        </div>
        <h2>Learn and Play!</h2>
        <div class="main_text">
        Play games, listen to pronunciation, improve your knowledge.<br/> With our app, learning is a joy!
        </div>
        <div class="gamesPageContainer">
          <div class="gameCard">
            <img src="/assets/png/sprint.png"></img>
            <div><b>Sprint</b></div>
            <div class="gameDescription">
              You have one minute to guess as many words as you can!
            </div>
          </div>
  
          <div class="gameCard">
            <img src="/assets/png/audio.png"></img>
            <div><b>Audio Challenge</b></div>
            <div class="gameDescription">
              Listen to words and choose their translation!
            </div>
          </div>
        </div>
        <h2>Dictionary</h2>
        <div class="main_text">
          This section allows you too see multiple more than 3000 words divided into 6 levels according to their difficulty.
          Logged users received access to game statistics for each word card, as well as the possibility for
          marking each word as Learned or Difficult.
        </div>
        <img src="/assets/png/library.jpg" alt="Dictionary" width="500px">
        <h2>Statistics</h2>
        <div class="main_text">
          Track you progress using the Statistics section.
          This section is available for logged users only!
        </div>
      </div>
     `;

        this.appContainer.innerHTML = pageHtml;
        addPageTitle(this.name);
    }
}
export default Main;
