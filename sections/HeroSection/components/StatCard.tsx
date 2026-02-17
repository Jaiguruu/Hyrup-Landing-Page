export type StatCardProps = {
  value: string;
  label: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="bg-[oklab(0_0_0_/_0.05)] box-border caret-transparent border p-6 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0_0_0_/_0.1)]">
      <div className="text-red-500 text-[28px] font-semibold box-border caret-transparent tracking-[-0.28px] leading-[33.6px] mb-2 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
        {props.value}
      </div>
      <div className="text-xs box-border caret-transparent leading-[18px] opacity-60 font-ibm_plex_mono">
        {props.label}
      </div>
    </div>
  );
};