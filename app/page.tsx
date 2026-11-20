import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FriendshipStory from "@/components/FriendshipStory";
import MemoryWall from "@/components/MemoryWall";
import OpenWhenLetters from "@/components/OpenWhenLetters";
import FriendshipQuiz from "@/components/FriendshipQuiz";
import SpecialMoments from "@/components/SpecialMoments";
import FinalSurprise from "@/components/FinalSurprise";
import Footer from "@/components/Footer";
import FloatingHeartsCanvas from "@/components/FloatingHeartsCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen gradient-bg-universe overflow-hidden">
      {/* Ambient Floating Hearts & Starlight Canvas */}
      <FloatingHeartsCanvas />

      {/* Floating Pill Header / Navigation */}
      <Navbar />

      {/* 1. Hero / Welcome Section */}
      <Hero />

      {/* 2. Our Friendship Story Timeline */}
      <FriendshipStory />

      {/* 3. Memory Wall Polaroid Gallery */}
      <MemoryWall />

      {/* 4. Open When... Letters */}
      <OpenWhenLetters />

      {/* 5. Friendship Quiz */}
      <FriendshipQuiz />

      {/* 6. Our Special Moments */}
      <SpecialMoments />

      {/* 7. Final Surprise */}
      <FinalSurprise />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
