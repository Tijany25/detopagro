"use client";
import React, { useEffect, useState, useRef } from "react";
import CategoryCard from "../../lib/components/category-card/CategoryCard";
import ProductCard from "../../lib/components/product-card/ProductCard";
import HeroSection from "./caroselImage/carouselImage";
import YouTubeSection from "../../lib/components/youtubeVideos/YoutubeSection";
import axios from "axios";
import Link from "next/link";

const SkeletonCard = () => (
  <div
    className="rounded-2xl overflow-hidden"
    style={{ backgroundColor: "white", border: "1px solid #e5e7eb" }}
  >
    <div
      className="animate-pulse"
      style={{
        aspectRatio: "4/3",
        background: "linear-gradient(90deg, #f3f4f6 25%, #f9fafb 50%, #f3f4f6 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s infinite linear",
      }}
    />
    <div className="p-5 space-y-3">
      <div
        className="rounded animate-pulse"
        style={{ height: "14px", width: "70%", backgroundColor: "#f3f4f6" }}
      />
      <div
        className="rounded animate-pulse"
        style={{ height: "11px", backgroundColor: "#f9fafb" }}
      />
      <div
        className="rounded animate-pulse"
        style={{ height: "11px", width: "85%", backgroundColor: "#f9fafb" }}
      />
    </div>
  </div>
);

const SectionHeader = ({
  label,
  title,
  linkHref,
  linkLabel,
}: {
  label: string;
  title: string;
  linkHref?: string;
  linkLabel?: string;
}) => (
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
        {label}
      </span>
      <h2
        className="font-bold text-deep-green leading-tight"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
      >
        {title}
      </h2>
    </div>
    {linkHref && linkLabel && (
      <Link
        href={linkHref}
        className="group inline-flex items-center gap-2 font-semibold shrink-0 transition-colors duration-200 hover:text-deep-green"
        style={{ fontSize: "0.875rem", color: "#195936" }}
      >
        {linkLabel}
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
      </Link>
    )}
  </div>
);

const LandingPage = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catLoading, setCatLoading] = useState(true);

  const categoriesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          axios.get("/api/category"),
          axios.get("/api/products"),
        ]);
        setCategoryItems(catRes.data);
        setProductItems(prodRes?.data?.products);
      } catch (err) {
        console.error(err);
      } finally {
        setCatLoading(false);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    [categoriesRef, productsRef, videoRef, ctaRef].forEach(
      (r) => r.current && observer.observe(r.current)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <HeroSection />

      {/* ── Categories ── */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={categoriesRef} className="reveal-section">
            <SectionHeader
              label="What We Offer"
              title="Product Categories"
              linkHref="/products"
              linkLabel="View all products"
            />
            {catLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {categoryItems?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="stagger-child"
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <CategoryCard
                      imageUrl={item.imageUrl}
                      title={item.name}
                      description={item.description}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section style={{ padding: "80px 0", backgroundColor: "#F5F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={productsRef} className="reveal-section">
            <SectionHeader
              label="Featured"
              title="Top Products"
              linkHref="/products"
              linkLabel="Browse catalog"
            />
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productItems?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="stagger-child"
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <ProductCard
                      imageUrl={item.imageUrl}
                      title={item.name}
                      description={item.description}
                      _id={item._id}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── YouTube ── */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={videoRef} className="reveal-section">
            <YouTubeSection />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        ref={ctaRef}
        className="reveal-section"
        style={{ backgroundColor: "#195936", padding: "72px 0" }}
      >
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Decorative line */}
          <div
            className="mx-auto mb-6 rounded-full"
            style={{
              width: "48px",
              height: "3px",
              backgroundColor: "#F29422",
            }}
          />
          <h2
            className="font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            Ready to Source Quality Agricultural Products?
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            Connect with us today and discover how DETOPAGRO can power your
            agricultural supply chain.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contactUs"
              className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 active:scale-95"
              style={{
                padding: "14px 32px",
                backgroundColor: "#F29422",
                color: "#ffffff",
                fontSize: "0.9375rem",
                boxShadow: "0 4px 16px rgba(242,148,34,0.4)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.9")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Get in Touch
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
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
              href="/products"
              className="inline-flex items-center font-semibold rounded-xl transition-all duration-200 active:scale-95"
              style={{
                padding: "14px 32px",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontSize: "0.9375rem",
                border: "1px solid rgba(255,255,255,0.2)",
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
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
