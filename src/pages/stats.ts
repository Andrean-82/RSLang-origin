
import { addPageTitle } from '../components/createTitle';
import Page from './page';

class Statistics extends Page {
    constructor() {
        super('Statistics');
    }

    openPage(): void {
        const pageName = this.name;

        const pageHtml = `
        <div id="statistic-container">
        <div id="statistic-for-this-day">
    <h2>For this day</h2>
    
    <div id="words-statistic">
    <h3>Words statistic</h3>
        <div id="words-stat-container">
            <p>new words:<span id="day-new-words">0</span></p>

            <p>correct answers:<span id="day-correct-answers">0</span></p>

            <p>learned words:<span id="day-learned-words">0</span></p>
        </div>
    </div>

    <div id="game-statistic">
    <h3>Game statistic</h3>
        <div id="game-stat-container">
            
            <div id="audio-challenge-stat-container">
                <h3>audio-challenge
                    <img src="../assets/png/audio.png" alt="audio-challenge" id="audio-challenge-img" width="58">
                </h3>
                <p>new words:<span id="audio-challenge-new-words">0</span></p>

                <p>correct answers:<span id="audio-challenge-correct-answers">0</span> </p>

                <p>correct answers streak:<span id="audio-challenge-streak">0</span></p>
            </div>

            <div id="sprint-stat-container">
                <h3>
                    Sprint<img src="../assets/png/sprint.png" alt="sprint" id="sprint-img" width="58">
                </h3>
                <p>new words:<span id="sprint-new-words">0</span></p>
                <p>correct answers:<span id="sprint-correct-answers">0</span> </p>
                <p>correct answers streak:<span id="sprint-streak">0</span></p>
            </div> 
        </div>
    </div>
</div>
</div>`;

        this.appContainer.innerHTML = pageHtml;
        addPageTitle(pageName);
    }
}

export default Statistics;
