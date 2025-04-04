import styles from './Header.module.css';
import matchTracker_logo from '@assets/match_tracker.svg';
import { ErrorNotification } from '../ui/ErrorNotification/ErrorNotification';
import UpdateButton from '../ui/UpdateButton/UpdateButton';
import Dropdown from '../ui/Dropdown/Dropdown';
import { statusOptions } from '../../consts';
import { FilterStatus } from '../../types/extendedTypes';

interface HeaderProps {
    loadMatches: () => void;
    error: string;
    selectedStatus: FilterStatus;
    onStatusChange: (newStatus: FilterStatus) => void;
}

export const Header: React.FC<HeaderProps> = ({
    loadMatches,
    error,
    selectedStatus,
    onStatusChange,
}) => {
    const selectedOption =
        statusOptions.find((opt) => opt.value === selectedStatus) || statusOptions[0];

    const handleChange = (option: { label: string; value: FilterStatus }) => {
        onStatusChange(option.value);
    };

    return (
        <header className={styles.container}>
            <img src={matchTracker_logo} alt="MatchTracker" className={styles.logo} />
            <Dropdown options={statusOptions} selected={selectedOption} onChange={handleChange} />

            <div className={styles.updatingBlock}>
                {error && <ErrorNotification message={error} />}

                <UpdateButton className={styles.refreshButton} onClick={loadMatches}>
                    Обновить
                </UpdateButton>
            </div>
        </header>
    );
};
