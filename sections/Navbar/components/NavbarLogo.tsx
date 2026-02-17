export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 z-50"
    >
      <img
        alt="HYRUP"
        src="https://c.animaapp.com/mlowuzui4moa6C/assets/1.png"
        className="text-transparent aspect-[auto_100_/_32] box-border h-6 max-w-full md:h-8"
      />
      <span className="text-xl font-semibold box-border caret-transparent hidden leading-[26px] min-h-0 min-w-0 md:text-[28px] md:block md:leading-[36.4px] md:min-h-[auto] md:min-w-[auto] text-black dark:text-white">
        HYRUP
      </span>
    </a>
  );
};