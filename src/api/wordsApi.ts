import { getCurrentUser } from '../components/loginUtils';
import { urlAdressUser, urlAdressWords } from './fetchquery';
import { Word } from './interfaces';

export async function getWords(groupNumber: number, pageNumber: number): Promise<Word[]> {
    const response = await fetch(`${urlAdressWords}?group=${groupNumber}&page=${pageNumber}`, {
        method: 'GET',
    });
    return response.json();
}

export async function getWordbyId(id: string): Promise<Word[]> {
    const response = await fetch(`${urlAdressWords}/${id}`, {
        method: 'GET',
    });
    return response.json();
}

export async function getAggregatedWords(groupNumber: number, pageNumber: number) {
    const response = await fetch(`${urlAdressUser}/${getCurrentUser().userId}/aggregatedWords?group=${groupNumber}&page=${pageNumber}&wordsPerPage=20`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getCurrentUser().token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const words = await response.json();
    console.log(words[0].paginatedResults);

    return words[0].paginatedResults;
}
