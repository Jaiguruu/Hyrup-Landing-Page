export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent">
      <h4 className="text-sm font-bold box-border caret-transparent tracking-[0.7px] leading-[22.4px] uppercase mb-4 dark:text-white dark:opacity-90 font-ibm_plex_mono">
        {props.title}
      </h4>
      <ul className="box-border caret-transparent list-none pl-0">
        {props.links.map((link, index) => (
          <li
            key={index}
            className={`box-border caret-transparent ${index < props.links.length - 1 ? "mb-2" : ""}`}
          >
            <a
              href={link.href}
              className="text-xs box-border caret-transparent leading-[18px] opacity-60 dark:opacity-70 dark:text-gray-300 font-ibm_plex_mono transition-opacity duration-200 hover:opacity-100 hover:dark:text-white"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};