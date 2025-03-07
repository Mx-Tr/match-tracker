import React from 'react';
import styles from './MatchCard.module.css';
import placeholder_logo from '../../assets/illustrations_role.svg';
import { Match } from '../../types/api-types';

interface MatchCardProps {
    match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
    const statusColor =
        match.status === 'Ongoing' ? '#43AD28' : match.status === 'Finished' ? '#EB0237' : '#EB6402';
    const statusText = match.status === 'Ongoing' ? 'Live' : match.status === 'Finished' ? 'Finished' : 'Match preparing';

    return (
        <div key={match.title} className={styles.card}>
            <div className={styles.card_edge}>
                <img src={placeholder_logo} alt="logo" className={styles.teamAvatar} />
                <p>{match.homeTeam.name}</p>
            </div>
            <div className={styles.card_center}>
                <h3>
                    {match.homeScore} : {match.awayScore}
                </h3>
                <div style={{ backgroundColor: statusColor }} className={styles.statusScreen}>
                    {statusText}
                </div>
            </div>
            <div className={styles.card_edge}>
                <p>{match.awayTeam.name}</p>
                <img src={placeholder_logo} alt="logo" className={styles.teamAvatar} />
            </div>
        </div>
    );
};
