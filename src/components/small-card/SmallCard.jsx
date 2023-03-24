import "./smallCard.scss";
const SmallCard = ({ item }) => {
  console.log(item);
  const { name, title, backdrop_path } = item;
  const getposterURL = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`;
  };
  return (
    <div className="card mb-1 col-12 small-card" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-3  d-flex justify-content-center align-items-center">
          <img
            src={getposterURL(backdrop_path)}
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-9 text-center text-md-start">
          <div className="card-body">
            <h5 className="card-title">{name ? name : title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
