import type { Metadata } from "next";
import { Inter, Roboto, Lora } from 'next/font/google'
import "../styles/styles.scss";
import Navbar from "./modules/lib/components/navbar/Navbar";
import Footer from "./modules/lib/components/footer/Footer";
import { Toaster } from "react-hot-toast";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900']
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Detopagro",
  description: "DETOP ESSENCE ENTERPRISE LIMITED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const adminPath = typeof window !== 'undefined' ? window.location.toString().includes("/admin") : null;
  
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${roboto.variable} ${lora.variable}`}>
      <Toaster />
        <Navbar />
        {children}
        
       
      </body>
    </html>
  );
}
