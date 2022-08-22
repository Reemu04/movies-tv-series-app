import { Tab, Tabs, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCOntent from "../../components/SingleContent/SingleCOntent";
import CustomPagination from "../../components/Pagination/CustomPagination";
const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [noOfPages, setNoOfPages] = useState();

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    console.log(data);
    setContent(data.results);
    setNoOfPages(data.total_pages);
  };

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
    console.log("hi", e.target.value.trim().length);
    if (e.target.value.trim().length === 0) {
      fetchSearch();
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page, searchText]);
  return (
    <>
      <div style={{ display: "flex", margin: "15px 0" }}>
        <TextField
          style={{ flex: 1 }}
          className="searchbox"
          label="Search"
          variant="filled"
          onChange={(e) => onChangeSearch(e)}
        />
        {/* <Button
          sx={{
            background: "white",
          }}
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={fetchSearch}
        >
          <SearchIcon />{" "}
        </Button> */}
      </div>
      <Tabs
        centered={true}
        scrollButtons={false}
        value={type}
        indicatorColor="primary"
        textColor="primary"
        onChange={(e, newValue) => {
          setType(newValue);
          setPage(1);
        }}
      >
        <Tab style={{ width: "50%" }} label="Search Movies" />
        <Tab style={{ width: "50%" }} label="Search TV Series" />
      </Tabs>
      <div className="trending">
        {console.log("hi", content)}
        {searchText.length > 0 &&
          content &&
          content.map((c) => (
            <SingleCOntent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              mediaType={type ? "tv" : "movie"}
              voteAvg={c.vote_average}
            />
          ))}
        {!content.length > 0 && type === 1 ? (
          <h2>No Series Found</h2>
        ) : (
          "" ||
          (searchText.length === 0 &&
            (type === 1 ? <h2>No Series Found</h2> : ""))
        )}
        {!content.length > 0 && type === 0 ? (
          <h2>No Movies Found</h2>
        ) : (
          "" ||
          (searchText.length === 0 &&
            (type === 0 ? <h2>No Movies Found</h2> : ""))
        )}
      </div>
      {searchText.length > 0 && noOfPages > 1 && (
        <CustomPagination setPage={setPage} noOfPages={noOfPages} />
      )}
    </>
  );
};

export default Search;
