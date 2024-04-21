import Image from "next/image";
import Navbar from "./modules/lib/components/navbar/Navbar";
import LandingPage from "./modules/views/landing-page/landingPage";
import Footer from "./modules/lib/components/footer/Footer";

export default function Home() {
  const adminPath = typeof window !== 'undefined' ? window.location.toString().includes("/admin") : null;
  console.log('adminPath', adminPath);
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between py-1">
        <LandingPage />
    </main>
    <Footer />
    </>
  );
}
