export type StatsCardProps = {
  title: string;
  variant: "colleges" | "growth";
  colleges?: Array<{
    name: string;
    students: number;
    percentage: number;
  }>;
  stats?: Array<{
    value: string;
    label: string;
    description: string;
    labelOpacity?: boolean;
  }>;
};

export const StatsCard = (props: StatsCardProps) => {
  return (
    <div className="bg-[oklab(0_0_0_/_0.05)] dark:bg-[oklab(1_0_0_/_0.05)] box-border caret-transparent border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0_0_0_/_0.1)] dark:border-[oklab(1_0_0_/_0.1)]">
      <h3 className="text-xl font-semibold box-border caret-transparent leading-[26px] mb-6 md:text-[28px] md:leading-[36.4px] dark:text-white">
        {props.title}
      </h3>
      <div className="box-border caret-transparent">
        {props.variant === "colleges" && props.colleges && (
          <>
            {props.colleges.map((college, index) => (
              <div
                key={index}
                className={`relative box-border caret-transparent ${index < props.colleges!.length - 1 ? "mb-4" : ""}`}
              >
                <div className="items-center box-border caret-transparent flex justify-between mb-2">
                  <span className="text-sm font-medium box-border caret-transparent block leading-[22.4px] dark:text-gray-200 dark:opacity-90 font-ibm_plex_mono">
                    {college.name}
                  </span>
                  <span className="text-red-500 text-xs box-border caret-transparent block leading-[18px] font-ibm_plex_mono">
                    {college.students} students
                  </span>
                </div>
                <div className="bg-[oklab(0_0_0_/_0.1)] dark:bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent h-2 w-full rounded-sm">
                  <div
                    className="bg-red-500 box-border caret-transparent h-full rounded-sm"
                    style={{ width: `${college.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </>
        )}
        {props.variant === "growth" && props.stats && (
          <>
            {props.stats.map((stat, index) => (
              <div key={index}>
                <div
                  className={`box-border caret-transparent ${index < props.stats!.length - 1 ? "mb-6" : ""}`}
                >
                  <div className="items-baseline box-border caret-transparent gap-x-2 flex gap-y-2 mb-2">
                    <span className="text-red-500 text-[28px] font-semibold box-border caret-transparent block tracking-[-0.28px] leading-[33.6px] md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
                      {stat.value}
                    </span>
                    <span
                      className={`text-${stat.labelOpacity ? "" : "red-500 "}text-sm box-border caret-transparent block leading-[22.4px] ${stat.labelOpacity ? "opacity-60 " : ""}font-ibm_plex_mono`}
                    >
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-xs box-border caret-transparent leading-[18px] opacity-60 dark:opacity-80 dark:text-gray-400 font-ibm_plex_mono">
                    {stat.description}
                  </span>
                </div>
                {index < props.stats!.length - 1 && (
                  <div className="bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent h-px mb-6"></div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};