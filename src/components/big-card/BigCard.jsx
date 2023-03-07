import "./bigCard.scss"
const BigCard = ({ item }) => {
  const {
    poster_path,
    name,
    first_air_date,
    vote_average,
    title,
    release_date,
  } = item;
  const getposterURL = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`;
  };
  return (
    <div className="col-md-3 mb-3 big-card">
      <div className=" card text-bg-dark">
        <img src={getposterURL(poster_path)} className="card-img" alt={name} />
        <div className="card-img-overlay">
          <h5 className="card-title">{name}</h5>
          
          
        </div>
      </div>
    </div>
  );
};

export default BigCard;
