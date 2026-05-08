"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../lib/components/product-card/ProductCard";
import axios from "axios";
import Pagination from "../../lib/components/pagination/Pagination";

const ProductsPage = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  let catName: any;
  if (global?.window !== undefined) {
    catName = localStorage.getItem("cat");
  }

  useEffect(() => {
    if (catName) {
      setSelectedCategory(catName);
      if (global?.window !== undefined) {
        localStorage.setItem("cat", "");
      }
    }
  }, []);

  useEffect(() => {
    setSearch(searchTerm.length >= 3 ? searchTerm : "");
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      const r = await axios.get("/api/category");
      setCategoryItems(r.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchProductData = async () => {
    const url = `/api/products?q=${search}&category=${catName || selectedCategory}&limit=${limit}&page=${page}`;
    try {
      const r = await axios.get(url);
      setProductItems(r?.data?.products);
      setTotalProducts(r?.data?.totalProducts);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    setLoading(true);
    fetchProductData();
  }, [selectedCategory, page, search]);

  const toggleCategory = (cat: any) => {
    setSelectedCategory(selectedCategory === cat ? "" : cat);
    setPage(1);
  };

  const SkeletonCard = () => (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: "white", border: "1px solid #e5e7eb" }}
    >
      <div
        className="animate-pulse"
        style={{ aspectRatio: "4/3", backgroundColor: "#f3f4f6" }}
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
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F5F7F4" }}>
      {/* Hero Banner */}
      <div
        className="relative overflow-hidden"
        style={{ marginTop: "72px", height: "clamp(180px, 25vw, 260px)" }}
      >
        <img
          src="https://res.cloudinary.com/duneijg7k/image/upload/v1719695273/high-angle-farmland-view_tgn2og.jpg"
          alt="Products"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(13,31,21,0.75) 0%, rgba(13,31,21,0.45) 55%, rgba(13,31,21,0.2) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <p
              className="font-semibold uppercase"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                marginBottom: "8px",
              }}
            >
              Our Catalog
            </p>
            <h1
              className="font-bold text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Products
            </h1>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "36px", paddingBottom: "60px" }}
      >
        {/* Mobile filter bar */}
        <div
          className="flex items-center justify-between mb-6 lg:hidden"
          style={{ gap: "12px" }}
        >
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="flex items-center gap-2 rounded-xl transition-all duration-200 font-medium"
            style={{
              padding: "10px 16px",
              fontSize: "0.875rem",
              color: selectedCategory ? "#195936" : "#32492F",
              border: `1px solid ${selectedCategory ? "#195936" : "#d1d5db"}`,
              backgroundColor: selectedCategory
                ? "rgba(25,89,54,0.06)"
                : "white",
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 4h12M4 8h8M6 12h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {selectedCategory ? selectedCategory : "Filter"}
          </button>

          <div className="relative flex-1">
            <svg
              className="absolute w-4 h-4"
              style={{
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
                pointerEvents: "none",
              }}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-xl transition-all duration-200"
              style={{
                paddingLeft: "40px",
                paddingRight: "16px",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "0.875rem",
                border: "1px solid #d1d5db",
                backgroundColor: "white",
                outline: "none",
                color: "#374151",
              }}
              onFocus={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "#195936")
              }
              onBlur={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "#d1d5db")
              }
            />
          </div>
        </div>

        <div className="lg:flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block" style={{ width: "220px", flexShrink: 0 }}>
            <div
              className="sticky rounded-2xl overflow-hidden"
              style={{
                top: "96px",
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <h3
                  className="font-semibold uppercase"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    color: "#6b7280",
                  }}
                >
                  Categories
                </h3>
              </div>
              <ul style={{ padding: "8px 0" }}>
                <li>
                  <button
                    onClick={() => toggleCategory("")}
                    className="w-full text-left transition-colors duration-150"
                    style={{
                      padding: "10px 20px",
                      fontSize: "0.875rem",
                      fontWeight: !selectedCategory ? 600 : 400,
                      color: !selectedCategory ? "#195936" : "#4b5563",
                      backgroundColor: !selectedCategory
                        ? "rgba(25,89,54,0.06)"
                        : "transparent",
                      cursor: "pointer",
                      border: "none",
                      display: "block",
                    }}
                  >
                    All Products
                  </button>
                </li>
                {categoryItems.map((item: any) => (
                  <li key={item.name}>
                    <button
                      onClick={() => toggleCategory(item.name)}
                      className="w-full text-left flex items-center justify-between transition-colors duration-150"
                      style={{
                        padding: "10px 20px",
                        fontSize: "0.875rem",
                        fontWeight: selectedCategory === item.name ? 600 : 400,
                        color:
                          selectedCategory === item.name ? "#195936" : "#4b5563",
                        backgroundColor:
                          selectedCategory === item.name
                            ? "rgba(25,89,54,0.06)"
                            : "transparent",
                        cursor: "pointer",
                        border: "none",
                        display: "flex",
                      }}
                    >
                      {item.name}
                      {selectedCategory === item.name && (
                        <span
                          className="rounded-full"
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "#195936",
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Desktop header row */}
            <div
              className="hidden lg:flex items-center justify-between"
              style={{ marginBottom: "24px" }}
            >
              <div>
                <h2
                  className="font-semibold"
                  style={{ fontSize: "1.125rem", color: "#32492F" }}
                >
                  {selectedCategory || "All Products"}
                </h2>
                {totalProducts > 0 && (
                  <p style={{ fontSize: "0.8125rem", color: "#9ca3af", marginTop: "2px" }}>
                    {totalProducts} items found
                  </p>
                )}
              </div>
              <div className="relative">
                <svg
                  className="absolute w-4 h-4"
                  style={{
                    left: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9ca3af",
                    pointerEvents: "none",
                  }}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="rounded-xl transition-all duration-200"
                  style={{
                    paddingLeft: "42px",
                    paddingRight: "16px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontSize: "0.875rem",
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    width: "260px",
                    outline: "none",
                    color: "#374151",
                  }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      "#195936")
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      "#d1d5db")
                  }
                />
              </div>
            </div>

            {/* Product grid */}
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : productItems.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center rounded-2xl text-center"
                style={{ padding: "80px 24px", backgroundColor: "white" }}
              >
                <div
                  className="flex items-center justify-center rounded-full mb-4"
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#f3f4f6",
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ color: "#9ca3af" }}
                  >
                    <path
                      d="M3 7h18M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7v14h12V7H6z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="font-semibold mb-1"
                  style={{ color: "#32492F", fontSize: "0.9375rem" }}
                >
                  No products found
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                  Try adjusting your filters or search term
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {productItems.map((item: any, i) => (
                  <ProductCard
                    key={i}
                    imageUrl={item.imageUrl}
                    title={item.name}
                    description={item.description}
                    _id={item._id}
                  />
                ))}
              </div>
            )}

            <Pagination
              totalProducts={totalProducts}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>

      {/* Mobile Category Bottom Sheet */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(13,31,21,0.45)",
              backdropFilter: "blur(3px)",
            }}
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div
            className="absolute inset-x-0 bottom-0 rounded-t-3xl overflow-auto"
            style={{
              backgroundColor: "white",
              maxHeight: "70vh",
              boxShadow: "0 -4px 32px rgba(0,0,0,0.15)",
            }}
          >
            <div
              className="flex items-center justify-between"
              style={{
                padding: "20px 24px 16px",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              <h3
                className="font-semibold"
                style={{ fontSize: "0.9375rem", color: "#32492F" }}
              >
                Filter by Category
              </h3>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: "32px",
                  height: "32px",
                  color: "#9ca3af",
                  backgroundColor: "transparent",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div style={{ padding: "12px 16px 32px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <button
                onClick={() => { toggleCategory(""); setMobileSidebarOpen(false); }}
                className="w-full text-left rounded-xl transition-all duration-200"
                style={{
                  padding: "14px 16px",
                  fontSize: "0.9375rem",
                  fontWeight: !selectedCategory ? 600 : 400,
                  color: !selectedCategory ? "white" : "#32492F",
                  backgroundColor: !selectedCategory ? "#195936" : "transparent",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                All Products
              </button>
              {categoryItems.map((item: any) => (
                <button
                  key={item.name}
                  onClick={() => { toggleCategory(item.name); setMobileSidebarOpen(false); }}
                  className="w-full text-left rounded-xl transition-all duration-200"
                  style={{
                    padding: "14px 16px",
                    fontSize: "0.9375rem",
                    fontWeight: selectedCategory === item.name ? 600 : 400,
                    color: selectedCategory === item.name ? "white" : "#32492F",
                    backgroundColor: selectedCategory === item.name ? "#195936" : "transparent",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
