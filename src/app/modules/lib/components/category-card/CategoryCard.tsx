"use client";
import React from "react";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CardProps> = ({ imageUrl, title }) => {
  const handleCategoryClick = () => {
    localStorage.setItem("cat", title);
  };

  return (
    <Link href="/products" onClick={handleCategoryClick} className="group block">
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ aspectRatio: "3/4", backgroundColor: "#e5e7eb" }}
      >
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Persistent gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(13,31,21,0.75) 0%, rgba(13,31,21,0.2) 45%, transparent 70%)",
            opacity: 0.9,
          }}
        />

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ backgroundColor: "rgba(25,89,54,0.2)" }}
        />

        {/* Content */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <h3
            className="font-semibold text-white leading-snug transition-transform duration-300 group-hover:-translate-y-1"
            style={{ fontSize: "0.9375rem" }}
          >
            {title}
          </h3>
          <div
            className="flex items-center gap-1.5 font-medium text-white/70 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
            style={{ fontSize: "0.75rem", marginTop: "4px" }}
          >
            Browse category
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.25"
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

export default CategoryCard;
