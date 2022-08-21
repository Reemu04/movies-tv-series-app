import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import React from "react";
import "./CustomPagination.css";
import { black } from "@mui/material/colors/";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
const CustomPagination = ({ setPage, noOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="pagination">
      <ThemeProvider theme={theme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={noOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
