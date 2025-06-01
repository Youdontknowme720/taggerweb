import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Willkommen!</h1>
            <Link to="/tagger">Zur MP3-Tagging-Seite</Link>
        </div>
    );
};
export default App;