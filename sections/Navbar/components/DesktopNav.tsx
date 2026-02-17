export const DesktopNav = () => {
  return (
    <nav className="items-center box-border caret-transparent gap-x-1 hidden min-h-0 min-w-0 gap-y-1 md:flex md:min-h-[auto] md:min-w-[auto]">
      <a
        href="https://fixforward.hyrup.in/"
        className="text-sm font-medium bg-red-500 box-border caret-transparent inline tracking-[0.7px] leading-[21px] min-h-0 min-w-0 uppercase px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono md:block md:min-h-[auto] md:min-w-[auto] transition-all duration-200 hover:bg-red-600 active:scale-95"
      >
        FIX FORWARD
      </a>
      <a
        href="/careers"
        className="text-sm font-medium box-border caret-transparent inline tracking-[0.7px] leading-[21px] min-h-0 min-w-0 uppercase border border-black dark:border-white px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid font-ibm_plex_mono md:block md:min-h-[auto] md:min-w-[auto] transition-all duration-200 hover:text-stone-400 hover:bg-black dark:hover:bg-white dark:hover:text-gray-900 active:scale-95 text-black dark:text-white"
      >
        CAREERS
      </a>
    </nav>
  );
};