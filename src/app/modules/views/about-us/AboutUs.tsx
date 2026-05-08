"use client";
import React, { useEffect, useRef } from "react";
import Image from "../../lib/components/image/Image";

const principles = [
  {
    title: "Vision",
    body: "To be the global leader in Supply of agriculture commodities and a provider of quality services that exceeds the expectations of our esteemed customers.",
    bg: "#195936",
    accent: "#2d8a56",
  },
  {
    title: "Mission",
    body: "To provide exceptional agro allied services by pursuing business through innovation and advanced technology, building long-term relationships with our customers, clients, shareholders and employees.",
    bg: "#32492F",
    accent: "#4a6b46",
  },
  {
    title: "Action Guidelines",
    body: "To deliver customer satisfaction with creativity, Innovation, Sincerity, and Gratitude, and to act in compliance with the law and ethics.",
    bg: "#1e6b41",
    accent: "#2d8a56",
  },
  {
    title: "Core Philosophy",
    body: "To be at the right place at the right time with the right quantity at the right cost.",
    bg: "#c97c20",
    accent: "#F29422",
  },
];

const values = [
  {
    icon: "integrity.svg",
    title: "Integrity",
    body: "DETOP is known for its steadfast adherence to moral and ethical conduct while dealing with clients and customers.",
  },
  {
    icon: "improvement.svg",
    title: "Constant Improvement",
    body: "We believe we are not perfect but we can work our way to perfection by improving at every step of the way.",
  },
  {
    icon: "trust.svg",
    title: "Trust",
    body: "Our clients uphold a high level of confidence and reliance in us as we provide unambiguous transactions.",
  },
  {
    icon: "sustainability.svg",
    title: "Sustainability",
    body: "We maintain the peak of quality to uphold our client's partnership and ensure continuous profitability.",
  },
  {
    icon: "commitment.svg",
    title: "Commitment",
    body: "We are committed to fulfilling our partnership objectives with clients impeccably.",
  },
];

const services = [
  "Agro-commodities Supply",
  "Aggregation Services",
  "Solid Minerals",
  "Sourcing & Producing",
];

const AboutUs = () => {
  const refs = useRef<HTMLElement[]>([]);

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
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          marginTop: "72px",
          padding: "80px 24px 88px",
          background: "linear-gradient(135deg, #195936 0%, #32492F 55%, #0D1F15 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 75% 50%, rgba(242,148,34,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <span
            className="inline-block font-semibold uppercase mb-4"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "#F29422",
            }}
          >
            Who We Are
          </span>
          <h1
            className="font-bold text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            About DETOPAGRO
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
              lineHeight: 1.75,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            Nigeria&apos;s trusted agricultural commodity trading company — connecting quality produce to industrial needs at scale.
          </p>
        </div>
      </div>

      {/* ── Company Overview ── */}
      <section style={{ padding: "80px 0 88px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={addRef}
            className="reveal-section grid lg:grid-cols-2 items-center"
            style={{ gap: "clamp(40px, 6vw, 80px)" }}
          >
            {/* Image column */}
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: "4/3",
                  boxShadow: "0 16px 48px rgba(25,89,54,0.15)",
                }}
              >
                <Image
                  src="about.jpeg"
                  alt="DETOPAGRO operations"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute rounded-2xl"
                style={{
                  bottom: "-20px",
                  right: "-12px",
                  backgroundColor: "white",
                  padding: "16px 20px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                  border: "1px solid #f3f4f6",
                }}
              >
                <div
                  style={{ fontSize: "1.5rem", fontWeight: 800, color: "#195936", lineHeight: 1 }}
                >
                  10+
                </div>
                <div
                  style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "4px", fontWeight: 500 }}
                >
                  Years of Excellence
                </div>
              </div>
            </div>

            {/* Content column */}
            <div>
              <span
                className="inline-block font-semibold uppercase mb-4"
                style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "#F29422" }}
              >
                Our Story
              </span>
              <h2
                className="font-bold text-deep-green"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Your Trusted Source for Top-Tier Agro Products
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ color: "#4b5563", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  DETOPAGRO is a subsidiary of DETOP ESSENCE — an Agricultural Commodity Trading Company established for the sole purpose of Sourcing & Trading agricultural commodities in large quantities for industrial usage.
                </p>
                <p style={{ color: "#4b5563", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  With our growing pool of farmers, we are positioned not only to provide large quantities of agro products, but to deliver top-quality produce reliably and competitively.
                </p>
                <div
                  className="rounded-xl"
                  style={{
                    backgroundColor: "#F5F7F4",
                    padding: "16px 20px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "#32492F",
                      fontWeight: 500,
                      lineHeight: 1.75,
                    }}
                  >
                    Paddy Rice · Maize · Local Rice · Rice Bran · Soya beans · Groundnut · Sesame seeds · Ginger · Shea nut · Sorghum · Hibiscus flower · Raw cashew nuts · Processed Cashew Nuts
                  </p>
                </div>
              </div>

              {/* Services grid */}
              <div
                className="grid grid-cols-2"
                style={{ marginTop: "28px", gap: "10px" }}
              >
                {services.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2.5"
                    style={{ fontSize: "0.875rem", color: "#32492F", fontWeight: 500 }}
                  >
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "rgba(25,89,54,0.1)",
                      }}
                    >
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="#195936"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values & Principles ── */}
      <section style={{ padding: "80px 0 88px", backgroundColor: "#F5F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div
            ref={addRef}
            className="reveal-section text-center"
            style={{ marginBottom: "56px" }}
          >
            <span
              className="inline-block font-semibold uppercase mb-4"
              style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "#F29422" }}
            >
              Our Foundation
            </span>
            <h2
              className="font-bold text-deep-green"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Core Values & Principles
            </h2>
          </div>

          {/* Principles cards */}
          <div
            ref={addRef}
            className="reveal-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "16px", marginBottom: "64px" }}
          >
            {principles.map(({ title, body, bg, accent }, i) => (
              <div
                key={title}
                className="stagger-child relative rounded-2xl overflow-hidden"
                style={{
                  padding: "28px",
                  backgroundColor: bg,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="absolute top-0 right-0 rounded-bl-full pointer-events-none"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: accent,
                    opacity: 0.3,
                  }}
                />
                <h3
                  className="font-bold text-white relative"
                  style={{ fontSize: "1rem", marginBottom: "12px", zIndex: 1 }}
                >
                  {title}
                </h3>
                <p
                  className="relative"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.8125rem",
                    lineHeight: 1.75,
                    zIndex: 1,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Why choose us */}
          <div ref={addRef} className="reveal-section">
            <h3
              className="font-bold text-deep-green text-center"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                letterSpacing: "-0.02em",
                marginBottom: "36px",
              }}
            >
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "16px" }}>
              {values.slice(0, 4).map(({ icon, title, body }, i) => (
                <div
                  key={title}
                  className="stagger-child group rounded-2xl transition-all duration-300"
                  style={{
                    padding: "24px",
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    transitionDelay: `${i * 80}ms`,
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(25,89,54,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 6px 20px rgba(25,89,54,0.08)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#e5e7eb";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-xl mb-4"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "rgba(25,89,54,0.08)",
                    }}
                  >
                    <Image className="w-7 h-7" src={icon} alt={title} type="icon" />
                  </div>
                  <h4
                    className="font-semibold uppercase"
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.06em",
                      color: "#32492F",
                      marginBottom: "8px",
                    }}
                  >
                    {title}
                  </h4>
                  <p style={{ color: "#6b7280", fontSize: "0.8125rem", lineHeight: 1.75 }}>
                    {body}
                  </p>
                </div>
              ))}

              {/* Last card centered */}
              {values[4] && (
                <div
                  className="stagger-child sm:col-span-2 lg:col-span-1 rounded-2xl transition-all duration-300"
                  style={{
                    padding: "24px",
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    transitionDelay: "320ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(25,89,54,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 6px 20px rgba(25,89,54,0.08)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#e5e7eb";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-xl mb-4"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "rgba(25,89,54,0.08)",
                    }}
                  >
                    <Image
                      className="w-7 h-7"
                      src={values[4].icon}
                      alt={values[4].title}
                      type="icon"
                    />
                  </div>
                  <h4
                    className="font-semibold uppercase"
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.06em",
                      color: "#32492F",
                      marginBottom: "8px",
                    }}
                  >
                    {values[4].title}
                  </h4>
                  <p style={{ color: "#6b7280", fontSize: "0.8125rem", lineHeight: 1.75 }}>
                    {values[4].body}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
