import "./filmRobotu.scss";
import { BiCameraMovie } from "react-icons/bi";

const FilmRobotu = () => {
  return (
    <div className="film-robotu col-12">
      <h4>
        <span>
          <BiCameraMovie />
        </span>
        Film Robotu
      </h4>
      <p>Seçeneklerin hepsini seçmenize gerek yoktur!</p>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Film Tarzı
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Türkçe Dublaj
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Türkçe Altyazı
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Yerli Film
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Film Türü
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Aksiyon Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Animasyon Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Aile Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Belgeseller
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Bilim Kurgu Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Blu-ray Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Çizgi Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dram Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Fantastik Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Gerilim Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Gizem Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Hint Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Komedi Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Korku Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Macera Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Müzikal Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Polisiye Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Psikolojik Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Romantik Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Savaş Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Suç Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Tarih Filmleri
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Western Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Yerli Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Yeşilçam Filmler
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              3D Filmler
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Film Yılı
        </button>
        <ul className="dropdown-menu  film-yili">
          <li>
            <ul className="dropdown-item" href="#">
              Yıl Aralığı
              <li>
                <a className="dropdown-item" href="#">
                  2022-2021
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2020-2019
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2015-2013
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2012-2010
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2009-2005
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2004-2000
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1999-1995
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1994-1990
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1989-1980
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1979-1920
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Yıl Giriniz
            </a>
            <input type="number" />
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          IMDB Puanı
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Film Kalitesi
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <button className="btn btn-outline-secondary">Filmleri Getir</button>
        <button className="btn btn-outline-secondary">Sıfırla</button>
      </div>
    </div>
  );
};

export default FilmRobotu;
