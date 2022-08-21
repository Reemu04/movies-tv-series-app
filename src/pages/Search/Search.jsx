import { Button, Tab, Tabs, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const setSearchText = () => {};

  return (
    <>
      <div style={{ display: "flex", margin: "15px 0" }}>
        <TextField
          style={{ flex: 1 }}
          className="searchbox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          sx={{
            background: "white",
          }}
          variant="contained"
          style={{ marginLeft: 10 }}
        >
          <SearchIcon />{" "}
        </Button>
      </div>
      <Tabs
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
    </>
  );
};

export default Search;
