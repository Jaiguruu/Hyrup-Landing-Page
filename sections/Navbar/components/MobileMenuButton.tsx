type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
      className="cursor-target relative items-center bg-transparent caret-transparent gap-x-1.5 flex flex-col h-10 justify-center min-h-[auto] min-w-[auto] gap-y-1.5 text-center w-10 z-50 p-0 rounded-bl rounded-br rounded-tl rounded-tr md:hidden md:min-h-0 md:min-w-0"
    >
      <span className={`bg-black dark:bg-white box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] w-5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`bg-black dark:bg-white box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] w-5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`bg-black dark:bg-white box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] w-5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </button>
  );
};