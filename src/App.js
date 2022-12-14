import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailContent from "./components/DetailContent/DetailContent";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
const theme = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#fff",
    // },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route exact path="/" element={<Trending />} />
              <Route exact path="/movies" element={<Movies />} />
              <Route exact path="/series" element={<Series />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/detailcontent" element={<DetailContent />} />
            </Routes>
          </Container>
        </div>
        <MainNav />
      </ThemeProvider>
    </>
  );
}

export default App;
