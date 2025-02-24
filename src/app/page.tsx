import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import Features from "@/components/Features";
import GettingStarted from "@/components/GettingStarted";
import AppDownload from "@/components/AppDownload";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <AboutPreview />
      <Features />
      <GettingStarted />
      <AppDownload />
    </main>
  );
}
