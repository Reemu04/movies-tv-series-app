import { SnackbarContent } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Genres from "../../components/Genres";
import Loader from "../../components/Loader";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleCOntent from "../../components/SingleContent/SingleCOntent";
import useGenres from "../../Hooks/useGenre";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [noOfPages, setNoOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const genreforUrl = useGenres(selectedGenres);
  const [isLoading, setIsLoading] = useState(true);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforUrl}`
    );

    setContent(data.results);
    setNoOfPages(data.total_pages);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforUrl]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <span className="pageTitle">Movies</span>
          <Genres
            type="movie"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
          />

          <div className="trending">
            {content.length === 0 && (
              <span className="message">
                <SnackbarContent message={"No Data Found !!"} />
              </span>
            )}
            {content &&
              content.map((c) => (
                <SingleCOntent
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  mediaType="movie"
                  voteAvg={c.vote_average}
                />
              ))}
          </div>
          {noOfPages > 1 && (
            <CustomPagination setPage={setPage} noOfPages={noOfPages} />
          )}
        </div>
      )}
    </>
  );
};

export default Movies;
