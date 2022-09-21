import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ListItem({item}) {
    const [movie, setMovie] = useState({})
    const [isHovered, setHovered] = useState(false);
    useEffect(() => {
        const getMovie = async() => {
            try {
                const res = await axios.get(`http://localhost:5000/api/movie/find/${item}`, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIzOTE4MTcxNjA3YThiMGY1YjAwZmEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjM1MjY0NTUsImV4cCI6MTY2Mzk1ODQ1NX0.kf3APObdUIC19Knurs2uJwECqp-I3yq3nXk-WoLhiyg"
                      }
                });
                setMovie(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getMovie()
        
    },[item])
  return (
    <>
 <Link to={{pathname: '/watch', movie: movie}}>
          <div className="grid-item" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
           
                <img
                src={movie.img}
                alt="thumbnail"
                />
            {isHovered && (
                <>
            <video src={movie.trailer} autoPlay={true} loop />
             
            <div className="item-info">
                <div className="item-icons">
                <i className="bi bi-play-fill"></i>
                <i className="bi bi-plus"></i>
                <i className="bi bi-hand-thumbs-up-fill"></i>
                <i className="bi bi-hand-thumbs-down-fill"></i>
                </div>
                <div className="item-desc">
                    <span>{movie.title} - 1 hr 30 min</span>
                    <span className="limit">{movie.limit}</span>
                    <span> {movie.year} </span>
                    <p>{movie.desc}</p>
                    <span> {movie.genre}</span>
                </div>
            </div>
            </>
            )}
          </div>
        </Link>
    </>
  )
}
