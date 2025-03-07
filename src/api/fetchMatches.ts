import { Match } from '../types/api-types'

export interface FetchMatchesResponse {
    ok: boolean;
    data: {
        matches: Match[];
    };
}

export async function fetchMatches(): Promise<Match[]> {
    const res = await fetch('https://app.ftoyd.com/fronttemp-service/fronttemp');
    if (!res.ok) {
        throw new Error('Ошибка: не удалось загрузить информацию')
    }

    const json: FetchMatchesResponse = await res.json();
    return json.data.matches;
}