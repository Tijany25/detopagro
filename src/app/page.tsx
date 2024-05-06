import Image from "next/image";
import Navbar from "./modules/lib/components/navbar/Navbar";
import LandingPage from "./modules/views/landing-page/landingPage";
import Footer from "./modules/lib/components/footer/Footer";
import connectDB from "./api/db";

export default function Home() {
  connectDB();
  const adminPath = typeof window !== 'undefined' ? window.location.toString().includes("/admin") : null;
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between py-1">
        <LandingPage />
    </main>
    <Footer />
    </>
  );
}
