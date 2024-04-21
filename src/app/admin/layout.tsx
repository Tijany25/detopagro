import type { Metadata } from "next";
import { Inter, Roboto, Lora } from 'next/font/google'
import "../../styles/styles.scss";
import Sidebar from "../modules/lib/components/Sidebar/Sidebar";
import Footer from "../modules/lib/components/footer/Footer";

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
  return (
    <>
        
     
      <div className="bg-blueGray-100 flex">
      {/*  */}
        {/* Header */}
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="adminLayout">
          {children}
        </div>
      </div>
    </>
  );
}
