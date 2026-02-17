import { useState } from "react";
import { NavbarLogo } from "./components/NavbarLogo";
import { DesktopNav } from "./components/DesktopNav";
import { MobileMenuButton } from "./components/MobileMenuButton";
import { ThemeToggle } from "./components/ThemeToggle";
import { MobileMenu } from "./components/MobileMenu";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed items-center backdrop-blur bg-[oklab(0.780404_0.00105023_0.0163164_/_0.8)] dark:bg-[oklab(0.15_0_0_/_0.8)] box-border caret-transparent flex justify-between z-50 px-4 py-3 border-b border-solid border-[oklab(0_0_0_/_0.1)] dark:border-[oklab(1_0_0_/_0.1)] top-0 inset-x-0 md:px-8 md:py-4 transition-all duration-300">
      <NavbarLogo />
      <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 md:gap-x-4 md:gap-y-4">
        <DesktopNav />
        <MobileMenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <a
          href="https://students.hyrup.in/"
          className="text-sm font-medium bg-red-500 box-border caret-transparent block tracking-[0.7px] leading-[21px] uppercase z-50 px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono"
        >
          JOIN NOW
        </a>
        <div className="box-border caret-transparent z-50">
          <ThemeToggle />
        </div>
      </div>
    </header>
    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};