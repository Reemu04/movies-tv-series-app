import { Badge } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

const SingleCOntent = ({ id, poster, title, date, mediaType, voteAvg }) => {
  const vote = voteAvg.toFixed(1);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detailcontent", { state: { id, mediaType } });
    window.scroll(0, 0);
  };

  return (
    <div className="media" onClick={handleClick}>
      <Badge
        badgeContent={vote}
        color={voteAvg > 6 ? "primary" : "secondary"}
      />
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
