import { Pagination } from "@mui/material";
import React from "react";
import "./CustomPagination.css";

const CustomPagination = ({ setPage, noOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="pagination">
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={noOfPages}
        color="primary"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
