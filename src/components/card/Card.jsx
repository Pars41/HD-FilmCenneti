import "./card.scss"
const Card = ({item}) => {
    const {poster_path,name,first_air_date,vote_average,title,release_date} = item;
    console.log(item);
    const getposterURL =(poster_path)=>{
        return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`
      }
  return (
    <div className="col-md-2 mb-3 card-main">
      <div className="card">
        <img
          className="img-fluid rounded"
          alt="100%x280"
          src={getposterURL(poster_path)}
        />
        <p className="text-warning fw-bold average">{vote_average.toFixed(1)}</p>
        <p className="title">{name ? name : title}</p>
        <p className="date text-warning">{first_air_date ? first_air_date.slice(0,4) : release_date.slice(0,4)}</p>
        
      </div>
    </div>
  );
};

export default Card;
