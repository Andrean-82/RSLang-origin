import { addPageTitle } from '../components/createTitle';
import Page from './page';

class Team extends Page {
    constructor() {
        super('Team');
    }

    openPage(): void {
        const pageName = this.name;

        const pageHtml = `
        <div class="teamContainer">
          <div class="teamCard">
            <img src="../assets/main_pandas/8.png" class="photo"></img>
            <div>
              <span><img src="../assets/svg/github.svg" class="git"></img></span>
              <span><a class="link-github" href="https://github.com/marumaru1">Maria</a></span>
            </div>
            <div class="teamDescription">
              Developer. 
              <br/>"Don't shoot the pianist, he's doing his best!"
            </div>
          </div>

          <div class="teamCard team-lead">
            <img src="../assets/main_pandas/13.png" class="photo"></img>
            <div>
              <span><img src="../assets/svg/github.svg" class="git"></img></span>
              <span><a class="link-github" href="https://github.com/Andrean-82">Anatoliy</a></span>
            </div>
            <div class="teamDescription">
            Developer, team lead.
            <br/>"We are very strong team!"
            </div>
          </div>
    
          <div class="teamCard">
            <img src="../assets/main_pandas/4.png" class="photo"></img>
            <div>
              <span><img src="../assets/svg/github.svg" class="git"></img></span>
              <span><a class="link-github" href="https://github.com/SPECTRA995">Maksim</a></span>
            </div>
            <div class="teamDescription">
              Developer.
              <br/>"Fall down seven times, stand up eight."
            </div>
          </div>
    
        </div>`;

        this.appContainer.innerHTML = pageHtml;
        addPageTitle(pageName);
    }
}

export default Team;
