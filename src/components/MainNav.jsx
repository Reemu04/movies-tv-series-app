import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import { Movie, Search, Tv, Whatshot } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
const MainNav = () => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "rgba(18, 18, 18, 1)",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        LinkComponent={Link}
        to="/"
        style={{
          color: value !== 0 ? "white" : "",
        }}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        LinkComponent={Link}
        to="/movies"
        style={{
          color: value !== 1 ? "white" : "",
        }}
        label="Movies"
        icon={<Movie />}
      />

      <BottomNavigationAction
        LinkComponent={Link}
        to="/series"
        style={{
          color: value !== 2 ? "white" : "",
        }}
        label="Tv Series"
        icon={<Tv />}
      />
      <BottomNavigationAction
        LinkComponent={Link}
        to="/search"
        style={{
          color: value !== 3 ? "white" : "",
        }}
        label="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
};

export default MainNav;
