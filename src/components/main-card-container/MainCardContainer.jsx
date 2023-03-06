import "./mainCardContainer.scss";
import { ImAndroid } from "react-icons/im";
import { BiCameraMovie } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import SmallCard from "../small-card/SmallCard";
import FilmRobotu from "../film-robotu/FilmRobotu";

const MainCardContainer = () => {
  const API_KEY = "0a06593e3ed888b80a4b7c4da86b6bb9";
  const BASE_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  // const url = `${process.env.API_URL}=${process.env.API_KEY}`
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    try {
      // const { data } = await axios(BASE_URL);
      const { data } = await axios(BASE_URL);
      setMovies(data.results);
    } catch (error) {
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="main-card-container">
      <div className="mobil">
        <p>
          Değerli <span className="color">HD|Film</span> Cenneti Ailesi,
          <span className="color">Mobil Uygulamamız kullanıma hazırdır.</span>
          <a href="#" className="android">
            Buradan İndir <ImAndroid className="icon" />
          </a>
        </p>
      </div>
      <section className="pt-1 pb-1">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Editörün Seçimi </h3>
            </div>
            <div className="col-6 text-center d-flex gap-2 justify-content-end">
              <a
                className="btn btn-primary mb-2 mr-1"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left" />
              </a>
              <a
                className="btn btn-primary mb-2 "
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right" />
              </a>
            </div>
            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      {console.log(movies.length)}
                      {movies.slice(0, 6).map((item, i) => {
                        return <Card key={i} item={item} />;
                      })}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      {console.log(movies.length)}
                      {movies.slice(6, 12).map((item, i) => {
                        return <Card key={i} item={item} />;
                      })}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      {console.log(movies.length)}
                      {movies.slice(12, 18).map((item, i) => {
                        return <Card key={i} item={item} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="main-content">
        <div className="main-content_left">
          <h4>Yeni Filmler</h4>
          
        </div>
        <div className="main-content_right">
          <h4>
            <span>
              <BiCameraMovie />
            </span>
            Trend Filmler
          </h4>
          {movies.slice(16,20).map((item,i)=>{
            return <SmallCard key={i} item={item}/>

          })}
          <FilmRobotu/>
         
          
          
        </div>
      </div>
    </div>
  );
};

export default MainCardContainer;
