"use client";
import React from "react";

interface PaginationProps {
  totalProducts: number;
  limit: any;
  setPage: (num: any) => void;
  page: any;
}

const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  limit,
  page,
  setPage,
}) => {
  const totalPages = Math.ceil(totalProducts / limit);
  const startIndex = limit * (page - 1) + 1;
  const endIndex = Math.min(page * limit, totalProducts);

  if (totalProducts === 0) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
      <p style={{ fontSize: "0.8125rem", color: "#6b7280" }}>
        Showing{" "}
        <span style={{ fontWeight: 600, color: "#32492F" }}>{startIndex}</span>
        {" – "}
        <span style={{ fontWeight: 600, color: "#32492F" }}>{endIndex}</span>
        {" of "}
        <span style={{ fontWeight: 600, color: "#32492F" }}>{totalProducts}</span>
        {" products"}
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          disabled={page <= 1}
          className="flex items-center gap-2 rounded-xl transition-all duration-200 font-medium"
          style={{
            padding: "9px 16px",
            fontSize: "0.8125rem",
            color: page <= 1 ? "#9ca3af" : "#32492F",
            border: `1px solid ${page <= 1 ? "#e5e7eb" : "#d1d5db"}`,
            backgroundColor: "white",
            cursor: page <= 1 ? "not-allowed" : "pointer",
            opacity: page <= 1 ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (page > 1) {
              (e.currentTarget as HTMLElement).style.borderColor = "#195936";
              (e.currentTarget as HTMLElement).style.color = "#195936";
            }
          }}
          onMouseLeave={(e) => {
            if (page > 1) {
              (e.currentTarget as HTMLElement).style.borderColor = "#d1d5db";
              (e.currentTarget as HTMLElement).style.color = "#32492F";
            }
          }}
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 4L6 8l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Prev
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const p =
              totalPages <= 5
                ? i + 1
                : page <= 3
                ? i + 1
                : page >= totalPages - 2
                ? totalPages - 4 + i
                : page - 2 + i;
            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                className="w-9 h-9 rounded-lg text-sm font-medium transition-all duration-150"
                style={{
                  backgroundColor: p === page ? "#195936" : "transparent",
                  color: p === page ? "#ffffff" : "#374151",
                  border: p === page ? "none" : "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (p !== page)
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(25,89,54,0.08)";
                }}
                onMouseLeave={(e) => {
                  if (p !== page)
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                }}
              >
                {p}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => page < totalPages && setPage(page + 1)}
          disabled={page >= totalPages}
          className="flex items-center gap-2 rounded-xl transition-all duration-200 font-medium"
          style={{
            padding: "9px 16px",
            fontSize: "0.8125rem",
            color: page >= totalPages ? "#9ca3af" : "#32492F",
            border: `1px solid ${page >= totalPages ? "#e5e7eb" : "#d1d5db"}`,
            backgroundColor: "white",
            cursor: page >= totalPages ? "not-allowed" : "pointer",
            opacity: page >= totalPages ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (page < totalPages) {
              (e.currentTarget as HTMLElement).style.borderColor = "#195936";
              (e.currentTarget as HTMLElement).style.color = "#195936";
            }
          }}
          onMouseLeave={(e) => {
            if (page < totalPages) {
              (e.currentTarget as HTMLElement).style.borderColor = "#d1d5db";
              (e.currentTarget as HTMLElement).style.color = "#32492F";
            }
          }}
        >
          Next
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
