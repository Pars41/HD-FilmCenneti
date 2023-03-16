import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="middle">
        <ul className="type">
          <Link>Türkçe Dublaj</Link>
          <Link>Türkçe Altyazılı</Link>
          <Link>DUAL</Link>
          <Link>4K</Link>
          <Link>1080p</Link>
          <Link>IMDB</Link>
        </ul>
        <div className="search-bar">
          <input placeholder="Film Adı veya IMDB Linki Girin" type="text" />
          <span><BsSearch /></span>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
