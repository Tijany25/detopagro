"use client";
import React, { useEffect, useState } from "react";
import YouTubeVideo from "./YoutubeVideo";
import axios from "axios";

const YouTubeSection = () => {
  const [ytItem, setYtItem] = useState([]);

  useEffect(() => {
    axios
      .get("/api/ytlinks")
      .then((r) => setYtItem(r.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-14">
        <div>
          <span
            className="inline-block mb-3 font-semibold uppercase"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "#F29422",
            }}
          >
            In Action
          </span>
          <h2
            className="font-bold text-deep-green leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
          >
            Products Spotlight
          </h2>
        </div>
      </div>

      {ytItem.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            {ytItem.map(({ name, imageUrl }: any) => (
              <div
                key={name}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.12)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.08)")
                }
              >
                <YouTubeVideo videoLink={imageUrl} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 active:scale-95"
              style={{
                padding: "12px 28px",
                fontSize: "0.875rem",
                color: "#195936",
                border: "1px solid #195936",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#195936";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "#195936";
              }}
            >
              View More Videos
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <div
          className="flex flex-col items-center justify-center rounded-2xl"
          style={{
            padding: "64px 24px",
            backgroundColor: "#F5F7F4",
            color: "#9ca3af",
          }}
        >
          <svg
            className="w-10 h-10 mb-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p style={{ fontSize: "0.875rem" }}>No videos available yet</p>
        </div>
      )}
    </div>
  );
};

export default YouTubeSection;
