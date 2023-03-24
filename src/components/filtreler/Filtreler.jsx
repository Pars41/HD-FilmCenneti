import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import "./filtreler.scss";


const Filtreler = () => {
  return (
    <div className="filtreler">
      <h4>
        <span>
          <BiCameraMovie />
        </span>
        Filtreler
      </h4>
      <ul className="filters">
        <Link to="#">Türkçe Dublaj</Link>
        <Link to="#">Türkçe Altyazılı </Link>
        <Link to="#">Yabancı Filmler</Link>
        <Link to="#">Yerli Filmler </Link>
        <Link to="#">1080p Film İzle</Link>
        <Link to="#">4K Filmler</Link>
        <Link to="#">2023 Filmleri</Link>
        <Link to="#">2022 Filmleri</Link>
        <Link to="#">2021 Filmleri</Link>
        <Link to="#">IMDB Puanı</Link>
        
      </ul>
    </div>
  )
}

export default Filtreler