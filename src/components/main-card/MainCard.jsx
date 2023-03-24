import "./mainCard.scss";
const MainCard = ({ item }) => {
  const {
    poster_path,
    name,
    first_air_date,
    vote_average,
    title,
    release_date,
  } = item;
  const getposterURL = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`;
  };
  return (
    <div className="mb-3 col-sm-4 col-md-3 col-lg-3 ">
      <div className="card text-bg-dark main-card">
        <img src={getposterURL(poster_path)} className="card-img " alt={name} />
        <p className="text-warning fw-bold average">
          {vote_average ? vote_average.toFixed(1) : "7.5"}
        </p>
        <p className="title">{name ? name : title}</p>
        <p className="date text-warning">
          {first_air_date
            ? first_air_date.slice(0, 4)
            : release_date.slice(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default MainCard;
