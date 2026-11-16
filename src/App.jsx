import { useEffect, useState } from 'react';
import Header from './components/Header/Header.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Library from './components/Library/Library.jsx';
import { mockSongs } from './data/songs.js';
import './App.css';

function App() {
  const [searchResults] = useState(mockSongs);
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    console.log('¡La aplicación se ha cargado correctamente!');
  }, []);

  useEffect(() => {
    console.log(`Biblioteca actualizada: ${library.length} canción(es)`, library);
  }, [library]);

  const handleAddSong = (song) => {
    setLibrary((prevLibrary) => {
      const alreadyAdded = prevLibrary.some((item) => item.id === song.id);
      return alreadyAdded ? prevLibrary : [...prevLibrary, song];
    });
  };

  return (
    <div className="app">
      <Header title="Biblioteca musical" subtitle="Tu música favorita en un solo lugar" />

      <main className="app__content">
        <SearchResults
          songs={searchResults}
          library={library}
          onAddSong={handleAddSong}
        />
        <Library songs={library} />
      </main>
    </div>
  );
}

export default App;
