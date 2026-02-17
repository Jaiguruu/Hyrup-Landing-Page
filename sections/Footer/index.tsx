import { FooterContent } from "./components/FooterContent";
import { FooterBottom } from "./components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent z-10 px-4 py-12 border-t border-solid border-[oklab(0_0_0_/_0.1)] dark:border-[oklab(1_0_0_/_0.1)] md:px-8">
      <div className="box-border caret-transparent max-w-screen-xl mx-auto">
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  );
};