import { YouTube } from "@mui/icons-material";
import { Button, Chip } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { img_500, unavailable } from "../../config/config";
import Carousel from "../Carousel/Carousel";
import "./DetailContent.css";
const DetailContent = () => {
  const location = useLocation();
  const { id, mediaType } = location.state;

  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {content && (
        <>
          <div className="DetailContent">
            <div className="contentSocialMedia">
              <img
                src={
                  content.poster_path
                    ? `${img_500}/${content.poster_path}`
                    : unavailable
                }
                alt="content.name || content.title"
                className="content_portrait"
              />
              <Button
                variant="primary"
                startIcon={<YouTube />}
                target="_blank"
                href={`https://www.youtube.com/watch?v=${video}`}
              >
                <span> Play Trailer</span>
              </Button>
            </div>

            <div className="Content_About">
              <div className="Content_wrapper">
                <h1 className="content_title">
                  {content.name || content.title} (
                  {(
                    content.first_air_date ||
                    content.release_date ||
                    "....."
                  ).substring(0, 4)}
                  )
                </h1>
                <div className="chip_main">
                  {content.genres.map((g) => (
                    <Chip
                      sx={{ marginRight: "15px", marginBottom: "5px" }}
                      label={g.name}
                      variant="outlined"
                    />
                  ))}
                </div>
                <div className="tagline">
                  {content.tagline && (
                    <i>
                      <span> {content.tagline}</span>
                    </i>
                  )}
                </div>

                <section className="content_overview">
                  <span>{content.overview}</span>
                </section>
                <section className="content_rate">
                  <span className="vote_rate">
                    {content.vote_average.toFixed(1)}
                  </span>
                  <span> / 10</span>
                </section>
              </div>
            </div>
          </div>
          <Container>
            <Carousel mediaType={mediaType} id={id} />
          </Container>
        </>
      )}
    </>
  );
};

export default DetailContent;
