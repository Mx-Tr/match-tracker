import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MatchesList } from './components/MatchesList/MatchesList';
import useLoadMatches from './hooks/useLoadMatches';
import { FilterStatus } from './types/extendedTypes';
import { useWebSocketMatches } from './hooks/useWebSocketMatches';

function App() {
    const [selectedStatus, setSelectedStatus] = useState<FilterStatus>(
        'All',
    );

    const { matches, loading, error, loadMatches } = useLoadMatches();
    // const { loading, loadMatches } = useLoadMatches();
    const handleStatusChange = (newStatus: FilterStatus) => {
        setSelectedStatus(newStatus);
    };

    // const { matches, error } = useWebSocketMatches();

    return (
        <div className="container">
            <Header
                loadMatches={loadMatches}
                error={error}
                selectedStatus={selectedStatus}
                onStatusChange={handleStatusChange}
            />

            <MatchesList matches={matches} loading={loading} error={error} filter={selectedStatus}/>
        </div>
    );
}

export default App;
