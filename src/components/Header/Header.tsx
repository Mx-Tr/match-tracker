import styles from './Header.module.css';
import matchTracker_logo from '../../assets/match_tracker.svg';
import { ErrorNotification } from '../ui/ErrorNotification/ErrorNotification';
import UpdateButton from '../ui/UpdateButton/UpdateButton';

interface HeaderProps {
    loadMatches: () => void;
    error: string;
}

export const Header: React.FC<HeaderProps> = ({ loadMatches, error }) => {
    return (
        <header className={styles.container}>
            <img src={matchTracker_logo} alt="MatchTracker" className={styles.logo} />

            <div className={styles.updatingBlock}>
                {error && <ErrorNotification message={error} />}

                <UpdateButton className={styles.refreshButton} onClick={loadMatches}>
                    Обновить
                </UpdateButton>
            </div>
        </header>
    );
};
