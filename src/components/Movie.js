import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const IMG_DEFAULT =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80} alt={title}";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

export default function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img
        src={poster_path ? IMG_API + poster_path : IMG_DEFAULT}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={setVoteClass(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}
