"use client";
import React from "react";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  _id: any;
}

const ProductCard: React.FC<CardProps> = ({ imageUrl, title, description, _id: id }) => {
  const truncate = (text: string, max = 110) =>
    text.length > max ? `${text.slice(0, max)}…` : text;

  return (
    <Link href={`/products/${id}`} className="group block h-full">
      <div
        className="h-full flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out"
        style={{
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow =
            "0 12px 32px rgba(25,89,54,0.12), 0 2px 8px rgba(0,0,0,0.06)";
          el.style.borderColor = "rgba(25,89,54,0.18)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
          el.style.borderColor = "#e5e7eb";
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3
            className="font-semibold mb-2 leading-snug transition-colors duration-200 group-hover:text-green"
            style={{ fontSize: "0.9375rem", color: "#32492F" }}
          >
            {title}
          </h3>
          <p
            className="flex-1 line-clamp-3 leading-relaxed mb-5"
            style={{ fontSize: "0.8125rem", color: "#6b7280" }}
          >
            {truncate(description)}
          </p>
          <div
            className="flex items-center gap-1.5 font-semibold transition-colors duration-200"
            style={{ fontSize: "0.8125rem", color: "#195936" }}
          >
            View Details
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
