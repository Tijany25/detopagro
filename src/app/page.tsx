import Image from "next/image";
import Navbar from "./modules/lib/components/navbar/Navbar";
import LandingPage from "./modules/views/landing-page/landingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-1">
        <LandingPage />
    </main>
  );
}
