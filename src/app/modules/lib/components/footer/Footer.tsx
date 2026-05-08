"use client";
import React from "react";
import Image from "../image/Image";
import Link from "next/link";
import { paths } from "../../utility/paths";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    viewBox: "0 0 320 512",
    path: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
  },
  {
    label: "X / Twitter",
    href: "#",
    viewBox: "0 0 512 512",
    path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  },
  {
    label: "Instagram",
    href: "#",
    viewBox: "0 0 448 512",
    path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
  },
  {
    label: "LinkedIn",
    href: "#",
    viewBox: "0 0 448 512",
    path: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z",
  },
];

const quickLinks = [
  { label: "Home", href: paths.homepage },
  { label: "Products", href: paths.products },
  { label: "About Us", href: paths.about },
  { label: "Contact", href: paths.contactUs },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0D1F15", color: "white" }}>
      {/* Main content */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "64px", paddingBottom: "40px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "40px 48px", marginBottom: "48px" }}>
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div
              style={{
                width: "112px",
                marginBottom: "20px",
                filter: "brightness(0) invert(1)",
              }}
            >
              <Image className="w-full" src="logo.png" alt="DETOPAGRO" type="logo" />
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                maxWidth: "360px",
                marginBottom: "24px",
              }}
            >
              We are passionate about connecting farmers and businesses through our
              wholesale platform. With a deep-rooted commitment to supporting
              agriculture, we specialize in buying and selling high-quality
              agricultural products.
            </p>

            {/* Social icons */}
            <div className="flex items-center" style={{ gap: "8px" }}>
              {socialLinks.map(({ label, href, viewBox, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center rounded-xl transition-all duration-200"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.14)";
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.5)";
                  }}
                >
                  <svg
                    fill="currentColor"
                    viewBox={viewBox}
                    style={{ width: "14px", height: "14px" }}
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5
              className="font-semibold uppercase"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h5>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.55)",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.55)")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h5
              className="font-semibold uppercase"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "20px",
              }}
            >
              Contact
            </h5>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <li className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    width: "16px",
                    height: "16px",
                    marginTop: "2px",
                    flexShrink: 0,
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  href="mailto:detopessence01@gmail.com"
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.55)",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.55)")
                  }
                >
                  detopessence01@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="tel:+2348167603732"
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.55)",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.55)")
                  }
                >
                  +234 816 760 3732
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "28px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} DETOP ESSENCE ENTERPRISE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center" style={{ gap: "20px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.35)",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.35)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
