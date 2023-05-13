import { useContext, useState } from "react";
import {AiFillHeart} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/Toastify";

const IMG_API = "https://image.tmdb.org/t/p/w500";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ id, title, poster_path, vote_average }) => {
  const [like, setLike] = useState(true)
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)

  const handleLike =()=>{
    setLike(!like)
  }
  return (

      <div className="movie-card"onClick={()=> {navigate("/details/" +id)
      !currentUser && toastWarnNotify("Please log in to see detail")}}>
       <div className="card-content">
        <img
          src={poster_path ? IMG_API + poster_path : defaultImage}
          alt="movie card"
          loading="lazy"
        />
        <span className="like-icon" onClick={handleLike}>
          {like ? <AiFillHeart /> : <AiFillHeart className="liked" />}
        </span>
      </div>
        <div className="card-buttom">
          <h5>{title}</h5>
          <h5 className="vote">{vote_average}</h5>
        </div>
      </div>

  );
};

export default MovieCard;
