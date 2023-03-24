import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import "./yillar.scss";

const Yillar = () => {
  return (
    <div className="yillar">
      <h4>
        <span>
          <BiCameraMovie />
        </span>
        Yıllar
      </h4>
      <ul className="px-lg-10">
        <Link to="#">2023</Link>
        <Link to="#">2022</Link>
        <Link to="#">2021</Link>
        <Link to="#">2020</Link>
        <Link to="#">2019</Link>
        <Link to="#">2018</Link>
        <Link to="#">2017</Link>
        <Link to="#">2016</Link>
        <Link to="#">2015</Link>
        <Link to="#">2014</Link>
        <Link to="#">2013</Link>
        <Link to="#">2012</Link>
        <Link to="#">2011</Link>
        <Link to="#">2010</Link>
        <Link to="#">2009</Link>
        <Link to="#">2008</Link>
        <Link to="#">2007</Link>
        <Link to="#">2006</Link>
        <Link to="#">2005</Link>
        <Link to="#">2004</Link>
      </ul>
    </div>
  );
};

export default Yillar;
