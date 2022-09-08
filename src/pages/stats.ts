import { getStatistic } from '../api/stat';
import { addPageTitle } from '../components/createTitle';
import Page from './page';

class Statistics extends Page {
    constructor() {
        super('Statistics');
    }

    async openPage(): Promise<void> {
        const stat = await getStatistic();
        const pageName = this.name;
        let xx = Number(
            Math.ceil(
                (stat.optional.day.sprint.correctAnswersCount * 100) /
                    (stat.optional.day.sprint.incorrectAnswersCount + stat.optional.day.sprint.correctAnswersCount)
            )
        );

        let yy = Number(
            Math.ceil(
                (stat.optional.day.audioChallenge.correctAnswersCount * 100) /
                    (stat.optional.day.audioChallenge.incorrectAnswersCount + stat.optional.day.audioChallenge.correctAnswersCount)
            )
        );

        if (isNaN(xx)) {
            xx = 0;
        }

        if (isNaN(yy)) {
            yy = 0;
        }
        const pageHtml = `
        <div id="statistic-container">
        <div id="statistic-for-this-day">
    <h2>For this day</h2>
    
    <div id="words-statistic">
    <h3>Words statistic</h3>
        <div id="words-stat-container">
            <p>new words:<span id="day-new-words">${stat.optional.day.sprint.countNewWords}</span></p>

            <p>correct answers:<span id="day-correct-answers">
            ${(xx + yy) / 2} %
             </span></p>

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
                <p>new words:<span id="audio-challenge-new-words">${stat.optional.day.audioChallenge.countNewWords}</span></p>

                <p>correct answers:<span id="audio-challenge-correct-answers">${yy}</span> </p>

                <p>correct answers streak:<span id="audio-challenge-streak">${stat.optional.day.audioChallenge.correctAnswersSeriesLength}</span></p>
            </div>

            <div id="sprint-stat-container">
                <h3>
                    Sprint<img src="../assets/png/sprint.png" alt="sprint" id="sprint-img" width="58">
                </h3>
                <p>new words:<span id="sprint-new-words">${stat.optional.day.sprint.countNewWords}</span></p>
                <p>correct answers:<span id="sprint-correct-answers">${xx} %</span> </p>
                <p>correct answers streak:<span id="sprint-streak">${stat.optional.day.sprint.correctAnswersSeriesLength}</span></p>
            </div> 
        </div>
    </div>
    <div id="statistic-for-all-time">
    <h2>Statistic for all time</h2>
    <div id="schedule-stat-container">
        <div id="new-words-per-day">
            <h3>new words per day</h3>
            <canvas width="500" height="500" id="canvas1"></canvas>
        </div>
        <div id="total-learned-words-per-day">
            <h3>total learned words per day</h3>
            <canvas width="500" height="500" id="canvas2"></canvas>
        </div>    
    </div>
</div>
</div>
</div>`;
        this.appContainer.className = '';
        this.appContainer.innerHTML = pageHtml;
        addPageTitle(pageName);
        this.renderStatSchedule([stat.optional.day.sprint.countNewWords + stat.optional.day.audioChallenge.countNewWords], []);
    }

    renderStatSchedule(arrStat1: number[], arrStat2: number[]): void {
        const canvas1 = document.getElementById('canvas1') as HTMLCanvasElement;
        const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;

        const ctx1 = canvas1.getContext('2d') as CanvasRenderingContext2D;
        const ctx2 = canvas2.getContext('2d') as CanvasRenderingContext2D;

        function renderCanvas(ctx: CanvasRenderingContext2D, data: number[]) {
            ctx.fillStyle = 'black'; // Задаём чёрный цвет для линий
            ctx.lineWidth = 2.0; // Ширина линии
            ctx.beginPath(); // Запускает путь
            ctx.moveTo(30, 10); // Указываем начальный путь
            ctx.lineTo(30, 460); // Перемешаем указатель
            ctx.lineTo(500, 460); // Ещё раз перемешаем указатель
            ctx.stroke();
            ctx.fillStyle = 'black';
            ctx.font = '22px serif';
            ctx.fillText('Words', 40, 40);
            ctx.fillText('Days', 440, 440);
            ctx.font = '12px Arial Narrow';
            for (let i = 0; i < 15; i++) {
                ctx.fillText(`${(15 - i) * 8}`, 4, i * 31);
                ctx.beginPath();
                ctx.moveTo(25, i * 31);
                ctx.lineTo(30, i * 31);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(i * 31, 455);
                ctx.lineTo(i * 31, 460);
                ctx.stroke();
            }
            for (let i = 0; i < 20; i++) {
                ctx.fillText(String(i), 30 + i * 32, 475);
            }

            ctx.fillStyle = 'blue';
            for (let i = 0; i < data.length; i++) {
                const dp = data[i];
                ctx.fillRect(43 + i * 30, 460 - dp * 4, 20, dp * 4);
            }
        }
        renderCanvas(ctx1, arrStat1);
        renderCanvas(ctx2, arrStat2);
    }
}

export default Statistics;
