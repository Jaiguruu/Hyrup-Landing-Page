export const FooterBrand = () => {
  return (
    <div className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_1] md:col-start-[span_1]">
      <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 mb-4">
        <img
          alt="HYRUP"
          src="https://c.animaapp.com/mlowuzui4moa6C/assets/1.png"
          className="text-transparent aspect-[auto_100_/_32] box-border h-8 max-w-full"
        />
        <span className="text-xl font-semibold box-border caret-transparent block leading-[26px] md:text-[28px] md:leading-[36.4px] dark:text-white">
          HYRUP
        </span>
      </div>
      <p className="text-xs box-border caret-transparent leading-[18px] opacity-60 dark:opacity-80 dark:text-gray-300 mb-4 font-ibm_plex_mono">
        Built by students, for students. Get hired for your skills, not your
        degree.
      </p>
      <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
        <a
          href="https://www.instagram.com/hyrupofficial?igsh=MW9hcnVwOWFwd3phdA=="
          aria-label="Instagram"
          className="text-[oklab(0_0_0_/_0.6)] dark:text-[oklab(1_0_0_/_0.6)] box-border caret-transparent block transition-colors duration-200 hover:text-red-500"
        >
          <img
            src="https://c.animaapp.com/mlowuzui4moa6C/assets/icon-10.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/hyrup.in/"
          aria-label="LinkedIn"
          className="text-[oklab(0_0_0_/_0.6)] box-border caret-transparent block"
        >
          <img
            src="https://c.animaapp.com/mlowuzui4moa6C/assets/icon-11.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
        </a>
      </div>
    </div>
  );
};