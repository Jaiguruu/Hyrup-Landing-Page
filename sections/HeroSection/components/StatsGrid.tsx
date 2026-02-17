export const StatsGrid = () => {
  return (
    <section className="relative bg-[oklab(0_0_0_/_0.05)] box-border caret-transparent z-10 px-4 py-20 md:px-8 md:py-32">
      <div className="box-border caret-transparent max-w-screen-lg mx-auto">
        <div className="box-border caret-transparent text-center mb-16">
          <span className="text-xs box-border caret-transparent block tracking-[2.4px] leading-[18px] opacity-60 uppercase mb-4 font-ibm_plex_mono">
            [ ABOUT HYRUP ]
          </span>
          <h2 className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.28px] leading-[33.6px] mb-6 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
            We&#39;re Fixing The{" "}
            <span className="text-red-500 text-[28px] box-border caret-transparent tracking-[-0.28px] leading-[33.6px] md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
              Broken System
            </span>
          </h2>
          <p className="text-[oklab(0_0_0_/_0.7)] text-lg box-border caret-transparent leading-[29.25px] max-w-screen-md mx-auto md:text-xl md:leading-[32.5px]">
            Built by students, for students. We&#39;re tired of LinkedIn DMs
            that go nowhere, job applications that disappear into black holes,
            and a system that values college names over actual skills.
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-none gap-y-6 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="relative bg-[oklab(0_0_0_/_0.05)] box-border caret-transparent border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0_0_0_/_0.2)]">
            <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 mb-4">
              <div className="bg-red-500 box-border caret-transparent h-2 w-2 rounded-[1px]"></div>
              <span className="text-xs box-border caret-transparent block tracking-[1.2px] leading-[18px] opacity-60 uppercase font-ibm_plex_mono">
                THE PROBLEM
              </span>
            </div>
            <h3 className="text-xl font-semibold box-border caret-transparent leading-[26px] mb-4 md:text-[28px] md:leading-[36.4px]">
              Your Resume Gets Ignored
            </h3>
            <p className="text-sm box-border caret-transparent leading-[22.4px] opacity-70 font-ibm_plex_mono">
              Cold emails, endless scrolling, zero responses. The traditional
              job hunt is broken. Your tier-3 college name shouldn&#39;t decide
              your career.
            </p>
          </div>
          <div className="relative bg-[oklab(0.657625_0.157987_0.0754443_/_0.05)] box-border caret-transparent border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0.657625_0.157987_0.0754443_/_0.3)]">
            <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 mb-4">
              <div className="bg-red-500 box-border caret-transparent h-2 w-2 rounded-[1px]"></div>
              <span className="text-red-500 text-xs box-border caret-transparent block tracking-[1.2px] leading-[18px] uppercase font-ibm_plex_mono">
                THE SOLUTION
              </span>
            </div>
            <h3 className="text-xl font-semibold box-border caret-transparent leading-[26px] mb-4 md:text-[28px] md:leading-[36.4px]">
              Skills Over Degrees
            </h3>
            <p className="text-sm box-border caret-transparent leading-[22.4px] opacity-70 font-ibm_plex_mono">
              HYRUP matches you with opportunities based on what you can
              actually do. Real mentors. Real skills. Real jobs. No gatekeeping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};