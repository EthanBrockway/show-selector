export default function Card({ tvShow, onBtnClick }) {
  return (
    <div className="card-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${tvShow.imageSrc}`}
        alt="whatever"
      />
      <h2>{tvShow.name}</h2>
      <p>{tvShow.description}</p>

      <button className="btn-save" onClick={() => onBtnClick(tvShow.showId)}>
        Add to WatchList
      </button>
    </div>
  );
}
