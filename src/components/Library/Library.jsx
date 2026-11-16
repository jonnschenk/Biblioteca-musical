import Song from '../Song/Song.jsx';
import './styles.css';

function Library({ songs }) {
  return (
    <section className="library" aria-labelledby="library-title">
      <h2 id="library-title">Mi biblioteca ({songs.length})</h2>

      {songs.length === 0 ? (
        <p className="library__empty">
          Tu biblioteca está vacía. Agrega canciones desde los resultados de búsqueda.
        </p>
      ) : (
        <div className="library__list">
          {songs.map((song) => (
            <Song
              key={song.id}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Library;
