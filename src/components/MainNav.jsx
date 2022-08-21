import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useEffect } from "react";
import { Movie, Search, Tv, Whatshot } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const MainNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else {
      navigate("/search");
    }
  }, [value, navigate]);
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
        style={{
          color: value !== 0 ? "white" : "",
        }}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{
          color: value !== 1 ? "white" : "",
        }}
        label="Movies"
        icon={<Movie />}
      />

      <BottomNavigationAction
        style={{
          color: value !== 2 ? "white" : "",
        }}
        label="Tv Series"
        icon={<Tv />}
      />
      <BottomNavigationAction
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
