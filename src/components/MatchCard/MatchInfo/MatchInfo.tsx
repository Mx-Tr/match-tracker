import styles from './MatchInfo.module.css';
import placeholder_userAvatar from '@assets/avatar_global.png';
import { Team } from '../../../types/api-types';

interface MatchInfoProps {
    teams: Team[];
    homeTeam: Team;
    awayTeam: Team;
}

export const MatchInfo: React.FC<MatchInfoProps> = ({ homeTeam, awayTeam, teams }) => {
    return (
        <div className={styles.card_additionalInfo}>
            {teams.map(({players, points, place, total_kills, name}) => {
                return (
                    <div className={styles.commandInfo} key={name}>
                        <li className={styles.userList}>
                            {players.map(({ username, kills }) => {
                                return (
                                    <ul className={styles.user} key={username}>
                                        <div className={styles.user_main}>
                                            <img
                                                src={placeholder_userAvatar}
                                                alt="avatar"
                                                className={styles.user_avatar}
                                            />
                                            <strong className={styles.user_nickname}>
                                                {username}
                                            </strong>
                                        </div>
                                        <div className={styles.user_scoreBlock}>
                                            <span className={styles.user_score}>Убийств:</span>
                                            <strong>{kills}</strong>
                                        </div>
                                    </ul>
                                );
                            })}
                        </li>
                        <div className={styles.commandStats}>
                            <span className={styles.commandStats_score}>
                                Points:<strong>+{points}</strong>
                            </span>
                            <span className={styles.commandStats_score}>
                                Место:<strong>{place}</strong>
                            </span>
                            <span className={styles.commandStats_score}>
                                Всего убийств:<strong>{total_kills}</strong>
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
