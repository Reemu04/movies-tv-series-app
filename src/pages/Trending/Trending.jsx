import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCOntent from "../../components/SingleContent/SingleCOntent";
import "./Trending.css";
const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // const response = await JSON.parse(data);
    console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleCOntent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              mediaType={c.media_type}
              voteAvg={c.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending;
