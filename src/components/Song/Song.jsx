import './styles.css';

function Song({ title, artist, album, duration, onAdd, isAdded = false }) {
  return (
    <article className="song">
      <h3 className="song__title">{title}</h3>
      <p>Artista: {artist}</p>
      <p>Álbum: {album}</p>
      <p>Duración: {duration}</p>

      {onAdd && (
        <button
          type="button"
          className="song__button"
          onClick={onAdd}
          disabled={isAdded}
        >
          {isAdded ? 'En tu biblioteca' : 'Agregar a mi biblioteca'}
        </button>
      )}
    </article>
  );
}

export default Song;