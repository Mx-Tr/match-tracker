import { useEffect, useState } from 'react';
import { Match } from '../types/api-types';
import { fetchMatches } from '../api/fetchMatches';

export default function useLoadMatches() {
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const loadMatches = async () => {
        try {
            setError('');
            setLoading(true);
            const data = await fetchMatches();
            setMatches(data);
        } catch (error: any) {
            setError('Ошибка: не удалось загрузить информацию');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMatches();
    }, []);

    return { matches, loading, error, loadMatches };
}
