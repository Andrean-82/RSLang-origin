/* eslint-disable no-underscore-dangle */
import { urlAdress } from '../api/fetchquery';
import { Word } from '../api/interfaces';
import { getAggregatedWords, getWords } from '../api/wordsApi';
import { isUserLoggedIn } from './loginUtils';
import { getDifficultWords } from '../api/userWordsApi';

class BookPage {
    pageNumber: number;
    groupNumber: number;
    isUserLoggedIn: boolean;

    constructor(groupNumber: number, pageNumber: number) {
        this.pageNumber = pageNumber;
        this.groupNumber = groupNumber;
        this.isUserLoggedIn = isUserLoggedIn();
    }

    async getWords(): Promise<Word[]> {
        return this.isUserLoggedIn ? getAggregatedWords(this.groupNumber, this.pageNumber) : getWords(this.groupNumber, this.pageNumber);
    }

    async render(isOnlyDifficultWords = false): Promise<void> {
        const container = document.getElementById('content') as HTMLDivElement;
        const words = isOnlyDifficultWords ? await getDifficultWords() : await this.getWords();
        let wordsHtml = words.map((word: Word) => this.createWordCard(word)).join('');

        if (isOnlyDifficultWords && words.length === 0) {
            wordsHtml = `
      <div class="difficultPlaceholder">
        There are no words marked as Difficult.</br>
        Click <span class="material-icons">star</span> icon on a word card to add it to this section.
      </div>
      `;
        }
        container.innerHTML = wordsHtml;
    }

    createWordCard(word: Word): string {
        let isDifficult = '';
        let isLearnt = '';
        let wordGameScore = '0 / 0';

        if (word.userWord) {
            if (word.userWord.difficulty === 'difficult') {
                isDifficult = 'difficult';
            }
            if (word.userWord.optional.learned) {
                isLearnt = 'learnt';
            }
            wordGameScore = `${word.userWord.optional.correctAnswerCounter} / ${word.userWord.optional.incorrectAnswerCounter}`;
        }
        const isHidden = this.isUserLoggedIn ? '' : 'hidden';
        return `
      <div class="wordCard ${isDifficult} ${isLearnt}" data-wordId=${word._id || word.id}>
        <img class="cardImage" src="${urlAdress}/${word.image}"></img>
        <div class="cardContent">
          <div class="cardHeader">
            <div class="subHeader">
              <span>${word.word}</span>
              <span>${word.transcription}</span>
              <span data-sound="${word.audio}" class="material-icons">volume_down</span>
            </div>
            <div>${word.wordTranslate}</div>
          </div>

          <div class="cardBody">
            <div>${word.textExample}
            <span data-sounde="${word.audioExample}" class="material-icons">volume_down</span></div>
            <div class="subSentence">${word.textExampleTranslate}</div>
          </div>
          <div class="cardBody">
            <div>${word.textMeaning}            <span data-soundx="${word.audioMeaning}" class="material-icons">volume_down</span></div>
            <div class="subSentence">${word.textMeaningTranslate}</div>
          </div>

          <div class="cardIndicators ${isHidden}">
            <span>${wordGameScore}</span>
            <span class="material-icons learntIcon" >done</span>
            <span class="material-icons difficultIcon">star</span>
          </div>

        </div>
      </div>
    `;
    }
}

export default BookPage;
