import "./carouselCard.scss";
const CarouselCard = ({ item }) => {
  const {
    poster_path,
    // name,
    // first_air_date,
    // vote_average,
    // title,
    // release_date,
  } = item;
  const getposterURL = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`;
  };
  return (
    <div className="mb-3 card-main">
      <div className="card">
        <img
          className="img-fluid rounded"
          alt="100%x280"
          src={getposterURL(poster_path)}
        />
        
      </div>
    </div>
  );
};

export default CarouselCard;
