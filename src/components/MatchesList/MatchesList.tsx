import styles from './MatchesList.module.css';
import { MatchCard } from '../MatchCard/MatchCard';
import { Match } from '../../types/api-types';
import Loader from '../ui/Loader/Loader';

interface MatchesListProps {
    matches: Match[];
    loading: boolean;
    error: string;
}

export const MatchesList: React.FC<MatchesListProps> = ({ matches, loading }) => {
    return (
        <div className={styles.list}>
            {loading ? (
                <Loader />
            ) : (
                !!matches.length &&
                matches.map((match) => {
                    return <MatchCard match={match} key={match.title} />;
                })
            )}
        </div>
    );
};
