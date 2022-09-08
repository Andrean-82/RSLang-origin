import { getCurrentUser } from '../components/loginUtils';
import { urlAdress, urlAdressUser } from './fetchquery';

export async function getStatistic(): Promise<IStatistic> {
    const user = getCurrentUser();
    const response = await fetch(`${urlAdressUser}/${user.userId}/statistics`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${user.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 404) {
        return initStat;
    }
    const res = await response.json();

    console.log(res);
    return {
        learnedWords: res.learnedWords,
        optional: res.optional,
    };
}
export async function updateStatistic(body: IStatistic): Promise<IStatistic> {
    const user = getCurrentUser();
    const response = await fetch(`${urlAdressUser}/${user.userId}/statistics`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${user.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return response.json();
}

interface IStatistic {
    learnedWords: number;
    optional: {
        day: {
            audioChallenge: {
                countNewWords: number;
                correctAnswersSeriesLength: number;
                correctAnswersCount: number;
                incorrectAnswersCount: number;
            };
            sprint: {
                countNewWords: number;
                correctAnswersSeriesLength: number;
                correctAnswersCount: number;
                incorrectAnswersCount: number;
            };
            words: {
                countNewWords: number;
                countLearnedWords: number;
                correctAnswersCount: number;
                incorrectAnswersCount: number;
            };
            currentDay: number;
        };
        all: {
            newWordsPerDay: number[];
            totalLearnedWordsPerDay: number[];
        };
    };
}
const initStat: IStatistic = {
    learnedWords: 0,
    optional: {
        day: {
            audioChallenge: {
                countNewWords: 0,
                correctAnswersSeriesLength: 0,
                correctAnswersCount: 0,
                incorrectAnswersCount: 0,
            },
            sprint: {
                countNewWords: 0,
                correctAnswersSeriesLength: 0,
                correctAnswersCount: 0,
                incorrectAnswersCount: 0,
            },
            words: {
                countNewWords: 0,
                countLearnedWords: 0,
                correctAnswersCount: 0,
                incorrectAnswersCount: 0,
            },
            currentDay: 1,
        },
        all: {
            newWordsPerDay: [0],
            totalLearnedWordsPerDay: [0],
        },
    },
};
