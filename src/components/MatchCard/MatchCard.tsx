import React from 'react'
import { Match } from '../../types/api-types'
import { StatusScreen } from '../ui/StatusScreen/StatusScreen';

interface MatchCardProps {
    match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({match}) => {
  return (
            <div key={match.title}>
              <div>
                <img src="" alt="" />
                <p>{match.homeTeam.name}</p>s
                <div>
                  <h3>
                    {match.homeScore} : {match.awayScore}
                  </h3>
                  <StatusScreen status={match.status} />
                </div>
                <img src="" alt="" />
                <p>{match.awayTeam.name}</p>
              </div>
            </div>
  )
}
