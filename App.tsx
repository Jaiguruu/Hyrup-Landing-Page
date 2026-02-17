import { BackgroundDecorations } from "./components/BackgroundDecorations";
import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FixForwardSection } from "./sections/FixForwardSection";
import { CommunitySection } from "./sections/CommunitySection";
import { FinalCTASection } from "./sections/FinalCTASection";
import { Footer } from "./sections/Footer";
import { Cursor } from "./components/Cursor"

export const App = () => {
  return (

    <div className="
relative
min-h-screen
bg-transparent text-[#111111] dark:text-white
font-inter
text-base
leading-6
transition-colors duration-300
overflow-x-hidden
">
      <div className="box-border caret-transparent hidden"></div>
      <div className="absolute box-border caret-transparent block"></div>

      <main className="relative box-border caret-transparent min-h-[1000px] overflow-x-hidden overflow-y-auto">

        <BackgroundDecorations />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <FixForwardSection />
        <CommunitySection />
        <FinalCTASection />
        <Footer />

      </main>

    </div>
  );
};

export default App;