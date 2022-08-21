import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav";

function App() {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={}/> */}
        <Header />
        <div className="app"></div>
        <MainNav />
      </Routes>
    </>
  );
}

export default App;
