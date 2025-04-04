import styles from './MatchesList.module.css';
import { MatchCard } from '../MatchCard/MatchCard';
import { Match } from '../../types/api-types';
import Loader from '../ui/Loader/Loader';

interface MatchesListProps {
    matches: Match[];
    loading: boolean;
    error: string;
    filter: string;
}

export const MatchesList: React.FC<MatchesListProps> = ({ matches, loading, filter }) => {

    const filteredMatches = filter === 'All'
    ? matches
    : matches.filter((m) => m.status === filter);

    if (loading) return <Loader/>
    
    return (
        <div className={styles.list}>
            {(
                !!filteredMatches.length &&
                filteredMatches.map((match) => {
                    return <MatchCard match={match} key={match.title} />;
                })
            )}
        </div>
    );
};
