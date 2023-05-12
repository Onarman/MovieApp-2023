import axios from "axios";
import { useEffect, useState } from "react";
// import { GetMovies } from '../context/GetMoviesContext'
import { Link, useParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [videoKey, setVideoKey] = useState();

  const {id} = useParams();
  const { title, overview, release_date, vote_count,vote_average, poster_path} = movieDetail;

  const api = "b3e44ae813fd28033f407a2a8ac67ae3";
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${api}`;
 
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";

  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetail(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);

  return (
    <div className="detail-container">
      <div className="movie-detail">
        <h1>{title}</h1>
        <div className="main-overview">
          <div className="img">
            <img src={poster_path ? baseImageUrl + poster_path : defaultImage} alt="..." />
          </div>
          <div className="right-overview">
            <h3>Overview</h3>
            <p>{overview}</p>
            {videoKey && <VideoSection videoKey={videoKey} />}
            <ul className="list-group">
              <li className="list-group-item">{"Relase Date :  " + release_date}</li>
              <li className="list-group-item">{"Rate : " + vote_average}</li>
              <li className="list-group-item">{"Total Vote : " + vote_count}</li>
              <li className="list-group-item">
                <Link to={-1} className="card-link">
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
