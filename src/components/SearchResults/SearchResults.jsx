import Song from '../Song/Song.jsx';
import './styles.css';

function SearchResults({ songs, library, onAddSong }) {
  const addedIds = new Set(library.map((song) => song.id));

  return (
    <section className="search-results" aria-labelledby="search-results-title">
      <h2 id="search-results-title">Resultados de búsqueda</h2>

      <div className="search-results__list">
        {songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            onAdd={() => onAddSong(song)}
            isAdded={addedIds.has(song.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default SearchResults;
