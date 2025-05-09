import React, { useState } from 'react';
import styles from './MatchCard.module.css';
import placeholder_logo from '@assets/illustrations_role.svg';
import arrow_matchCard from '@assets/arrow_matchCard.svg';
import { Match } from '../../types/api-types';
import { MatchInfo } from './MatchInfo/MatchInfo';

interface MatchCardProps {
    match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const statusColor =
        match.status === 'Ongoing'
            ? '#43AD28'
            : match.status === 'Finished'
              ? '#EB0237'
              : '#EB6402';
    const statusText =
        match.status === 'Ongoing'
            ? 'Live'
            : match.status === 'Finished'
              ? 'Finished'
              : 'Match preparing';

    return (
        <div key={match.title} className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}>
            <div className={styles.card_top}>
                <div className={styles.card_mainInfo}>
                    <div className={styles.card_edge}>
                        <img src={placeholder_logo} alt="logo" className={styles.teamAvatar} />
                        <p>{match.homeTeam.name}</p>
                    </div>
                    <div className={styles.card_center}>
                        <h3>
                            {match.homeScore} : {match.awayScore}
                        </h3>
                        <div
                            style={{ backgroundColor: statusColor }}
                            className={styles.statusScreen}
                        >
                            {statusText}
                        </div>
                    </div>
                    <div className={styles.card_edge}>
                        <p>{match.awayTeam.name}</p>
                        <img src={placeholder_logo} alt="logo" className={styles.teamAvatar} />
                    </div>
                </div>

                <button className={`${styles.openButton} ${isExpanded ? styles.open : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
                    <img src={arrow_matchCard} alt="O" className={styles.arrow}/>
                </button>
            </div>

            <div className={`${styles.card_bottom} ${isExpanded ? styles.show : ''}`}>
                <MatchInfo teams={[match.homeTeam, match.awayTeam]}/>
            </div>
        </div>
    );
};
