import "./header.scss";
import { BiCameraMovie } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-fixed navbar navbar-expand-md bg-body-tertiary">
      <div className="middle container-fluid">
        <div className="nav-left">
          <h1>
            <NavLink to="/">
              <span className="logo">
                <BiCameraMovie />
              </span>
              <span> HD|Film </span>
              <span>Cenneti</span>
            </NavLink>
          </h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="nav-right collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <NavLink
                className="nav-item"
                to="/"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#326884" : "",
                })}
              >
                Film İzle
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to="/en-iyiler"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#326884" : "",
                })}
              >
                En İyiler
              </NavLink>
            </li>
            <li>
              <NavLink
                className="lists nav-item"
                to="/listeler"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#326884" : "",
                })}
              >
                Listeler<span className="absolute">Yeni</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to="/seriler"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#326884" : "",
                })}
              >
                Seriler
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to="/turler"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#326884" : "",
                })}
              >
                Türler
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to="/tercihler"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#326884" : "",
                })}
              >
                Tercihler
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to="/iletişim"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#326884" : "",
                })}
              >
                İletişim
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => alert("Üyelik şimdilik aktif değildir!")}
                className="last nav-item"
                href="#"
              >
                Giriş
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
