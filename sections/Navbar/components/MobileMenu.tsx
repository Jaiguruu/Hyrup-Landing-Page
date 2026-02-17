type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-stone-400 dark:bg-gray-900 border-l border-[oklab(0_0_0_/_0.1)] dark:border-[oklab(1_0_0_/_0.1)] z-40 transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col gap-2 p-6 pt-24">
          <a
            href="https://fixforward.hyrup.in/"
            onClick={onClose}
            className="text-sm font-medium bg-red-500 box-border caret-transparent block tracking-[0.7px] leading-[21px] uppercase px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono text-center transition-all duration-200 hover:bg-red-600 active:scale-95"
          >
            FIX FORWARD
          </a>
          <a
            href="/careers"
            onClick={onClose}
            className="text-sm font-medium box-border caret-transparent block tracking-[0.7px] leading-[21px] uppercase border px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid font-ibm_plex_mono text-center transition-all duration-200 hover:bg-black hover:text-stone-400 active:scale-95 border-black dark:border-white text-black dark:text-white"
          >
            CAREERS
          </a>
          <a
            href="https://students.hyrup.in/"
            onClick={onClose}
            className="text-sm font-medium bg-red-500 box-border caret-transparent block tracking-[0.7px] leading-[21px] uppercase px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono text-center transition-all duration-200 hover:bg-red-600 active:scale-95"
          >
            JOIN NOW
          </a>
        </nav>
      </div>
    </>
  );
};