export const FooterBottom = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-between gap-y-4 pt-8 border-t border-solid border-[oklab(0_0_0_/_0.1)] dark:border-[oklab(1_0_0_/_0.1)] md:flex-row">
      <div className="text-xs box-border caret-transparent leading-[18px] opacity-60 dark:opacity-80 dark:text-gray-400 font-ibm_plex_mono">
        © 2026 HYRUP. All rights reserved.
      </div>
      <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
        <a
          href="/careers"
          className="text-xs box-border caret-transparent block leading-[18px] opacity-60 dark:opacity-80 dark:text-gray-400 font-ibm_plex_mono hover:dark:text-white transition-colors"
        >
          Careers
        </a>
        <span className="text-xs box-border caret-transparent block leading-[18px] opacity-60 dark:opacity-80 dark:text-gray-400 font-ibm_plex_mono">
          Made with ❤️ by students, for students.
        </span>
        <a
          href="/admin"
          className="text-xs box-border caret-transparent block leading-[18px] opacity-30 dark:opacity-40 dark:text-gray-500 font-ibm_plex_mono hover:dark:text-white transition-colors"
        >
          Admin
        </a>
      </div>
    </div>
  );
};