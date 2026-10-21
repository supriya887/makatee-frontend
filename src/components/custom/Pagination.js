import clsx from "clsx";
import React from "react";

export default function Pagination({ page, per_page, total_pages, onChange }) {
  if (!total_pages || total_pages <= 1) return null;

 const getPageNumbers = () => {
  const totalPages = parseInt(total_pages, 10);
  return Array.from({ length: totalPages }, (_, i) => i + 1);
};

  return (
    <div className="pro-pagination-style text-center mt-25">
      <ul>
        {page <= 1 ? null : (
          <li className="page-item">
            <a
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                onChange(parseInt(page) - 1);
              }}
            >
              PREV
            </a>
          </li>
        )}

        {getPageNumbers().map((num, index) => (
          <li
            key={index}
            className={clsx(num === parseInt(page) && "active", "page-item")}
          >
            <a
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                if (num !== "...") onChange(num);
              }}
            >
              {num}
            </a>
          </li>
        ))}

        {page < total_pages ? (
          <li className="page-item">
            <a
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                onChange(parseInt(page) + 1);
              }}
            >
              NEXT
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
