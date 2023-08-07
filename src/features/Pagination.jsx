import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Change this value to control the number of pagination numbers displayed
  const maxPageNumbers = 5;

  const handleClick = (pageNum) => {
    onPageChange(pageNum);
  };

  const getPageNumbers = () => {
    const halfMaxPages = Math.floor(maxPageNumbers / 2);
    const startPage = Math.max(currentPage - halfMaxPages, 1);
    const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

    let pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );

    // If the last page is less than maxPageNumbers, adjust the starting page
    if (pageNumbers.length < maxPageNumbers) {
      const diff = maxPageNumbers - pageNumbers.length;
      const newStartPage = Math.max(startPage - diff, 1);
      pageNumbers = Array.from(
        { length: maxPageNumbers },
        (_, index) => newStartPage + index
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-6">
      {getPageNumbers().map((pageNum) => (
        <button
          key={pageNum}
          className={`mx-2 py-2 px-4 rounded-full ${
            pageNum === currentPage
              ? "bg-blue-700 text-white"
              : " text-blue-500"
          }`}
          onClick={() => handleClick(pageNum)}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
