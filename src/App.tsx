import './App.css';
import { Header } from './components/Header/Header';
import { MatchesList } from './components/MatchesList/MatchesList';
import useLoadMatches from './hooks/useLoadMatches';

function App() {
    const { matches, loading, error, loadMatches } = useLoadMatches();

    return (
        <div className="container">
            <Header loadMatches={loadMatches} error={error} />

            <MatchesList matches={matches} loading={loading} error={error} />
        </div>
    );
}

export default App;
