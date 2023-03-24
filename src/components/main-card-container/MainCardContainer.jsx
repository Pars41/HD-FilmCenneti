import "./mainCardContainer.scss";
import { ImAndroid } from "react-icons/im";
import { BiCameraMovie } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";
import CarouselCard from "../carousel-card/CarouselCard";
import SmallCard from "../small-card/SmallCard";
import FilmRobotu from "../film-robotu/FilmRobotu";
import MainCard from "../main-card/MainCard";
import FilmTurleri from "../film-türleri/FilmTurleri";
import Filtreler from "../filtreler/Filtreler";
import Yillar from "../yıllar/Yillar";
import SonYorumlar from "../son-yorumlar/SonYorumlar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const MainCardContainer = () => {
  const API_KEY = "0a06593e3ed888b80a4b7c4da86b6bb9";
  const BASE_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  // const url = `${process.env.API_URL}=${process.env.API_KEY}`
  const [movies, setMovies] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);
  const getMovie = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setMovies(data.results);
    } catch (error) {}
  };
  const getTrendMovie = async () => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
      setTrendMovies(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getMovie();
    getTrendMovie();
  }, []);

  return (
    <div className="main-card-container">
      <div className="mobil text-center">
        <p>
          Değerli <span className="color">HD|Film</span> Cenneti Ailesi,
          <span className="color"> Mobil Uygulamamız kullanıma hazırdır.</span>
        </p>
        <a href="#" className="android">
          Buradan İndir <ImAndroid className="icon" />
        </a>
      </div>
      <section className="pt-1 pb-1">
        <div className="container-fluid px-auto">
          <div className="row">
            <div>
              <h3 className="mb-3">Editörün Seçimi </h3>
            </div>
            
            <div className="col-12">
              <div className="slider">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={5}
                  navigation
                  breakpoints={{
                    // when window width is >= 340px
                    340: {
                      width: 200,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 4,
                    },
                    // when window width is >= 1040px
                    1040: {
                      width: 1040,
                      slidesPerView: 5,
                    },
                  }}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                >
                  <div className="row">
                    {movies.map((item, i) => {
                      return (
                        <SwiperSlide>
                          <CarouselCard key={i} item={item} />
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* <h4 className="p-4">Yeni Filmler</h4> */}
      <div className="main-content d-flex">
        <div className="main-content_left  col-md-12 col-lg-8 col-xl-8 d-flex justify-content-center flex-wrap gap-5 pt-5">
          {trendMovies.map((item, i) => {
            return <MainCard key={i} item={item} />;
          })}
        </div>
        <div className="main-content_right col-md-12 col-lg-4 col-xl-4">
          <h4>
            <span>
              <BiCameraMovie />
            </span>
            Trend Filmler
          </h4>
          {movies.slice(10, 14).map((item, i) => {
            return <SmallCard key={i} item={item} />;
          })}
          <FilmRobotu />
          <FilmTurleri />
          <Filtreler />
          <Yillar />
          <SonYorumlar />
        </div>
      </div>
    </div>
  );
};

export default MainCardContainer;
