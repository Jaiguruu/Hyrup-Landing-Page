import { LucideIcon } from "lucide-react";

export type FeatureCardProps = {
  variant: string;
  icon?: LucideIcon;
  iconType?: string;
  badgeText?: string;
  badgeVariant?: string;
  title: string;
  description: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  const Icon = props.icon;

  return (
    <div
      className={`box-border caret-transparent border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid ${props.variant}`}
    >
      <div
        className={`items-center box-border caret-transparent flex ${props.iconType === "badge" ? "gap-x-3 gap-y-3 mb-4" : "bg-[oklab(0.657625_0.157987_0.0754443_/_0.1)] h-12 justify-center w-12 border mb-6 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0.657625_0.157987_0.0754443_/_0.3)]"}`}
      >
        {Icon ? (
          <Icon className="w-6 h-6 text-red-500" />
        ) : props.iconType === "badge" ? (
          <>
            <div className="bg-red-500 box-border caret-transparent h-2 w-2 rounded-[1px]"></div>
            <span
              className={`box-border caret-transparent block dark:opacity-80 ${props.badgeVariant}`}
            >
              {props.badgeText}
            </span>
          </>
        ) : (
          <span className="box-border caret-transparent block text-2xl leading-8">
            {props.badgeText}
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold box-border caret-transparent leading-[26px] mb-4 md:text-[28px] md:leading-[36.4px]">
        {props.title}
      </h3>
      <p className="text-sm box-border caret-transparent leading-[22.4px] opacity-70 dark:opacity-80 dark:text-gray-300 font-ibm_plex_mono">
        {props.description}
      </p>
    </div>
  );
};