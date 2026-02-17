import React from 'react';

export type InfoCardProps = {
  title: string;
  content: React.ReactNode;
  showRegistrationInfo?: boolean;
  registrationDeadline?: string;
  prizeAmount?: string;
  prizeDescription?: string;
  ctaText?: string;
  ctaUrl?: string;
};

export const InfoCard = (props: InfoCardProps) => {
  return (
    <div className="bg-stone-400 dark:bg-gray-800 box-border caret-transparent border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0_0_0_/_0.2)] dark:border-[oklab(1_0_0_/_0.2)] transition-all duration-300 hover:border-red-500 hover:shadow-lg">
      <h3 className="text-xl font-semibold box-border caret-transparent leading-[26px] mb-4 md:text-[28px] md:leading-[36.4px]">
        {props.title}
      </h3>
      {props.content}
      {props.showRegistrationInfo && (
        <>
          <div className="box-border caret-transparent mb-8">
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4 mb-4">
              <div className="items-center bg-[oklab(0.657625_0.157987_0.0754443_/_0.1)] dark:bg-[oklab(0.657625_0.157987_0.0754443_/_0.2)] box-border caret-transparent flex h-16 justify-center w-16 border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0.657625_0.157987_0.0754443_/_0.3)] dark:border-[oklab(0.657625_0.157987_0.0754443_/_0.4)]">
                <img
                  src="https://c.animaapp.com/mlowuzui4moa6C/assets/icon-9.svg"
                  alt="Icon"
                  className="text-red-500 box-border caret-transparent h-8 w-8"
                />
              </div>
              <div className="box-border caret-transparent">
                <div className="font-bold box-border caret-transparent mb-1">
                  Registration Closes
                </div>
                <div className="text-xs box-border caret-transparent leading-[18px] opacity-60 dark:opacity-50 font-ibm_plex_mono">
                  {props.registrationDeadline}
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <div className="items-center bg-[oklab(0.657625_0.157987_0.0754443_/_0.1)] dark:bg-[oklab(0.657625_0.157987_0.0754443_/_0.2)] box-border caret-transparent flex h-16 justify-center w-16 border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0.657625_0.157987_0.0754443_/_0.3)] dark:border-[oklab(0.657625_0.157987_0.0754443_/_0.4)]">
                <span className="text-red-500 text-xl font-semibold box-border caret-transparent block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                  {props.prizeAmount}
                </span>
              </div>
              <div className="box-border caret-transparent">
                <div className="font-bold box-border caret-transparent mb-1">
                  Prize Pool
                </div>
                <div className="text-xs box-border caret-transparent leading-[18px] opacity-60 dark:opacity-50 font-ibm_plex_mono">
                  {props.prizeDescription}
                </div>
              </div>
            </div>
          </div>
          <a
            href={props.ctaUrl}
            className="text-sm font-medium bg-red-500 box-border caret-transparent tracking-[0.7px] leading-[21px] text-center uppercase w-full px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono transition-all duration-200 hover:bg-red-600 active:scale-95 block"
          >
            {props.ctaText}
          </a>
        </>
      )}
    </div>
  );
};