interface IStor {
    arrayMod: Array<[number, number]>;
    ansver: Array<string>;
    divQuestionWord: Array<[string, string]>;
    words: Array<{ word: string; wordTranslate: string }>;
    arrayColor: Array<string>;
}
export const Stor: IStor = {
    arrayMod: [],
    ansver: [],
    divQuestionWord: [],
    words: [],
    arrayColor: [],
};

interface INumberAttempt {
    countWord: number;
    count: number;
    countLifeScore: number;
    countAnswerScore: number;
    countTrueAnswer: number;
    countFalseAnswer: number;
    clickPlay: number;
}
export const NumberAttempt: INumberAttempt = {
    countWord: 19,
    count: 0,
    countLifeScore: 5,
    countAnswerScore: 0,
    countTrueAnswer: 0,
    countFalseAnswer: 0,
    clickPlay: 0,
};
