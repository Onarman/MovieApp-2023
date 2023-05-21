import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GetMovies } from '../context/GetMoviesContext';
import MovieCard from './MovieCard';
import SliderCard from './SliderCard';

const MovieSlider = () => {
  const { movies } = useContext(GetMovies);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="movie-slider">
      <Slider {...settings}>
        {movies.slice(0, 8).map((movie) => (
          <SliderCard key={movie.id} {...movie} />
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return <button className={className} onClick={onClick}></button>;
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return <button className={className} onClick={onClick}></button>;
};

export default MovieSlider;