import { getStatistic, updateStatistic } from '../../api/stat';
import { createElement } from '../../components/createElement';
import { getCurrentUser } from '../../components/loginUtils';
import { NumberAttempt, sprintStore } from '../components-game/interface';
import { gameSprintAddAnsver } from './gameSprintCreateDivAnsver';
import { gameSprintAddColor } from './gameSprintCreateDivColor';
import { gameSprintAddYN } from './gameSprintCreateDivYN';

export async function sprintGameResult() {
    if (NumberAttempt.count === null) {
        NumberAttempt.count = 0;
    }
    const closeBtn = <HTMLElement>document.querySelector('.close_btn');
    closeBtn.innerHTML = '';
    closeBtn.classList.toggle('wrapper_game_sptint_result');
    const blokForH3 = createElement('div', closeBtn, ['blok_for_H3'], { ['id']: 'blok_for_H3' });
    const blokForResult = createElement('div', closeBtn, ['blok_for_result'], { ['id']: 'blok_for_result' });
    const h3 = createElement('h3', blokForH3, ['form_result_h3'], { ['id']: 'form_result_h3' });
    h3.textContent = `YOUR SCORE: ${NumberAttempt.count}`;
    createElement('div', blokForResult, ['form_result_1'], { ['id']: 'form_result_1' });
    createElement('div', blokForResult, ['form_result_2'], { ['id']: 'form_result_2' });
    gameSprintAddAnsver();
    gameSprintAddYN();
    gameSprintAddColor();
    sessionStorage.clear();
    if (getCurrentUser()) {
        const stat = await getStatistic();
        stat.optional.day.sprint.correctAnswersCount += sprintStore.correctAnswers;
        stat.optional.day.sprint.incorrectAnswersCount += sprintStore.incorrectAnswers;
        stat.optional.day.sprint.countNewWords += sprintStore.newWords;
        if (stat.optional.day.sprint.correctAnswersSeriesLength < sprintStore.maxCorrectAnswerStreak) {
            stat.optional.day.sprint.correctAnswersSeriesLength = sprintStore.maxCorrectAnswerStreak;
        }
        updateStatistic(stat);
    }
}
