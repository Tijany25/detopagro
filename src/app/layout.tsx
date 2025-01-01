import type { Metadata } from "next";
import { Inter, Roboto, Lora } from 'next/font/google'
import "../styles/styles.scss";
import Navbar from "./modules/lib/components/navbar/Navbar";
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
  title: 'DETOPAGRO - Your Source for Quality Agricultural Products',
  description: 'DETOPAGRO, a subsidiary of DETOP ESSENCE, sources and trades agricultural commodities in bulk for industrial use. We offer a wide range of high-quality products, including grains, and provide services such as Agro-commodity Supply, Aggregation, Solid Minerals Sourcing, and Production.',
  keywords: 'agricultural commodities, grains, agro-commodity supply, aggregation services, solid minerals, sourcing, production, industrial agriculture, bulk commodities, farming, DETOPAGRO, DETOP ESSENCE',
  openGraph: {
    title: 'DETOPAGRO - Your Source for Quality Agricultural Products',
    description: 'DETOPAGRO, a subsidiary of DETOP ESSENCE, sources and trades agricultural commodities in bulk for industrial use. We offer a wide range of high-quality products, including grains, and provide services such as Agro-commodity Supply, Aggregation, Solid Minerals Sourcing, and Production.',
    url: 'https://detopagro.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'your-image-url',
        width: 800,
        height: 600,
        alt: 'DETOPAGRO Agricultural Products',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
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
