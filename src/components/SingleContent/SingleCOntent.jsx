import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

const SingleCOntent = ({ id, poster, title, date, mediaType, voteAvg }) => {
  return (
    <div className="media">
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt="title"
      />
      <b className="main-title">{title}</b>
      <span className="subTitle">
        {mediaType === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleCOntent;
