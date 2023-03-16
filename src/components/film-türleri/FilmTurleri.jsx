import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./filmTurleri.scss";

const FilmTurleri = () => {
  return (
    <div className="film-turleri">
      <h4>
        <span>
          <BiCameraMovie />
        </span>
        Film Türleri
      </h4>
      <ul>
        <Link to="#">Aile Filmleri</Link>
        <Link to="#">Animasyon Filmleri </Link>
        <Link to="#">Bilim Kurgu Filmleri</Link>
        <Link to="#">Çizgi Filmler </Link>
        <Link to="#">Aksiyon Filmleri </Link>
        <Link to="#">Belgeseller</Link>
        <Link to="#">Blu Ray Filmler </Link>
        <Link to="#">Dram Filmleri</Link>
        <Link to="#">Fantastik Filmler</Link>
        <Link to="#">Gerilim Filmleri</Link>
        <Link to="#">Gizem Filmleri </Link>
        <Link to="#">Hint Filmleri</Link>
        <Link to="#">Komedi Filmleri</Link>
        <Link to="#">Korku Filmleri </Link>
        <Link to="#">Macera Filmleri </Link>
        <Link to="#">Polisiye Filmleri</Link>
        <Link to="#">Müzikal Filmler </Link>
        <Link to="#">Psikolojik Filmler</Link>
        <Link to="#">Romantik Filmler </Link>
        <Link to="#">Savaş Filmleri </Link>
        {/* <Link to="#">Suç Filmleri</Link>
        <Link to="#">Tarih Filmleri</Link>
        <Link to="#">Western Filmler</Link>
        <Link to="#">Yerli Filmler</Link> */}
      </ul>
    </div>
  );
};

export default FilmTurleri;
