import "./header.scss";
import { BiCameraMovie } from "react-icons/bi";
import {  NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-fixed">
      <div className="middle">
        <div className="nav-left">
          <h1>
            <NavLink to="/" >
              <span className="logo">
                <BiCameraMovie />
              </span>
              <span> HD|Film </span><span>Cenneti</span> 
            </NavLink>
          </h1>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <NavLink to="/" style={({ isActive }) => ({
            backgroundColor: isActive ? "#326884" : "",
          })}>Film İzle</NavLink>
            </li>
            <li>
              <NavLink to="/en-iyiler" style={({ isActive }) => ({
            backgroundColor: isActive ? "#326884" : "",
          })}>En İyiler</NavLink>
            </li>
            <li >
              <NavLink className="lists" to="/listeler" style={({ isActive }) => ({
            backgroundColor: isActive ? "#326884" : "",
          })}>Listeler<span className="absolute">Yeni</span></NavLink>
            </li>
            <li>
              <NavLink to="/seriler" style={({ isActive }) => ({
            backgroundColor: isActive ? "#326884" : "",
          })}>Seriler</NavLink>
            </li>
            <li>
              <NavLink to="/turler" style={({ isActive }) => ({
            backgroundColor: isActive ? "#326884" : "",
          })}>Türler</NavLink>
            </li>
            <li>
              <NavLink to="/tercihler" style={({ isActive }) => ({
            backgroundColor: isActive ? "#326884" : "",
          })}>Tercihler</NavLink>
            </li>
            <li>
              <NavLink to="/iletişim" style={({ isActive }) => ({
            backgroundColor: isActive ? "#326884" : "",
          })}>İletişim</NavLink>
            </li>
            <li>
              <NavLink onClick={()=> alert("Üyelik şimdilik aktif değildir!")} className="last" href="#">Giriş</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
