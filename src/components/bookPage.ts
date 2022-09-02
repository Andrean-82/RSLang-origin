/* eslint-disable no-underscore-dangle */
import { urlAdress } from '../api/fetchquery';
import { Word } from '../api/interfaces';
import { getWords } from '../api/wordsApi';


class BookPage {
  pageNumber: number;
  groupNumber: number;

  constructor(groupNumber: number, pageNumber: number) {
    this.pageNumber = pageNumber;
    this.groupNumber = groupNumber;
  }

  async getWords(): Promise<Word[]> {
    return getWords(this.groupNumber, this.pageNumber);
  }


  async render(): Promise<void> {
    const container = document.getElementById('content') as HTMLDivElement;
    const words = await this.getWords();
    const wordsHtml = words.map((word: Word) => this.createWordCard(word)).join('');
    container.innerHTML = wordsHtml;
  }

  createWordCard(word: Word): string {
    return `
      <div class="wordCard" data-wordId=${word._id || word.id}>
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
            <div>${word.textExample}</div>
            <div class="subSentence">${word.textExampleTranslate}</div>
          </div>
          <div class="cardBody">
            <div>${word.textMeaning}</div>
            <div class="subSentence">${word.textMeaningTranslate}</div>
          </div>
        </div>
      </div>
    `;
  }
}

export default BookPage;
