import { getCurrentUser } from '../components/loginUtils';
import { urlAdressUser } from './fetchquery';
import { IResponse, IUserWord, Word } from './interfaces';

export async function createUserWord(userWord: IUserWord): Promise<void> {
    const response = await fetch(`${urlAdressUser}/${getCurrentUser().userId}/words/${userWord.wordId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getCurrentUser().token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            difficulty: userWord.difficulty,
            optional: {
                learned: userWord.optional.learned,
                learningProgress: userWord.optional.learningProgress,
                correctAnswerCounter: userWord.optional.correctAnswerCounter,
                incorrectAnswerCounter: userWord.optional.incorrectAnswerCounter,
            },
        }),
    });
    await response.json();
}
export async function updateUserWord(userWord: IUserWord): Promise<void> {
    const response = await fetch(`${urlAdressUser}/${getCurrentUser().userId}/words/${userWord.wordId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${getCurrentUser().token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            difficulty: userWord.difficulty,
            optional: {
                learned: userWord.optional.learned,
                learningProgress: userWord.optional.learningProgress,
                correctAnswerCounter: userWord.optional.correctAnswerCounter,
                incorrectAnswerCounter: userWord.optional.incorrectAnswerCounter,
            },
        }),
    });
    await response.json();
}
export async function getUsersWords(): Promise<IUserWord[]> {
    const response = await fetch(`${urlAdressUser}/${getCurrentUser().userId}/words`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getCurrentUser().token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    const userWords: IUserWord[] = [];

    const res = (await response.json()) as IResponse[];
    res.forEach((e: IResponse) => {
        const userWord = {
            wordId: e.wordId,
            difficulty: e.difficulty || 'notDifficult',
            optional: {
                learned: e.optional?.learned || false,
                learningProgress: e.optional?.learningProgress || 0,
                correctAnswerCounter: e.optional?.correctAnswerCounter || 0,
                incorrectAnswerCounter: e.optional?.incorrectAnswerCounter || 0,
            },
        };
        userWords.push(userWord);
    });

    return userWords;
}
export async function getUserWordById(userWordId: string): Promise<IUserWord> {
    const response = await fetch(`${urlAdressUser}/${getCurrentUser().userId}/words/${userWordId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getCurrentUser().token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const res = (await response.json()) as IResponse;
    return {
        wordId: res.wordId,
        difficulty: res.difficulty || 'notDifficult',
        optional: {
            learned: res.optional?.learned || false,
            learningProgress: res.optional?.learningProgress || 0,
            correctAnswerCounter: res.optional?.correctAnswerCounter || 0,
            incorrectAnswerCounter: res.optional?.incorrectAnswerCounter || 0,
        },
    };
}
export async function markWordAsDifficult(userWord: string): Promise<void> {
    const userWords = (await getUsersWords()) as IUserWord[];
    const chosenWord = userWords.filter((word) => word.wordId === userWord);

    const params: IUserWord = {
        wordId: userWord,
        difficulty: 'difficult',
        optional: {
            learned: false,
            learningProgress: 0,
            correctAnswerCounter: 0,
            incorrectAnswerCounter: 0,
        },
    };

    if (chosenWord.length > 0) {
        const word = await getUserWordById(userWord);
        word.difficulty = 'difficult';
        await updateUserWord(word);
    } else {
        await createUserWord(params);
    }
}
export async function unmarkWordAsDifficult(userWord: string): Promise<void> {
    const word = await getUserWordById(userWord);
    word.difficulty = 'notDifficult';
    if (word.optional.learningProgress >= 3) {
        word.optional.learned = true;
        word.optional.learningProgress = 0;
    }
    await updateUserWord(word);
}

export async function getDifficultWords(): Promise<Word[]> {
    const filter = JSON.stringify({ $or: [{ 'userWord.difficulty': 'difficult' }] });
    const response = await fetch(`${urlAdressUser}/${getCurrentUser().userId}/aggregatedWords?wordsPerPage=100&filter=${filter}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getCurrentUser().token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    const arr = await response.json();
    return arr[0].paginatedResults;
}
export async function markWordAsLearned(userWord: string): Promise<void> {
    const userWords = (await getUsersWords()) as IUserWord[];
    const chosenWord = userWords.filter((word) => word.wordId === userWord);

    const params: IUserWord = {
        wordId: userWord,
        difficulty: 'notDifficult',
        optional: {
            learned: true,
            learningProgress: 0,
            correctAnswerCounter: 0,
            incorrectAnswerCounter: 0,
        },
    };

    if (chosenWord.length > 0) {
        const word = await getUserWordById(userWord);
        word.optional.learned = true;
        word.optional.learningProgress = 0;
        word.difficulty = 'notDifficult';
        await updateUserWord(word);
    } else {
        await createUserWord(params);
    }
}

export async function unmarkWordAsLearned(userWord: string): Promise<void> {
    const word = await getUserWordById(userWord);
    word.optional.learned = false;
    word.optional.learningProgress = 0;
    await updateUserWord(word);
}

export function isWordNew(word: Word): boolean {
    const wordHasCorrectAnswers = !!word.userWord?.optional.correctAnswerCounter;
    const wordHasIncorrectAnswers = !!word.userWord?.optional.incorrectAnswerCounter;
    return !(wordHasCorrectAnswers && wordHasIncorrectAnswers);
}

export async function resetWordLearnProgress(wordId: string): Promise<void> {
    const word = await getUserWordById(wordId);
    word.optional.learningProgress = 0;
    updateUserWord(word);
}
