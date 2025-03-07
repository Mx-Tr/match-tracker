import React, { useEffect, useState } from 'react';
import { Match } from '../../types/api-types';
import { fetchMatches } from '../../api/fetchMatches';
import { MatchCard } from '../MatchCard/MatchCard';

interface MatchesListProps {
  matchesList: Match[];
}

export const MatchesList = ({ }) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadMatches = async () => {
    try {
      setError('');
      setLoading(true);
      const data = await fetchMatches();
      setMatches(data);
    } catch (error: any) {}
  };

  useEffect(() => {
    loadMatches();
  }, []);

  return (
    <div>
      {!!matches.length &&
        matches.map(( match ) => {
          return (
            <MatchCard match={match} key={match.title}/>
          );
        })}
    </div>
  );
};
