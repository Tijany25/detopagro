"use client";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const contactDetails = [
  {
    Icon: IoLocationOutline,
    label: "Address",
    value: "Lagos, Nigeria",
    href: null,
  },
  {
    Icon: IoIosMail,
    label: "Email",
    value: "detopessence01@gmail.com",
    href: "mailto:detopessence01@gmail.com",
  },
  {
    Icon: IoCallOutline,
    label: "Phone",
    value: "+234 816 760 3732",
    href: "tel:+2348167603732",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00am – 5:00pm", closed: false },
  { day: "Saturday", time: "10:00am – 4:00pm", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
];

const ContactUs = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F5F7F4" }}>
      {/* ── Header ── */}
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          marginTop: "72px",
          padding: "72px 24px 80px",
          background:
            "linear-gradient(135deg, #195936 0%, #32492F 55%, #0D1F15 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(242,148,34,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="relative">
          <span
            className="inline-block font-semibold uppercase mb-4"
            style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "#F29422" }}
          >
            Reach Out
          </span>
          <h1
            className="font-bold text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "440px",
            }}
          >
            Visit our office or get in touch — we&apos;re happy to help with your
            agricultural sourcing needs.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <section style={{ padding: "64px 0 80px" }}>
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2"
          style={{ gap: "clamp(32px, 5vw, 64px)" }}
        >
          {/* Map */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              aspectRatio: "4/3",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Contact details */}
            <div
              className="rounded-2xl"
              style={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                padding: "28px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                className="font-semibold uppercase"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "#6b7280",
                  marginBottom: "20px",
                }}
              >
                Contact Details
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {contactDetails.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-xl"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(25,89,54,0.08)",
                        color: "#195936",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p
                        className="font-medium uppercase"
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                          color: "#9ca3af",
                          marginBottom: "3px",
                        }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          style={{
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: "#32492F",
                            transition: "color 0.15s",
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "#195936")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "#32492F")
                          }
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          style={{
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: "#32492F",
                          }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div
              className="rounded-2xl"
              style={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                padding: "28px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                className="font-semibold uppercase"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "#6b7280",
                  marginBottom: "20px",
                }}
              >
                Business Hours
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {hours.map(({ day, time, closed }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <span style={{ color: "#4b5563" }}>{day}</span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: closed ? "#f87171" : "#195936",
                      }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl"
              style={{ backgroundColor: "#195936", padding: "28px" }}
            >
              <h3
                className="font-bold text-white"
                style={{ fontSize: "1rem", marginBottom: "8px" }}
              >
                Ready to place an order?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                }}
              >
                We respond within 24 hours on business days. Reach out via email
                or phone for bulk inquiries.
              </p>
              <a
                href="mailto:detopessence01@gmail.com"
                className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 active:scale-95"
                style={{
                  padding: "12px 20px",
                  backgroundColor: "white",
                  color: "#195936",
                  fontSize: "0.875rem",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "#f9fafb")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "white")
                }
              >
                <IoIosMail size={18} />
                Send us an email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
