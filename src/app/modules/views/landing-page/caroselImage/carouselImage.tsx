"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    tag: "Wholesale Platform",
    title: "Premium Agricultural\nCommodities at Scale",
    subtitle:
      "Connecting farmers and businesses through Nigeria's most trusted wholesale agricultural network.",
    cta: "Explore Products",
    ctaPath: "/products",
    imageUrl:
      "https://res.cloudinary.com/duneijg7k/image/upload/v1719695273/high-angle-farmland-view_tgn2og.jpg",
  },
  {
    id: 2,
    tag: "Quality Guaranteed",
    title: "Specialty Goods,\nDelivered Reliably",
    subtitle:
      "Organic options, rare varieties, and specialty imports — sourced directly from trusted Nigerian farmers.",
    cta: "View Catalog",
    ctaPath: "/products",
    imageUrl:
      "https://res.cloudinary.com/duneijg7k/image/upload/v1719695272/gettyimages-1139556569-612x612_jnmzzy.jpg",
  },
  {
    id: 3,
    tag: "Trusted Supply Chain",
    title: "Bulk Supply,\nCompetitive Pricing",
    subtitle:
      "Grains, pulses, spices and more — with reliable supply chains and industrial-scale quantities.",
    cta: "Get a Quote",
    ctaPath: "/contactUs",
    imageUrl:
      "https://res.cloudinary.com/duneijg7k/image/upload/v1719695273/zura-narimanishvili-ovzLiBLMi0I-unsplash_owwvyr.jpg",
  },
];

const stats = [
  { value: "500+", label: "Products" },
  { value: "100%", label: "Quality Assured" },
  { value: "10+", label: "Years of Excellence" },
  { value: "₦", label: "Competitive Pricing" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 450);
    },
    [animating]
  );

  useEffect(() => {
    const t = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        marginTop: "72px",
        height: "min(92vh, 860px)",
        minHeight: "520px",
        backgroundColor: "#0D1F15",
        width: "100%",
      }}
    >
      {/* Background images with crossfade */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.imageUrl}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1)" : "scale(1.04)",
              transition: "transform 8000ms ease-out",
            }}
          />
          {/* Layered gradients for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(13,31,21,0.82) 0%, rgba(13,31,21,0.55) 50%, rgba(13,31,21,0.2) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(13,31,21,0.65) 0%, transparent 50%)",
            }}
          />
        </div>
      ))}

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px",
        }}
      />

      {/* Main content */}
      <div
        className="relative h-full flex flex-col justify-center"
        style={{ paddingBottom: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div style={{ maxWidth: "640px" }}>
            {/* Tag pill */}
            <div
              className="inline-flex items-center gap-2 mb-7 rounded-full"
              style={{
                padding: "6px 14px",
                border: "1px solid rgba(255,255,255,0.18)",
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(8px)" : "translateY(0)",
                transition: "opacity 0.45s ease-out, transform 0.45s ease-out",
              }}
            >
              <span
                className="rounded-full"
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#F29422",
                  animation: "pulse 2s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                whiteSpace: "pre-line",
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(20px)" : "translateY(0)",
                transition:
                  "opacity 0.5s ease-out 0.06s, transform 0.5s ease-out 0.06s",
              }}
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(0.9375rem, 1.5vw, 1.125rem)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "480px",
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(20px)" : "translateY(0)",
                transition:
                  "opacity 0.5s ease-out 0.12s, transform 0.5s ease-out 0.12s",
              }}
            >
              {slide.subtitle}
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(20px)" : "translateY(0)",
                transition:
                  "opacity 0.5s ease-out 0.18s, transform 0.5s ease-out 0.18s",
              }}
            >
              <Link
                href={slide.ctaPath}
                className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 active:scale-95"
                style={{
                  padding: "14px 28px",
                  backgroundColor: "#F29422",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  boxShadow: "0 4px 16px rgba(242,148,34,0.35)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "0.9")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "1")
                }
              >
                {slide.cta}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contactUs"
                className="inline-flex items-center font-semibold rounded-xl transition-all duration-200 active:scale-95"
                style={{
                  padding: "14px 28px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255,255,255,0.16)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255,255,255,0.1)")
                }
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute flex items-center gap-2"
        style={{ bottom: "96px", left: "50%", transform: "translateX(-50%)" }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-500"
            style={{
              height: "3px",
              width: i === current ? "2rem" : "0.5rem",
              backgroundColor:
                i === current ? "#ffffff" : "rgba(255,255,255,0.35)",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 inset-x-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div
          style={{
            backgroundColor: "rgba(25,89,54,0.88)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center"
                  style={{
                    padding: "14px 16px",
                    borderRight: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.55)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "2px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
